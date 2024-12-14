import "./styles/HomePage.css";
import Pipe from "../organisms/Pipe";
import DashMenu from "../layouts/Desktop/DashMenu";
import { useSelector } from "react-redux";
import { MobileDashHeader } from "../layouts";

function HomePage() {
  const { isMobile } = useSelector((state) => state.util);
  return (
    <>
      <main className="HomePage">
        {isMobile && (
          <header>
            <MobileDashHeader />
          </header>
        )}
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
