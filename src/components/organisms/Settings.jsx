import { useNavigate } from "react-router";
import { useLogoutMutation } from "../../redux/api/authApiSlice";
import "./styles/Settings.css";
import { useDispatch } from "react-redux";
import { settingsMenuModal } from "../../redux/slices/modalSlice";
import { useEffect, useRef } from "react";

function Settings() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(settingsMenuModal(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Settings-Container" ref={modalRef}>
      <div className="Settings">
        <button onClick={handleLogout}>Logout</button>
        <button onClick={() => dispatch(settingsMenuModal(false))}>
          Cancel
        </button>
      </div>
    </div>
  );
}
export default Settings;
