import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: window.innerWidth <= 768,
  isScreenLoading: false,
};

const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    screenWidth: (state, action) => {
      state.isMobile = action.payload;
    },
    screenLoading: (state, action) => {
      state.isScreenLoading = action.payload;
    },
  },
});

export const { screenWidth } = utilSlice.actions;

export default utilSlice.reducer;
