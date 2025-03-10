/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import "../styles/MobileModal.css";
import { MobileCreatePost, MobileSearch, Notifications } from "../../organisms";
import PostMenu from "../../organisms/PostMenu";
import ProfileEdit from "../../organisms/ProfileEdit";

function MobileModal() {
  const {
    isSearchModal,
    isCreateModal,
    isNotificationsModal,
    isPostMenuModal,
    isProfileEditModal,
  } = useSelector((state) => state.modal);
  return (
    <div className="MobileModal">
      {isSearchModal && <MobileSearch />}
      {isCreateModal && <MobileCreatePost />}
      {isNotificationsModal && <Notifications />}
      {isPostMenuModal && <PostMenu />}
      {isProfileEditModal && <ProfileEdit />}
    </div>
  );
}
export default MobileModal;
