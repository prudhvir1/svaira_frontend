import "../styles/DesktopLayout.css";
import { Outlet } from "react-router";
import { DashAside } from "..";

function DesktopLayout() {
  return (
    <div className="DesktopLayout">
      <div className="DesktopLayout-Main">
        <aside>
          <DashAside />
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default DesktopLayout;
