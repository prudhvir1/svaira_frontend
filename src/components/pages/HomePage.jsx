import "./styles/HomePage.css";
import Pipe from "../organisms/Pipe";
import DashMenu from "../layouts/DashMenu";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

function HomePage() {
  const { isMobile } = useSelector((state) => state.util);
  return (
    <>
      <Outlet />
      <main className="HomePage">
        <div className="Pipe-Panel">
          <Pipe />
        </div>
        {!isMobile && (
          <div className="Menu-Panel">
            <DashMenu />
          </div>
        )}
      </main>
    </>
  );
}
export default HomePage;
