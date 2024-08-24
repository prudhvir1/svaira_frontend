/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import "../styles/MobileModal.css";
import { CreatePost, MobileSearch, Notifications } from "../../organisms";

function MobileModal() {
  const { isSearchModal, isCreateModal, isNotificationsModal } = useSelector(
    (state) => state.modal
  );
  return (
    <div className="MobileModal">
      {isSearchModal && <MobileSearch />}
      {isCreateModal && <CreatePost />}
      {isNotificationsModal && <Notifications />}
    </div>
  );
}
export default MobileModal;
