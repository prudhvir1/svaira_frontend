import { useDispatch } from "react-redux";
import { ModalCloseButton } from "../atoms";
import "./styles/Notifications.css";
import { notificationsModal } from "../../redux/slices/modalSlice";
function Notifications() {
  const dispatch = useDispatch();

  return (
    <div className="Notifications">
      <div className="Notifications-Container">
        <div className="Notifications-Content">Notifications</div>
        <div className="Close-Button">
          <ModalCloseButton
            onClick={() => dispatch(notificationsModal(false))}
          />
        </div>
      </div>
    </div>
  );
}
export default Notifications;
