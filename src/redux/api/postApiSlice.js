import { setProfile } from "../slices/profileSlice";
import { apiSlice } from "./apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.mutation({
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
  }),
});
