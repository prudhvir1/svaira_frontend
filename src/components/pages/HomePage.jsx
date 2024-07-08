import "./styles/HomePage.css";
import Pipe from "../organisms/Pipe";
import DashMenu from "../organisms/DashMenu";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

function HomePage() {
  const { isMobile } = useSelector((state) => state.util);
  return (
    <>
      <Outlet />
      <main>
        <Pipe />
        {!isMobile && <DashMenu />}
      </main>
    </>
  );
}
export default HomePage;
