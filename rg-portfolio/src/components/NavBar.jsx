import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../../src/App.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 400);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 400);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll to work section
  const handleWorkClick = () => {
    if (location.pathname !== "/") {
      navigate("/?scroll=work");
    } else {
      const section = document.getElementById("work-section");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Nav container with left-to-right grow animation */}
      <motion.div
        className="nav-container"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        {/* LEFT */}
        <div className="left-side">
          <NavLink to="/">
            <img className="nav-icon" src="src/assets/home.png" alt="home" />
          </NavLink>
        </div>

        {/* RIGHT */}
        <div className="right-side" style={{ display: "flex", alignItems: "center" }}>
          {isMobile ? (
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : {}} />
              <motion.span animate={menuOpen ? { opacity: 0 } : {}} />
              <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : {}} />
            </button>
          ) : (
            <>
              {/* WORK */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <div className="r-div p-0-4" onClick={handleWorkClick}>
                  📂 work
                </div>
              </motion.div>

              {/* ABOUT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <NavLink className="r-div p-0-4" to="/about">
                  👩🏻‍💻 about
                </NavLink>
              </motion.div>

              {/* RIGHT-SIDE ARROW */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="right-side-circle p-0"
              >
                <div className="right-side-circle p-0">
                  <img src="src/assets/arrow.png" alt="arrow" />
                </div>
              </motion.div>
            </>
          )}
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div onClick={handleWorkClick}>📂 work</div>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              👩🏻‍💻 about
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;