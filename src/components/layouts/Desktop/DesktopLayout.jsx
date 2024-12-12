import "../styles/DesktopLayout.css";
import { Outlet } from "react-router";
import { DashNav } from "..";

function DesktopLayout() {
  return (
    <div className="DesktopLayout">
      <div className="DesktopLayout-Main">
        <aside>
          <DashNav />
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default DesktopLayout;
