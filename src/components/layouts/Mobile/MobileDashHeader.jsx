/* eslint-disable react/prop-types */
import "../styles/MobileDashHeader.css";
import { useEffect } from "react";
import { useLogoutMutation } from "../../../redux/api/authApiSlice";
import { useNavigate } from "react-router";

function MobileDashHeader() {
  const navigate = useNavigate();

  const [logout, { isLoading }] = useLogoutMutation();

  useEffect(() => {
    if (isLoading) navigate("/Login");
  }, [isLoading, navigate]);

  return (
    <div className="MobileDashHeader">
      <h3>SVAIRA.</h3>
      <button onClick={() => logout()}>Logout</button>
      {isLoading && <p>Loading...</p>}
    </div>
  );
}
export default MobileDashHeader;
