import React from 'react'
import { useEffect } from "react";
const About = () => {

   useEffect(() => {
    
    document.body.style.backgroundImage = "url('src/assets/tulips.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);
  return (
    <div style={{color:'black', background:'white',fontSize:'18px', lineHeight:'32px', fontWeight:'400', padding:'16px 16px'}}>
      <div>About 👩🏻</div>
      <br />

      <div style={{lineHeight:'28px', fontSize:'24px',fontWeight:'500'}}>My passion for design began at home, watching my mother build a grassroots enterprise. Growing up around the enterprise sparked my curiosity about building organisations that balance positive impact with economic sustainability. That curiosity shaped my decision to study design at the National Institute of Design, Ahmedabad.</div>
<br />
      <div style={{lineHeight:'28px', fontSize:'24px',fontWeight:'500'}}>Over 3+ years, I’ve worked across digital experiences, curriculum design and facilitation in diverse cultural contexts. Across projects, research became my anchor, helping me ask why, challenge assumptions, and understand the social, cultural and systemic forces shaping decisions. This shifted my focus from outputs to how problems are framed, how systems interact and how design choices affect different actors.</div>
      <br />
      <div style={{lineHeight:'28px', fontSize:'24px',fontWeight:'500'}}>As of 2026, I completed my master’s in Strategic Design at Politecnico di Milano, which has increasingly made me interested on design futures, emotional design & creative research. This period has shaped how I approach innovation: balancing imagination with reflection and ambition with care.</div>
    

    
    
    </div>
  )
}

export default About
