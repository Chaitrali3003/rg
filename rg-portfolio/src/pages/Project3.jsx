import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pp2 from "../assets/pp2.png";
import projectConfig from "../config/projectConfig";
import "../../src/App.css";


// ── Import shared animation helpers from Project1 ───────────
// (or move these to src/utils/projectAnimations.jsx and import from there)
import {
  fullWidthStyle,
  FadeUp,
  FadeLeft,
  FadeRight,
  StaggerParent,
  StaggerChild,
  StepItem,
} from "./Project1";

// ── This project's config ────────────────────────────────────
const PROJECT_ID = "srishti-k12";
const { heroColor, textColor, bgLight } = projectConfig[PROJECT_ID];

// Accent color specific to this project (magenta pill on navbar, tags, dots)
const ACCENT = "#AD0058";

// ── Steps ────────────────────────────────────────────────────
const steps = [
  {
    n: 1, icon: "💬", title: "Understanding the context",
    tags: ["Contextual Enquiry", "Interviews"],
    body: "Before developing the framework, I spent time understanding who it was actually for. I spoke with teachers, looked at existing frameworks like IDEO's, and tried to understand the language the students' use, their confidence levels and how they think about ideas.",
  },
  {
    n: 2, icon: "🗂", title: "Simplifying the complexity",
    tags: ["Information architecture"],
    body: "Social design involves a lot of jargon and can feel overwhelming if learning for the first time. My focus was to make the ideas more approachable. I grouped broad social topics into clearer themes, introduced the idea of a 'lens' to help students find direction and used a simple maths equation as a way to explain how design directions come together.",
  },
  {
    n: 3, icon: "🏗", title: "Building a structure",
    tags: ["Writing", "Low-fidelity visualisations"],
    body: "With the rough structure and content in place, the next step was figuring out how to present it visually. I mapped the framework onto the design thinking (Double Diamond) process and shaped it into a guided structure that could be used during classroom sessions.",
    last: true,
  },
];

// ────────────────────────────────────────────────────────────

const Project3 = () => {
  const navigate = useNavigate();

  return (
    <div className="project-page">

      {/* ── HERO ──────────────────────────────────────────── */}
      <div style={fullWidthStyle(heroColor)}>
        <div className="container proj-hero">

          <motion.h1 className="proj-title" style={{ color: textColor }}
            initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
          >
            {"How might we help K–12 students to develop social design practice?"
              .split(" ").map((word, i) => (
                <motion.span key={i}
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >{word}</motion.span>
              ))}
          </motion.h1>

          <StaggerParent className="proj-meta" stagger={0.1}>
            {[
              { label: "Stakeholder", value: "Srishti Institute of Art, Design & Technology, Bengaluru", underline: true },
              { label: "My role",     value: "Research, writing and Information design" },
              { label: "Duration",    value: "1 week" },
              { label: "Year",        value: "2024" },
            ].map(({ label, value, underline }) => (
              <StaggerChild key={label}>
                <span className="proj-meta-label">{label}</span>
                <p className="proj-meta-value" style={underline ? { textDecoration: "underline" } : {}}>{value}</p>
              </StaggerChild>
            ))}
          </StaggerParent>

        </div>
      </div>

      {/* ── HERO IMAGE ──────────────────────────────────────── */}
      <div style={fullWidthStyle("transparent")}>
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: "hidden" }}
        >
          <img src={pp2} alt="K-12 social design framework" className="proj-hero-img" />
        </motion.div>
      </div>

      {/* ── CONTEXT ─────────────────────────────────────────── */}
      <div style={fullWidthStyle("#ffffff")}>
        <div className="container proj-context proj-section-pad">

          <FadeUp><span className="proj-tag">• CONTEXT</span></FadeUp>

          <FadeUp delay={0.05}>
            <p className="proj-body">
              This project was part of a larger collaboration with Srishti Institute of Art,
              Design & Technology where we aimed to develop creative education curriculum in
              Delhi based government schools (DBSE).
            </p>
          </FadeUp>

          {/* Summary card — lavender tint matching screenshot */}
          <FadeUp delay={0.1}>
            <div className="proj-card proj-card-tint" style={{ backgroundColor: "#DDD5F0" }}>
              <p className="proj-card-eyebrow proj-card-eyebrow-accent" style={{ color: ACCENT }}>SUMMARY</p>
              <p className="proj-card-body proj-card-body-lg">
                Over a period of a week, we developed a easy to use, guided framework for
                developing socially responsible creative projects and cultivating
                community-centred design practice within students of government schools in
                Delhi, India.
              </p>
            </div>
          </FadeUp>

        </div>
      </div>

      {/* ── BRIEF DETAILS ───────────────────────────────────── */}
      <div style={fullWidthStyle(bgLight)}>
        <div className="container proj-brief proj-section-pad-brief">

          <FadeUp><h2 className="proj-section-heading">Brief details</h2></FadeUp>
          <FadeUp delay={0.05}><span className="proj-tag">• APPROACH</span></FadeUp>

          <div className="proj-stepper" style={{ marginTop: "32px" }}>
            {steps.map((step, i) => <StepItem key={step.n} {...step} index={i} />)}
          </div>

          {/* OUTCOME */}
          <FadeUp><span className="proj-tag proj-tag-mt">• OUTCOME</span></FadeUp>

          <div style={{ marginTop: "28px" }}>
            <FadeUp delay={0.05}>
              {/* Single-column outcome for this project */}
              <div className="proj-card proj-card-tint" style={{ backgroundColor: "#DDD5F0", maxWidth: "680px" }}>
                <p className="proj-card-eyebrow proj-card-eyebrow-accent" style={{ color: ACCENT }}>
                  WHAT WE DELIVERED
                </p>
                <p style={{ fontSize: "20px", fontWeight: 700, lineHeight: 1.4, margin: "0 0 16px", color: "#1a2a4a" }}>
                  A guided, easy-to-use framework for Grade 11 students in Delhi government schools
                </p>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#1a2a4a", margin: 0 }}>
                  Developed as part of the Society and Development module of the curriculum,
                  the framework blends design thinking with accessible language and visual
                  metaphors. It works both as a teaching aid for educators and as a
                  step-by-step resource for students as they develop their own social design
                  projects in class.
                </p>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.1}>
            <p className="proj-pdf-note">
              *To view the detailed process and all final outcomes, please contact me for the
              PDF portfolio.
            </p>
          </FadeUp>

        </div>
      </div>

      {/* ── PREV / NEXT ─────────────────────────────────────── */}
      <div style={fullWidthStyle(heroColor)}>
        <div className="proj-nav-footer">
          <motion.button className="proj-nav-btn" onClick={() => navigate(-1)}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            ‹ Previous project
          </motion.button>
          <motion.button className="proj-nav-btn" onClick={() => navigate(1)}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            Next project ›
          </motion.button>
        </div>
      </div>

    </div>
  );
};

export default Project3;
