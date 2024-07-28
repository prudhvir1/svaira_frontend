/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import "./styles/DesktopModal.css";
import { CreatePost, Notifications, Search, ViewPost } from "../organisms";

function DesktopModal() {
  const {
    isSearchModal,
    isCreateModal,
    isNotificationsModal,
    isViewPostModal,
  } = useSelector((state) => state.modal);
  return (
    <div className="DesktopModal">
      {isSearchModal && <Search />}
      {isCreateModal && <CreatePost />}
      {isNotificationsModal && <Notifications />}
      {isViewPostModal && <ViewPost />}
    </div>
  );
}
export default DesktopModal;
