// import { setPipePosts } from "../slices/postSlice";
import { apiSlice } from "./apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPost: builder.mutation({
      query: (formData) => ({
        url: "/post",
        method: "POST",
        body: formData,
      }),
    }),
    fetchPipePosts: builder.mutation({
      query: () => ({
        url: "/post",
        method: "GET",
      }),
    }),

    fetchVotedPosts: builder.mutation({
      query: () => ({
        url: "/post/voted",
        method: "GET",
      }),
    }),
    fetchUserPosts: builder.mutation({
      query: (userId) => ({
        url: `/post/u/${userId}`,
        method: "GET",
      }),
    }),
    getPostById: builder.mutation({
      query: (postId) => ({
        url: `/post/p/${postId}`,
        method: "GET",
      }),
    }),
    votePost: builder.mutation({
      query: (data) => ({
        url: "/post/vote",
        method: "POST",
        body: data,
      }),
    }),
    removeVote: builder.mutation({
      query: (data) => ({
        url: "/post/vote",
        method: "DELETE",
        body: data,
      }),
    }),

    addComment: builder.mutation({
      query: (data) => ({
        url: "/post/comment",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddPostMutation,
  useFetchPipePostsMutation,
  useFetchVotedPostsMutation,
  useFetchUserPostsMutation,
  useGetPostByIdMutation,
  useVotePostMutation,
  useRemoveVoteMutation,
  useAddCommentMutation,
} = postApiSlice;
