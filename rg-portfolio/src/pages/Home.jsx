import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import WorkCarousel from "../components/WorkCarousel";
import homepageImg from "../assets/r3.jpg";
import board from "../assets/board.png";
import mountain from "../assets/mountain.jpg";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("scroll") === "work") {
      setTimeout(() => {
        const section = document.getElementById("work-section");
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <div style={{ color: "black", padding: "16px 16px" }}>
      
      {/* 👇 YOUR ORIGINAL CONTENT (UNCHANGED) */}
     <div style={{
  lineHeight: '128px',
  fontSize: '76px',
  fontWeight: 500,
  marginTop: '24px',
  display: 'flex',
  alignItems: 'center' // vertical align with text
}}>
  I’m Reema
  <img
    src={homepageImg}
    alt="Reema"
    style={{
      height: '126px',       // match font size or desired height
      width: 'auto',        // preserve aspect ratio
      marginLeft: '12px',   // spacing from text
    }}
  />
</div>

      <div style={{lineHeight:'128px', fontSize:'76px',fontWeight:'500', marginTop:'24px'}}>
        <img style={{height:'50px',width:'70px'}} src={board} alt="board" />
        a design researcher
      </div>

      <div style={{lineHeight:'128px', fontSize:'76px',fontWeight:'500', marginTop:'24px'}}>
        and strategist 
        <img style={{height:'50px',width:'70px'}} src={mountain} alt="mountain" />
      </div>

      {/* 👇 THESE 2 LINES (KEPT EXACTLY) */}
      <div style={{ fontSize:'20px',fontWeight:'300', marginTop:'54px'}}>
        Recently, graduated with a master’s in Strategic Design from  &nbsp;
        <a href="https://www.polimi.it/" target="_blank" rel="noopener noreferrer">
          <u>Politecnico di Milano</u>
        </a> 🇮🇹
      </div>

      <div style={{ fontSize:'20px',fontWeight:'300', marginTop:'14px'}}>
        Previously, graduated from &nbsp;
        <a href="https://www.nid.edu/" target="_blank" rel="noopener noreferrer">
          <u>National Institute of Design,&nbsp; Ahmedabad</u>
        </a> and worked at &nbsp;
        <a href="https://www.thoughtworks.com/" target="_blank" rel="noopener noreferrer">
          <u>Thoughtworks, India</u>
        </a>
      </div>

      {/* 👇 ADD CAROUSEL BELOW */}
      <div id="work-section">
        <WorkCarousel />
      </div>

    </div>
  );
};

export default Home;