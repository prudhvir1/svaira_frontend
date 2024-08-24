import "../styles/MobileDashHeader.css";
import { useEffect } from "react";
import { useLogoutMutation } from "../../../redux/api/authApiSlice";
import { useNavigate } from "react-router";

function MobileDashHeader() {
  const navigate = useNavigate();

  const [logout, { isLoading, isSuccess }] = useLogoutMutation();

  useEffect(() => {
    if (isLoading) navigate("/Login");
  }, [isLoading, navigate]);

  return (
    <div className="MobileDashHeader">
      <button onClick={() => logout()}>Logout</button>
      {isLoading && <p>Loading...</p>}
    </div>
  );
}
export default MobileDashHeader;
