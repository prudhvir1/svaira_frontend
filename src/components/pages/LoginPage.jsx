import { Navigate, Outlet } from "react-router";
import "./styles/LoginPage.css";

function LoginPage() {
  const status = JSON.parse(localStorage.getItem("isLoggedIn"));

  return status ? (
    <Navigate to="/" replace />
  ) : (
    <main className="LoginPage">
      <Outlet />
    </main>
  );
}
export default LoginPage;
