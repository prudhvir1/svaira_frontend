import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: { text: "", image: null },
  option1: { text: "", image: null },
  option2: { text: "", image: null },
};

const postSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    postData: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { postData } = postSlice.actions;

export default postSlice.reducer;
