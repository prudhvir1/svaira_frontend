import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModal: false,
    isSearchModal: false,
    isCreateModal: false,
    isNotificationsModal: false,
    isViewPostModal: false,
    isPostMenuModal: false,
    data: null,
  },
  reducers: {
    searchModal: (state, action) => {
      state.isModal = action.payload;
      state.isSearchModal = action.payload;
      state.isCreateModal = false;
      state.isNotificationsModal = false;
      state.isViewPostModal = false;
    },
    createModal: (state, action) => {
      state.isModal = action.payload;
      state.isCreateModal = action.payload;
      state.isSearchModal = false;
      state.isNotificationsModal = false;
      state.isViewPostModal = false;
    },
    notificationsModal: (state, action) => {
      state.isModal = action.payload;
      state.isNotificationsModal = action.payload;
      state.isCreateModal = false;
      state.isSearchModal = false;
      state.isViewPostModal = false;
    },
    viewPostModal: (state, action) => {
      const { value, postId } = action.payload;
      state.isModal = value;
      state.isViewPostModal = value;
      state.data = postId;
      state.isCreateModal = false;
      state.isSearchModal = false;
      state.isNotificationsModal = false;
    },
    postMenuModal: (state, action) => {
      const { value, postId } = action.payload;
      state.isModal = value;
      state.isViewPostModal = false;
      state.data = postId;
      state.isCreateModal = false;
      state.isSearchModal = false;
      state.isNotificationsModal = false;
      state.isPostMenuModal = value;
    },
  },
});

export const {
  searchModal,
  createModal,
  notificationsModal,
  viewPostModal,
  postMenuModal,
} = modalSlice.actions;
export default modalSlice.reducer;

export const getPostData = (state) => state.modal;
