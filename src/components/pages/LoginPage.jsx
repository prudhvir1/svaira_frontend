import { Outlet } from "react-router";
import "./styles/LoginPage.css";

function LoginPage() {
  console.log("LOGINPAGE");
  //  status ? (
  //   <Navigate to="/" replace />
  // ) : (
  return (
    <main className="LoginPage">
      <Outlet />
    </main>
  );
  // );
}
export default LoginPage;
