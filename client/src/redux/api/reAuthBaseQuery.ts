import {
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout } from "../reducers/userSlice";

const BASEURL = process.env.REACT_APP_PUBLIC_BACKEND_URL!;

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASEURL}/users/`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.access_token;
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

const reAuthBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if ((result.error?.data as any)?.message === "You are not logged in") {
    try {
      const refreshResult = await baseQuery(
        { credentials: "include", url: "auth/refresh" },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
        window.location.href = "/login";
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    result = await baseQuery(args, api, extraOptions);
  }
  return result;
};

export default reAuthBaseQuery;
