import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import homeIcon from "../assets/home.png";
import arrowIcon from "../assets/arrow.png";
import projectConfig from "../config/projectConfig";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const navigate = useNavigate();
  const location = useLocation();

  // ── Detect project page & look up its color ───────────────
  const isProjectPage = location.pathname.startsWith("/project/");
  const projectId = isProjectPage ? location.pathname.split("/project/")[1] : null;
  const config = projectId ? projectConfig[projectId] : null;

  const heroColor = config?.heroColor ?? "#E6D3B3";
  const isDark = isColorDark(heroColor);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleWorkClick = () => {
    if (location.pathname !== "/") {
      navigate("/?scroll=work");
    } else {
      document.getElementById("work-section")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ────────────────────────────────────────────────────────
  //  DEFAULT PAGES  — pill nav inside container
  // ────────────────────────────────────────────────────────
  if (!isProjectPage) {
    return (
      <div style={{ padding: "0 1.5rem", position: "relative" }}>
        <motion.div
          className="nav-container"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="left-side">
            <NavLink to="/">
              <img className="nav-icon" src={homeIcon} alt="home" />
            </NavLink>
          </div>

          <div className="right-side">
            {isMobile ? (
              <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span /><span /><span />
              </button>
            ) : (
              <>
                <div className="r-div" onClick={handleWorkClick}>📂 work</div>
                <NavLink className="r-div" to="/about">👩🏻‍💻 about</NavLink>
                <div className="right-side-circle">
                  <img src={arrowIcon} alt="arrow" />
                </div>
              </>
            )}
          </div>
        </motion.div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <div onClick={handleWorkClick}>📂 work</div>
              <NavLink to="/about">👩🏻‍💻 about</NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ────────────────────────────────────────────────────────
  //  PROJECT PAGES  — full-width band, color from config
  // ────────────────────────────────────────────────────────
  return (
    // This div goes 100vw — the hero section below must use
    // the same heroColor as its background so they merge
    <div
      className="nav-project-band"
      style={{ backgroundColor: heroColor }}
    >
      <div className="container nav-project-inner">
        <motion.div
          className="nav-project-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* LEFT */}
          <NavLink to="/" className="nav-project-home">
            <img className="nav-icon" src={homeIcon} alt="home" />
          </NavLink>

          {/* RIGHT */}
          <div className="nav-project-pills">
            {isMobile ? (
              <button
                className="hamburger"
                style={{ filter: isDark ? "invert(1)" : "none" }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span /><span /><span />
              </button>
            ) : (
              <>
                <div className="r-div" onClick={handleWorkClick}>📂 work</div>
                <NavLink className="r-div" to="/about">👩🏻‍💻 about</NavLink>
                <div
                  className="right-side-circle"
                  style={{
                    backgroundColor: isDark ? "rgba(255,255,255,0.15)" : "white",
                  }}
                >
                  <img
                    src={arrowIcon}
                    alt="arrow"
                    style={{ filter: isDark ? "invert(1)" : "none" }}
                  />
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            style={{
              right: "1rem",
              backgroundColor: isDark ? "rgba(0,0,0,0.6)" : "#AD0058",
            }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <div onClick={handleWorkClick}>📂 work</div>
            <NavLink to="/about">👩🏻‍💻 about</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ── Perceived brightness check ───────────────────────────────
function isColorDark(hex) {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.5;
}

export default NavBar;
