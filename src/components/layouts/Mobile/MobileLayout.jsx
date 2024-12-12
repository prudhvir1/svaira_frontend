import { Outlet } from "react-router";
import "../styles/MobileLayout.css";
import MobileDashHeader from "./MobileDashHeader";
import DashNav from "../Desktop/DashNav";

function MobileLayout() {
  return (
    <div className="MobileLayout">
      <div className="MobileLayout-Main">
        <header>
          <MobileDashHeader />
        </header>
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
