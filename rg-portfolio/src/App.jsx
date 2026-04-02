import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectPage from "./pages/ProjectPage";

import "./App.css";

const Layout = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith("/project/");

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

      {/* NAVBAR (always inside container) */}
      <div className="container">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1 }}>
        {isProjectPage ? (
          // ❌ NO container for project pages
          <Routes>
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        ) : (
          // ✅ container for normal pages
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