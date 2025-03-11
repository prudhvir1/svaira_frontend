import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router";
import { selectCurrentToken } from "../../redux/slices/authSlice";

function AuthRoutes() {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
export default AuthRoutes;
