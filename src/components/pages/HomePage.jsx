import "./styles/HomePage.css";
import Pipe from "../organisms/Pipe";
import DashMenu from "../layouts/Desktop/DashMenu";
import { Outlet, Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import { ViewPost } from "../organisms";

function HomePage() {
  const { isMobile } = useSelector((state) => state.util);
  return (
    <>
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
      {/* <Routes>
        <Route path="post/:post" element={<ViewPost />} />
      </Routes> */}
    </>
  );
}
export default HomePage;
