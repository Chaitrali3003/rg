import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import WorkCarousel from "../components/WorkCarousel";
import r3 from "../assets/r33.jpg";
import board from "../assets/board.png";
import mountain from "../assets/mountain.jpg";

const imagePopStyles = `
  @keyframes fadeInWord {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes chipPop {
    from {
      opacity: 0;
      transform: scale(0) rotate(-15deg);
    }
    to {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
  }

  .pop-line {
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .pop-line.visible {
    opacity: 1;
  }

  .pop-chip {
    display: inline-block;
    opacity: 0;
    transform: scale(0) rotate(-15deg);
    transition: opacity 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
                transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .pop-chip.visible {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

const Home = () => {
  const location = useLocation();
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const chip1Ref = useRef(null);
  const chip2Ref = useRef(null);
  const chip3Ref = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("scroll") === "work") {
      setTimeout(() => {
        const section = document.getElementById("work-section");
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  // Image pop animation — text fades in first, then chip springs in
  useEffect(() => {
    const lines = [line1Ref, line2Ref, line3Ref];
    const chips = [chip1Ref, chip2Ref, chip3Ref];

    lines.forEach((lineRef, i) => {
      const baseDelay = 150 + i * 320;

      // fade in the text line
      setTimeout(() => {
        lineRef.current?.classList.add("visible");
      }, baseDelay);

      // chip pops in 200ms after its line
      setTimeout(() => {
        chips[i].current?.classList.add("visible");
      }, baseDelay + 200);
    });
  }, []);

  return (
    <>
      <style>{imagePopStyles}</style>

      <div style={{ color: "black", padding: "16px 16px" }}>

        {/* Line 1 */}
        <div
          ref={line1Ref}
          className="pop-line"
          style={{
            lineHeight: "128px",
            fontSize: "76px",
            fontWeight: 500,
            marginTop: "24px",
            display: "flex",
            alignItems: "center",
          }}
        >
          I'm Reema
          <span ref={chip1Ref} className="pop-chip" style={{ marginLeft: "12px" }}>
            <img
              src={r3}
              alt="Reema"
              style={{ height: "126px", width: "auto" }}
            />
          </span>
        </div>

        {/* Line 2 */}
        <div
          ref={line2Ref}
          className="pop-line"
          style={{
            lineHeight: "128px",
            fontSize: "76px",
            fontWeight: "500",
            marginTop: "24px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span ref={chip2Ref} className="pop-chip">
            <img style={{ height: "100px", width: "170px", borderRadius:"70%" }} src={board} alt="board" />
          </span>
          a design researcher
        </div>

        {/* Line 3 */}
        <div
          ref={line3Ref}
          className="pop-line"
          style={{
            lineHeight: "128px",
            fontSize: "76px",
            fontWeight: "500",
            marginTop: "24px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          and strategist
          <span ref={chip3Ref} className="pop-chip">
            <img style={{ height: "150px", width: "170px" }} src={mountain} alt="mountain" />
          </span>
        </div>

        {/* Bio lines — unchanged */}
        <div style={{ fontSize: "20px", fontWeight: "300", marginTop: "54px" }}>
          Recently, graduated with a master's in Strategic Design from &nbsp;
          <a href="https://www.polimi.it/" target="_blank" rel="noopener noreferrer">
            <u>Politecnico di Milano</u>
          </a>{" "}
          🇮🇹
        </div>

        <div style={{ fontSize: "20px", fontWeight: "300", marginTop: "14px" }}>
          Previously, graduated from &nbsp;
          <a href="https://www.nid.edu/" target="_blank" rel="noopener noreferrer">
            <u>National Institute of Design,&nbsp; Ahmedabad</u>
          </a>{" "}
          and worked at &nbsp;
          <a href="https://www.thoughtworks.com/" target="_blank" rel="noopener noreferrer">
            <u>Thoughtworks, India</u>
          </a>
        </div>

        {/* Work carousel */}
        <div id="work-section">
          <WorkCarousel />
        </div>

      </div>
    </>
  );
};

export default Home;