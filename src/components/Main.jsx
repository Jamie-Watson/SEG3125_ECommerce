import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

function Main({ children, sidebarOpen, setSidebarOpen }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const onResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);

      if (desktop && !sidebarOpen) {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [sidebarOpen, setSidebarOpen]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className="main-content"
        style={{
          marginLeft: isDesktop && sidebarOpen ? "280px" : "0",
          minHeight: "100vh",
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <div className="container-fluid p-0 m-0">
          <div className="row g-0 justify-content-center">
            <div className="col-12">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;