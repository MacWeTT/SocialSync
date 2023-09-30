import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const BASEURL = process.env.REACT_APP_PUBLIC_BACKEND_URL!;

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.access_token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
    baseUrl: `${BASEURL}/users/`,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: "login/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authAPI;
