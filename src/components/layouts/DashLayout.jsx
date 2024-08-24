import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { screenWidth } from "../../redux/slices/utilSlice";
import MobileModal from "./Mobile/MobileModal";
import { DesktopLayout, DesktopModal, MobileLayout } from ".";
function DashLayout() {
  const dispatch = useDispatch();

  const { isMobile } = useSelector((state) => state.util);
  const { isModal } = useSelector((state) => state.modal);

  useEffect(() => {
    const handleResize = () => dispatch(screenWidth(window.innerWidth <= 768));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <>
          {isModal && <MobileModal />}
          <MobileLayout />
        </>
      ) : (
        <>
          {isModal && <DesktopModal />}
          <DesktopLayout />
        </>
      )}
    </div>
  );
}
export default DashLayout;
