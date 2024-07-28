import { createSlice } from "@reduxjs/toolkit";

const initialState = { profile: null, usersProfile: null };

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setUsersProfile: (state, action) => {
      state.usersProfile = action.payload;
    },
  },
});

export const { setProfile, setUsersProfile } = profileSlice.actions;

export const getProfile = (state) => state.profile;
export const getUsersProfile = (state) => state.usersProfile;

export default profileSlice.reducer;
