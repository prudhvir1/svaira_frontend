import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModal: false,
    isSearchModal: false,
    isCreateModal: false,
    isNotificationsModal: false,
    data: null,
  },
  reducers: {
    searchModal: (state, action) => {
      console.log(action.payload);
      state.isModal = action.payload;
      state.isSearchModal = action.payload;
      state.isCreateModal = false;
      state.isNotificationsModal = false;
    },
    createModal: (state, action) => {
      state.isModal = action.payload;
      state.isCreateModal = action.payload;
      state.isSearchModal = false;
      state.isNotificationsModal = false;
    },
    notificationsModal: (state, action) => {
      state.isModal = action.payload;
      state.isNotificationsModal = action.payload;
      state.isCreateModal = false;
      state.isSearchModal = false;
    },
  },
});

export const { searchModal, createModal, notificationsModal } =
  modalSlice.actions;
export default modalSlice.reducer;
