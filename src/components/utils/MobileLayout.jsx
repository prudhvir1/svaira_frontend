import { Outlet } from "react-router";
import "./styles/MobileLayout.css";
import DashNav from "../layouts/DashNav";

function MobileLayout() {
  return (
    <div className="MobileLayout">
      <div className="MobileLayout-Main">
        <main>
          <Outlet />
        </main>
        <nav>
          <DashNav />
        </nav>
      </div>
    </div>
  );
}
export default MobileLayout;
