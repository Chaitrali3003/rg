import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import tulipsBg from "../assets/tulips.jpg";

import aboutImg1 from "../assets/about1.jpg";
import aboutImg2 from "../assets/about2.jpg";
import aboutImg3 from "../assets/about3.jpg";
import aboutImg4 from "../assets/about4.jpg";
import aboutImg5 from "../assets/about5.png";
import aboutImg6 from "../assets/about6.png";
import aboutImg7 from "../assets/about7.png";

const images = [aboutImg1, aboutImg2, aboutImg3, aboutImg4, aboutImg5, aboutImg6, aboutImg7];

const skills = [
  { label: "Storytelling",       color: "#ad1457" },
  { label: "Scenario Building",  color: "#e91e8c" },
  { label: "Mapping Complexity", color: "#ad1457" },
  { label: "Design Futures",     color: "#e91e8c" },
  { label: "Facilitation",       color: "#ad1457" },
  { label: "Strategic Thinking", color: "#e91e8c" },
];

const pillRotations = [-6, 4, -3, 7, -5, 3];

const About = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const visible = isMobile ? 1 : 3;
  const maxIndex = images.length - visible;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIndex(0);
  }, [visible]);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${tulipsBg})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3200);
    return () => clearInterval(timer);
  }, [isHovered, maxIndex]);

  const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "50%",
    width: "44px",
    height: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "white",
    fontSize: "20px",
  };

  return (
    <div>
      {/* TEXT */}
      <div
        style={{
          color: "black",
          background: "white",
          fontSize: "18px",
          lineHeight: "32px",
          fontWeight: "400",
          padding: "16px 16px 32px",
        }}
      >
        <div>About 👩🏻</div>
        <br />
        <div style={{ lineHeight: "28px", fontSize: isMobile ? "18px" : "24px", fontWeight: "500" }}>
          My passion for design began at home, watching my mother build a grassroots enterprise.
          Growing up around the enterprise sparked my curiosity about building organisations that
          balance positive impact with economic sustainability. That curiosity shaped my decision to
          study design at the National Institute of Design, Ahmedabad.
        </div>
        <br />
        <div style={{ lineHeight: "28px", fontSize: isMobile ? "18px" : "24px", fontWeight: "500" }}>
          Over 3+ years, I've worked across digital experiences, curriculum design and facilitation
          in diverse cultural contexts. Across projects, research became my anchor, helping me ask
          why, challenge assumptions, and understand the social, cultural and systemic forces shaping
          decisions. This shifted my focus from outputs to how problems are framed, how systems
          interact and how design choices affect different actors.
        </div>
        <br />
        <div style={{ lineHeight: "28px", fontSize: isMobile ? "18px" : "24px", fontWeight: "500" }}>
          As of 2026, I completed my master's in Strategic Design at Politecnico di Milano, which
          has increasingly made me interested on{" "}
          <strong>design futures, emotional design & creative research</strong>. This period has
          shaped how I approach innovation: balancing imagination with reflection and ambition with
          care.
        </div>
      </div>

      {/* IMAGE CAROUSEL */}
      <div
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          background: "white",
          position: "relative",
          overflow: "hidden",
          height: isMobile ? "260px" : "360px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button onClick={prev} style={{ ...arrowStyle, left: "16px" }}>
          ‹
        </button>
        <button onClick={next} style={{ ...arrowStyle, right: "16px" }}>
          ›
        </button>

        <motion.div
          animate={{ x: `-${index * (100 / visible)}%` }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          style={{ display: "flex", height: "100%" }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              style={{
                minWidth: `${100 / visible}%`,
                height: "100%",
                padding: "0 4px",
                boxSizing: "border-box",
              }}
            >
              <img
                src={img}
                alt={`about ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                  display: "block",
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* PILLS */}
      <div
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          padding: "40px 24px 56px",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
          zIndex: 1,
          background: "white",
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, y: -100, rotate: pillRotations[i] }}
            whileInView={{ opacity: 1, y: 0, rotate: pillRotations[i] * 0.4 }}
            viewport={{ once: false, margin: "0px 0px -150px 0px" }}
            transition={{
              delay: i * 0.1,
              type: "spring",
              stiffness: 280,
              damping: 12,
            }}
            style={{
              background: skill.color,
              color: "white",
              borderRadius: "999px",
              padding: isMobile ? "8px 16px" : "10px 22px",
              fontSize: isMobile ? "11px" : "13px",
              fontWeight: "500",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              cursor: "default",
            }}
          >
            {skill.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;