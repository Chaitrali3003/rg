import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import im1 from  "../assets/project1.png"
import im2 from  "../assets/project2.png"
import im3 from  "../assets/project3.png"
import im4 from  "../assets/project4.png"
import im5 from  "../assets/project5.png"   
const projects = [
  { id: 1, title: "How might emotionally aware AI support urban navigation?", image: im1 },
  { id: 2, title: "How can movement-based learning open new contexts for responsive technology?", image: im2 },
  { id: 3, title: "How might we help K–12 students to develop social design practice?", image: im3 },
  { id: 4, title: "Rethinking menstrual wellness beyond period tracking", image: im4 },
  { id: 5, title: "How might we reimagine surplus food donation as a network of mutual benefit?", image: im5 },
//   { id: 6, title: "Project 6", image: "src/assets/project6.png" },
];

const WorkCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const ref = useRef(null);
const handlePrev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  const handleNext = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

  const isMobile = window.innerWidth < 768;
  const visible = isMobile ? 1 : 3;
  const maxIndex = projects.length - visible;
  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: "rgba(255, 255, 255, 0.12)",
    backdropFilter: "blur(6px)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    borderRadius: "50%",
    width: "44px",
    height: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "inherit",
    fontSize: "18px",
    transition: "background 0.2s ease",
  };
  // ✅ AUTO SLIDE (premium smooth loop)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3200);

    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  // ✅ SCROLL PARALLAX (subtle)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div ref={ref} style={{ marginTop: "140px" }}>
      
      {/* TITLE */}
      <div
        style={{
          marginBottom: "24px",
          fontSize: "12px",
          letterSpacing: "1.5px",
          opacity: 0.7,
        }}
      >
        RECENT WORK ●
      </div>

           {/* VIEWPORT — position: relative so arrows anchor to it */}
      <div
        style={{ overflow: "hidden", width: "100%", position: "relative" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* PREV ARROW */}
        <button
          onClick={handlePrev}
          style={{ ...arrowStyle, left: "12px" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
          aria-label="Previous"
        >
          ‹
        </button>

        {/* NEXT ARROW */}
        <button
          onClick={handleNext}
          style={{ ...arrowStyle, right: "12px" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
          aria-label="Next"
        >
          ›
        </button>
        <motion.div
          drag="x"
          dragConstraints={{ left: -300, right: 0 }}
          style={{
            display: "flex",
            gap: "24px",
            x: parallaxX,
            cursor: "grab",
          }}
          animate={{
            x: `-${index * (100 / visible)}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate(`/project/${p.id}`)}
              style={{
                minWidth: isMobile
                  ? "100%"
                  : "calc((100% - 48px) / 3)",
                height: "610px",
                cursor: "pointer",
              }}
            >
              {/* IMAGE */}
              <div
                style={{
                  height: "476px",
                  overflow: "hidden",
                  borderRadius: "10px",
                }}
              >
                <motion.img
                  src={p.image}
                  alt={p.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* TEXT */}
              <div
                style={{
                  marginTop: "14px",
                  fontSize: "15px",
                  lineHeight: "22px",
                  fontWeight: 400,
                }}
              >
                {p.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkCarousel;