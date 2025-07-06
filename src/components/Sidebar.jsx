import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const onResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLinkClick = () => {
    if (!isDesktop) {
      setSidebarOpen(false);
    }
  };

  const handleScrollToSection = (sectionId) => {
    handleLinkClick();

    setTimeout(() => {
      if (sectionId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
  };

  return (
    <>
      {!sidebarOpen && (
        <button
          className="btn position-fixed sidebarHamburger"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <i className="bi accentText bi-list"></i>
        </button>
      )}

      {!isDesktop && sidebarOpen && (
        <div
          className="position-fixed w-100 h-100 sidebarOverlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className="position-fixed top-0 vh-100 d-flex flex-column flex-shrink-0 sidebar"
        style={{
          left: sidebarOpen ? "0" : "-280px",
        }}
      >
        <div className="p-3 sidebarBreak">
            
          <div className="row justify-content-center">
            <div className="col-12 text-center sidebarText">
              <i className="bi bi-box2-heart-fill"></i>
            </div>
          </div>
          <div className="position-relative d-flex align-items-center">
            <Link
              to="/"
              className="position-absolute text-white text-decoration-none"
              onClick={handleLinkClick}
            >
              <span className="fs-4 sidebarText">Chairish</span>
            </Link>

            <button
              className="btn sidebarClose btn-sm ms-auto"
              onClick={toggleSidebar}
              aria-label="Close sidebar"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>

        <div className="p-3 flex-grow-1">
          <ul className="nav nav-pills flex-column" style={{ listStyle: 'none' }}>
            <li className="nav-item mb-1">
              <Link
                to="/"
                className="nav-link accentText d-flex align-items-center py-2 sidebarText"
                onClick={() => handleScrollToSection("top")}
              >
                <i className="bi bi-house-door me-2"></i>
                Home
              </Link>
            </li>
            <li className="nav-item mb-1">
              <Link
                to="/search"
                className="nav-link accentText d-flex align-items-center py-2 sidebarText"
                onClick={handleLinkClick}
              >
                <i class="bi bi-lamp me-2"></i>
                Furniture
              </Link>
            </li>
            <li className="nav-item mb-1">
              <Link
                to="/cart"
                className="nav-link accentText d-flex align-items-center py-2 sidebarText"
                onClick={handleLinkClick}
              >
                <i className="bi bi-cart me-2"></i>
                Cart
              </Link>
            </li>
            <li className="nav-item mb-1">
              <Link
                to="/survey"
                className="nav-link accentText d-flex align-items-center py-2 sidebarText"
                onClick={handleLinkClick}
              >
                <i className="bi bi-clipboard-check me-2"></i>
                Survey
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;