import { apiSlice } from "./apiSlice";
import { logout, setCredentials } from "../slices/authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/user/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: "/user/signup",
        method: "POST",
        body: { ...data },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.statusCode === 200) {
            dispatch(logout());
            dispatch(apiSlice.util.resetApiState());
          }
        } catch (err) {
          console.log(err);
        }
      },
    }),
    refresh: builder.mutation({
      query: () => ({
        url: "/auth/refresh",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { accessToken } = data.data;
          dispatch(setCredentials({ accessToken }));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
  useRefreshMutation,
} = authApiSlice;
