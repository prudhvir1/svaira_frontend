/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import "./styles/DesktopModal.css";
import { CreatePost, Notifications, Search } from "../organisms";

function DesktopModal() {
  const { isSearchModal, isCreateModal, isNotificationsModal } = useSelector(
    (state) => state.modal
  );
  return (
    <div className="DesktopModal">
      {isSearchModal && <Search />}
      {isCreateModal && <CreatePost />}
      {isNotificationsModal && <Notifications />}
    </div>
  );
}
export default DesktopModal;
