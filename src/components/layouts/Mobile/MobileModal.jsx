/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import "../styles/MobileModal.css";
import { MobileCreatePost, MobileSearch, Notifications } from "../../organisms";
import PostMenu from "../../organisms/PostMenu";
import MobileProfileEdit from "../../organisms/MobileProfileEdit";

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
      {isProfileEditModal && <MobileProfileEdit />}
    </div>
  );
}
export default MobileModal;
