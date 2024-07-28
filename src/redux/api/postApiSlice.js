// import { setPipePosts } from "../slices/postSlice";
import { apiSlice } from "./apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPost: builder.mutation({
      query: (formData) => ({
        url: "/post/create",
        method: "POST",
        body: formData,
      }),
    }),
    fetchPipePosts: builder.mutation({
      query: () => ({
        url: "/post/pipe_posts",
        method: "GET",
      }),
    }),
    fetchUserPosts: builder.mutation({
      query: () => ({
        url: "/post/",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddPostMutation,
  useFetchPipePostsMutation,
  useFetchUserPostsMutation,
} = postApiSlice;
