import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModal: false,
    isSearchModal: false,
    isCreateModal: false,
    isNotificationsModal: false,
    isPostMenuModal: false,
    isProfileEditModal: false,
    isSettingsMenuModal: false,
    data: null,
  },
  reducers: {
    searchModal: (state, action) => {
      state.isModal = action.payload;
      state.isSearchModal = action.payload;
      state.isCreateModal = false;
      state.isNotificationsModal = false;
      state.isViewPostModal = false;
      state.isPostMenuModal = false;
      state.isProfileEditModal = false;
      state.isSettingsMenuModal = false;
    },
    createModal: (state, action) => {
      state.isModal = action.payload;
      state.isCreateModal = action.payload;
      state.isSearchModal = false;
      state.isNotificationsModal = false;
      state.isViewPostModal = false;
      state.isPostMenuModal = false;
      state.isProfileEditModal = false;
      state.isSettingsMenuModal = false;
    },
    notificationsModal: (state, action) => {
      state.isModal = action.payload;
      state.isNotificationsModal = action.payload;
      state.isCreateModal = false;
      state.isSearchModal = false;
      state.isViewPostModal = false;
      state.isPostMenuModal = false;
      state.isProfileEditModal = false;
      state.isSettingsMenuModal = false;
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
      state.isProfileEditModal = false;
      state.isSettingsMenuModal = false;
    },
    profileEditModal: (state, action) => {
      const { value, data } = action.payload;
      console.log(data);
      state.isModal = value;
      state.isViewPostModal = false;
      state.data = data;
      state.isCreateModal = false;
      state.isSearchModal = false;
      state.isNotificationsModal = false;
      state.isPostMenuModal = false;
      state.isProfileEditModal = value;
      state.isSettingsMenuModal = false;
    },
    settingsMenuModal: (state, action) => {
      state.isModal = action.payload;
      state.isViewPostModal = false;
      state.isCreateModal = false;
      state.isSearchModal = false;
      state.isNotificationsModal = false;
      state.isPostMenuModal = false;
      state.isProfileEditModal = false;
      state.isSettingsMenuModal = action.payload;
    },
  },
});

export const {
  searchModal,
  createModal,
  notificationsModal,
  postMenuModal,
  profileEditModal,
  settingsMenuModal,
} = modalSlice.actions;
export default modalSlice.reducer;

export const getPostData = (state) => state.modal;
