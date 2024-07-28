// import { setPipePosts } from "../slices/postSlice";
import { apiSlice } from "./apiSlice";

export const utilApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchUser: builder.mutation({
      query: (keywords) => ({
        url: "/user/search_user",
        method: "POST",
        body: { keywords },
      }),
    }),
  }),
});

export const { useSearchUserMutation } = utilApiSlice;
