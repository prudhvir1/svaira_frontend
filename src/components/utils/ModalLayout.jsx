import { useEffect, useState } from "react";
import DesktopModal from "../layouts/DesktopModal";
import MobileModal from "../layouts/MobileModal";
function ModalLayout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <MobileModal />
      ) : (
        <>
          <DesktopModal />
        </>
      )}
    </div>
  );
}
export default ModalLayout;
