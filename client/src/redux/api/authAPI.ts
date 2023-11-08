import { createApi } from "@reduxjs/toolkit/query/react";
import reAuthBaseQuery from "./reAuthBaseQuery";

//Types
import { LoginCreds } from "../../common/types/authAPI";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: reAuthBaseQuery,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials: LoginCreds) => ({
        url: "login/",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authAPI;
