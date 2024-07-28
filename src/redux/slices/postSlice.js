import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pipePosts: [],
  userPosts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPipePosts: (state, action) => {
      console.log(action.payload);
      state.pipePosts = action.payload;
    },
    setUserPosts: (state, action) => {
      state.userPosts = action.payload;
    },
  },
});

export const { setPipePosts, setUserPosts } = postSlice.actions;

export const getPost = (state) => state.post;

export default postSlice.reducer;
