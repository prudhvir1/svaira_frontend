import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pipe: {
    page: 1,
    totalPages: 1,
    data: [],
  },
  user: {
    page: 1,
    totalPages: 1,
    data: [],
  },
  profile: {
    page: 1,
    totalPages: 1,
    data: [],
  },
  voted: {
    page: 1,
    totalPages: 1,
    data: [],
  },
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPipePosts: (state, action) => {
      state.pipe.totalPages = action.payload.totalPages;
      state.pipe.page = state.pipe.page + 1;
      state.pipe.data = [...state.pipe.data, ...action.payload.data];
    },
    setProfilePosts: (state, action) => {
      state.profile.totalPages = action.payload.totalPages;
      state.profile.page = state.profile.page + 1;
      state.profile.data = [...state.profile.data, ...action.payload.data];
    },
    setVotedPosts: (state, action) => {
      state.voted.totalPages = action.payload.totalPages;
      state.voted.page = state.voted.page + 1;
      state.voted.data = [...state.voted.data, ...action.payload.data];
    },
    setUserPosts: (state, action) => {
      state.user.totalPages = action.payload.totalPages;
      state.user.page = state.user.page + 1;
      state.user.data = [...state.user.data, ...action.payload.data];
    },
  },
});

export const { setPipePosts, setProfilePosts, setVotedPosts, setUserPosts } =
  postSlice.actions;

export default postSlice.reducer;
