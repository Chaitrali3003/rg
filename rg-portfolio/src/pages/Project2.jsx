import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pp3 from "../assets/pp3.png";
import projectConfig from "../config/projectConfig";
import "../../src/App.css";


import {
  fullWidthStyle,
  FadeUp,
  FadeLeft,
  FadeRight,
  StaggerParent,
  StaggerChild,
  StepItem,
} from "./Project1";

const PROJECT_ID = "asb-glassfloor";
const { heroColor, textColor, bgLight } = projectConfig[PROJECT_ID];

// On dark hero the meta label colour should be lighter
const LABEL_COLOR = "#E07AAC";   // lighter pink visible on dark bg
const ACCENT      = "#AD0058";

const steps = [
  {
    n: 1, icon: "🔭", title: "Starting wide and deep",
    tags: ["Trend and weak signal research", "Service development"],
    body: "While some team members were ready to move directly to ideation, I proposed beginning with broad horizon scanning and grounding our ideas in what's happening in real life. We moved first across scales: personalised learning, gamification, kinaesthetic learning, adaptive systems, special needs education, learning through play. Three concept directions emerged from this, each addressing a different human context.",
  },
  {
    n: 2, icon: "🎯", title: "Choosing a direction",
    tags: ["Persona development", "Design thinking"],
    body: "An early concept of adaptive training for large tech organisations emerged from the team. Three of us within the team weren't satisfied with the concept. The reframe came through collaboration where we asked what human need specifically requires movement, cognitive load and real-time environmental response simultaneously. That question pointed to developing a training program for first responders.",
  },
  {
    n: 3, icon: "🔬", title: "Going beyond the obvious",
    tags: ["User research", "Interviews", "Market research", "Value propositions"],
    body: "With direction framed, we went deep into understanding first responders and their current training landscape. Recurring gaps emerged that pointed toward cognitive agility for first responder preparedness. Those gaps shaped the value proposition.",
  },
  {
    n: 4, icon: "🖼", title: "Zooming in and visualising",
    tags: ["Service blueprint", "Experience simulation", "Narrative building"],
    body: "I led the design of the service blueprint and the gamification structure of the program, mapping the full experience across three training levels. We then built a narrative around it and pitched the full proposal to ASB GlassFloor.",
    last: true,
  },
];

const deliverables = [
  "Service Blueprint mapping the interactions between the different stakeholders and full training experience across three levels",
  "Storyboards and AI-generated visualisations of the experience",
  "5 real business projections and pilot program recommendations",
];

// ────────────────────────────────────────────────────────────

const Project2 = () => {
  const navigate = useNavigate();

  return (
    <div className="project-page">

      {/* ── HERO (dark) ────────────────────────────────────── */}
      <div style={fullWidthStyle(heroColor)}>
        <div className="container proj-hero">

          <motion.h1
            className="proj-title"
            style={{ color: textColor }}
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.035 } } }}
          >
            {"How can movement-based learning open new contexts for responsive technology?"
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={i}
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
          </motion.h1>

          <StaggerParent className="proj-meta" stagger={0.1}>
            {[
              { label: "Stakeholder", value: "ASB GlassFloor, Germany", underline: true },
              { label: "My role",     value: "Research, innovation & business design" },
              { label: "Duration",    value: "3-week sprint" },
              { label: "Year",        value: "2025" },
            ].map(({ label, value, underline }) => (
              <StaggerChild key={label}>
                {/* Override label + value colours for dark hero */}
                <span className="proj-meta-label" style={{ color: LABEL_COLOR }}>{label}</span>
                <p
                  className="proj-meta-value"
                  style={{ color: "rgba(255,255,255,0.9)", textDecoration: underline ? "underline" : "none" }}
                >
                  {value}
                </p>
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
          <img src={pp3} alt="ASB GlassFloor movement-based learning" className="proj-hero-img" />
        </motion.div>
      </div>

      {/* ── CONTEXT ─────────────────────────────────────────── */}
      <div style={fullWidthStyle("#ffffff")}>
        <div className="container proj-context proj-section-pad">

          <FadeUp><span className="proj-tag">• CONTEXT</span></FadeUp>

          <FadeUp delay={0.05}>
            <p className="proj-body">
              ASB GlassFloor is a German company that makes responsive LED-embedded glass
              flooring, originally designed for sports courts. This project was part of a
              strategic innovation sprint to explore how the technology could be applied
              beyond sport — identifying new industries, human needs and service opportunities
              that could justify expanding the product's market.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="proj-card proj-card-navy">
              <p className="proj-card-eyebrow">INITIAL BRIEF</p>
              <p className="proj-card-body" style={{ textDecoration: "underline" }}>
                How can ASB GlassFloor technology extend beyond the sports industry and
                what emerging needs can the technology address?
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            {/* Yellow summary card matching screenshot */}
            <div className="proj-card proj-card-tint" style={{ backgroundColor: "#FFF0B3" }}>
              <p className="proj-card-eyebrow proj-card-eyebrow-accent" style={{ color: ACCENT }}>
                SUMMARY
              </p>
              <p className="proj-card-body proj-card-body-lg">
                A movement-based cognitive agility training concept — PULSE — pitched to ASB
                GlassFloor, showing how the responsive floor could create high-pressure training
                simulations for first responders across three progressive difficulty levels.
              </p>
            </div>
          </FadeUp>

        </div>
      </div>

      {/* ── BRIEF DETAILS ───────────────────────────────────── */}
      <div style={fullWidthStyle(bgLight)}>
        <div className="container proj-brief proj-section-pad-brief">

          <FadeUp><h2 className="proj-section-heading">Brief details</h2></FadeUp>
          <FadeUp delay={0.05}><span className="proj-tag">• FRAMING THE CHALLENGE</span></FadeUp>
          <FadeUp delay={0.08}><hr className="proj-divider" /></FadeUp>

          <div className="proj-reframe">
            <FadeLeft>
              <p className="proj-reframe-eyebrow">INITIAL BRIEF</p>
              <p className="proj-reframe-text">
                How can ASB GlassFloor technology extend beyond the sports industry and
                what emerging needs can the technology address?
              </p>
            </FadeLeft>
            <FadeUp delay={0.2}>
              <div className="proj-reframe-arrow">→</div>
            </FadeUp>
            <FadeRight>
              <p className="proj-reframe-eyebrow proj-reframe-eyebrow-accent">REFRAMED TO</p>
              <p className="proj-reframe-text proj-reframe-text-bold">
                How might we leverage the responsive floor technology to create a cognitive
                agility training experience to build decision-making skills of first
                responders in high-pressure scenarios?
              </p>
            </FadeRight>
          </div>

          <FadeUp><hr className="proj-divider" /></FadeUp>
          <FadeUp delay={0.05}>
            <p className="proj-caption">
              The challenge was framed by connecting the research to understand what unique
              human needs can this technology address.
            </p>
          </FadeUp>

          {/* APPROACH */}
          <FadeUp delay={0.05}>
            <span className="proj-tag proj-tag-mt">• APPROACH</span>
          </FadeUp>

          <div className="proj-stepper">
            {steps.map((step, i) => (
              <StepItem key={step.n} {...step} index={i} />
            ))}
          </div>

          {/* OUTCOME */}
          <FadeUp><span className="proj-tag proj-tag-mt">• OUTCOME</span></FadeUp>

          <div className="proj-outcome-grid" style={{ marginTop: "28px" }}>

            {/* Left — yellow outcome card */}
            <FadeLeft delay={0.05}>
              <div
                className="proj-card proj-card-tint"
                style={{ backgroundColor: "#FFE566", height: "100%" }}
              >
                <p className="proj-card-eyebrow proj-card-eyebrow-accent" style={{ color: "#7a5c00" }}>
                  WHAT WE DELIVERED
                </p>
                <p style={{ fontSize: "18px", fontWeight: 700, lineHeight: 1.4, margin: "0 0 14px", color: "#1a2a4a" }}>
                  PULSE: A service concept pitched to ASB GlassFloor
                </p>
                <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#1a2a4a", margin: 0 }}>
                  A movement-based cognitive agility training program for first responders
                  where the ASB GlassFloor is the primary interface to simulate unpredictable
                  high-pressure scenarios and real-time biometrical analysis assesses stress
                  response, decision making efficiency and adaptability in real time and post
                  simulation.
                </p>
              </div>
            </FadeLeft>

            {/* Right — deliverables */}
            <div className="proj-outcome-right">
              <FadeUp delay={0.1}>
                <p className="proj-outcome-right-label">The details we created:</p>
              </FadeUp>
              {deliverables.map((d, i) => (
                <FadeUp key={d} delay={0.15 + i * 0.08}>
                  <div className="proj-deliverable">{d}</div>
                </FadeUp>
              ))}
            </div>

          </div>

          <FadeUp delay={0.1}>
            <p className="proj-pdf-note">
              *A more detailed walkthrough of the process and outcomes is available in my PDF
              portfolio. Feel free to reach out to know more.
            </p>
          </FadeUp>

        </div>
      </div>

      {/* ── PREV / NEXT ─────────────────────────────────────── */}
      <div style={fullWidthStyle(heroColor)}>
        <div className="proj-nav-footer">
          <motion.button
            className="proj-nav-btn"
            style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
            onClick={() => navigate("/project/1")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            ‹ Previous project
          </motion.button>
          <motion.button
            className="proj-nav-btn"
            style={{ background: "white", color: "#1a2a4a" }}
            onClick={() => { window.scrollTo(0, 0); navigate("/project/3"); }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Next project ›
          </motion.button>
        </div>
      </div>

    </div>
  );
};

export default Project2;
