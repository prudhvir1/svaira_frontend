import { createSlice } from "@reduxjs/toolkit";

const initialState = { isMobile: window.innerWidth <= 768 };

const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    screenWidth: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { screenWidth } = utilSlice.actions;

export default utilSlice.reducer;
