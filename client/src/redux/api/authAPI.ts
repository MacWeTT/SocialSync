import { createApi } from "@reduxjs/toolkit/query/react";
import reAuthBaseQuery from "./reAuthBaseQuery";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: reAuthBaseQuery,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "login/",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authAPI;
