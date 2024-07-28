import { Outlet } from "react-router";
import "./styles/MobileLayout.css";
import MobileDashNav from "../layouts/MobileDashNav";

function MobileLayout() {
  return (
    <div className="MobileLayout">
      <div className="MobileLayout-Main">
        <main>
          <Outlet />
        </main>
        <nav>
          <MobileDashNav />
        </nav>
      </div>
    </div>
  );
}
export default MobileLayout;
