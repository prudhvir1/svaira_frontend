import { setProfile, setUsersProfile } from "../slices/profileSlice";
import { apiSlice } from "./apiSlice";

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { profile } = data.data;
          dispatch(setProfile(profile));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    getUsersProfile: builder.mutation({
      query: (username) => ({
        url: `/user/profile/${username}`,
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUsersProfile(data.data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/user/profile",
        method: "PUT",
        body: { ...data },
      }),
    }),
    updateProfileAvatar: builder.mutation({
      query: (data) => ({
        url: "/user/profile_avatar",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetUsersProfileMutation,
  useUpdateProfileMutation,
  useUpdateProfileAvatarMutation,
} = profileApiSlice;
