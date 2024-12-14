/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import "../styles/MobileModal.css";
import { MobileCreatePost, MobileSearch, Notifications } from "../../organisms";
import PostMenu from "../../organisms/PostMenu";

function MobileModal() {
  const {
    isSearchModal,
    isCreateModal,
    isNotificationsModal,
    isPostMenuModal,
  } = useSelector((state) => state.modal);
  return (
    <div className="MobileModal">
      {isSearchModal && <MobileSearch />}
      {isCreateModal && <MobileCreatePost />}
      {isNotificationsModal && <Notifications />}
      {isPostMenuModal && <PostMenu />}
    </div>
  );
}
export default MobileModal;
