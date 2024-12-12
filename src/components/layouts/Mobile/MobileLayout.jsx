import { Outlet } from "react-router";
import "../styles/MobileLayout.css";
import MobileDashNav from "./MobileDashNav";
import MobileDashHeader from "./MobileDashHeader";

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
          <MobileDashNav />
        </nav>
      </div>
    </div>
  );
}
export default MobileLayout;
