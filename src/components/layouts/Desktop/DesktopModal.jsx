/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import "../styles/DesktopModal.css";
import { CreatePost, Notifications, Search, ViewPost } from "../../organisms";
import PostMenu from "../../organisms/PostMenu";
import ProfileEdit from "../../organisms/ProfileEdit";
import Settings from "../../organisms/Settings";

function DesktopModal() {
  const {
    isSearchModal,
    isCreateModal,
    isNotificationsModal,
    isViewPostModal,
    isPostMenuModal,
    isProfileEditModal,
  } = useSelector((state) => state.modal);
  return (
    <div className="DesktopModal">
      {isSearchModal && <Search />}
      {isCreateModal && <CreatePost />}
      {isNotificationsModal && <Notifications />}
      {isViewPostModal && <ViewPost />}
      {isPostMenuModal && <PostMenu />}
      {isProfileEditModal && <ProfileEdit />}
    </div>
  );
}
export default DesktopModal;
