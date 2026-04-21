import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Layout = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/project/");

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ScrollToTop />  {/* ← add here, inside Layout which is inside BrowserRouter */}

      <div className="container">
        <Navbar />
      </div>

      <div style={{ flex: 1 }}>
        {isProjectPage ? (
          <Routes>
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        ) : (
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;