/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import "../styles/DesktopModal.css";
import { CreatePost, Notifications, Search, ViewPost } from "../../organisms";
import PostMenu from "../../organisms/PostMenu";
import ProfileEdit from "../../organisms/ProfileEdit";
import ViewComments from "../../organisms/ViewComments";

function DesktopModal() {
  const {
    isSearchModal,
    isCreateModal,
    isNotificationsModal,
    isViewPostModal,
    isPostMenuModal,
    isProfileEditModal,
    isCommentsModal,
  } = useSelector((state) => state.modal);

  console.log(isCommentsModal);
  return (
    <div className="DesktopModal">
      {isSearchModal && <Search />}
      {isCreateModal && <CreatePost />}
      {isNotificationsModal && <Notifications />}
      {isViewPostModal && <ViewPost />}
      {isPostMenuModal && <PostMenu />}
      {isProfileEditModal && <ProfileEdit />}
      {isCommentsModal && <ViewComments />}
    </div>
  );
}
export default DesktopModal;
