import { Link } from "react-router-dom";
import "./styles/DashAside.css";
import { useDispatch } from "react-redux";
import {
  createModal,
  notificationsModal,
  searchModal,
} from "../../redux/slices/modalSlice";

function DashAside() {
  const dispatch = useDispatch();

  return (
    <div className="DashAside">
      <div className="DashAsideContainer">
        <div className="Logo">
          <h1>SVAIRA</h1>
        </div>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li onClick={() => dispatch(searchModal(true))}>Search</li>
          <li>
            <Link to="Trending">Trending</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="Profile">Profile</Link>
          </li>
          <li onClick={() => dispatch(notificationsModal(true))}>
            Notifications
          </li>
          <li onClick={() => dispatch(createModal(true))}>Create</li>
        </ul>
        <ul>
          <li>
            <Link to="Settings">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default DashAside;
