import "./styles/DashHeader.css";
import { useEffect } from "react";
import { useLogoutMutation } from "../../redux/api/authApiSlice";
import { useNavigate } from "react-router";

function DashHeader() {
  const navigate = useNavigate();

  const [logout, { isLoading, isSuccess }] = useLogoutMutation();

  useEffect(() => {
    console.log(isSuccess);
    if (isLoading) navigate("/Login");
  }, [isLoading, navigate]);

  return (
    <div className="DashHeader">
      <button onClick={() => logout()}>Logout</button>
      {isLoading && <p>Loading...</p>}
    </div>
  );
}
export default DashHeader;
