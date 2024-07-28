// import { setPipePosts } from "../slices/postSlice";
import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    followUser: builder.mutation({
      query: (userId) => ({
        url: "/user/follow",
        method: "PUT",
        body: { userId },
      }),
    }),
  }),
});

export const { useFollowUserMutation } = userApiSlice;
