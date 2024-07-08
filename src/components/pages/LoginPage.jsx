import { Outlet } from "react-router";
import "./styles/LoginPage.css";

function LoginPage() {
  return (
    <main className="LoginPage">
      <Outlet />
    </main>
  );
}
export default LoginPage;
