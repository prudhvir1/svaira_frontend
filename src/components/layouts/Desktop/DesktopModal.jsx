/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import "../styles/DesktopModal.css";
import { CreatePost, Notifications, Search, ViewPost } from "../../organisms";
import PostMenu from "../../organisms/PostMenu";

function DesktopModal() {
  const {
    isSearchModal,
    isCreateModal,
    isNotificationsModal,
    isViewPostModal,
    isPostMenuModal,
  } = useSelector((state) => state.modal);
  return (
    <div className="DesktopModal">
      {isSearchModal && <Search />}
      {isCreateModal && <CreatePost />}
      {isNotificationsModal && <Notifications />}
      {isViewPostModal && <ViewPost />}
      {isPostMenuModal && <PostMenu />}
    </div>
  );
}
export default DesktopModal;
