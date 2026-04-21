import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import project4Img from "../assets/project4.png";
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

const PROJECT_ID = "essity-lunara";
const { heroColor, textColor, bgLight } = projectConfig[PROJECT_ID];

const ACCENT = "#AD0058";  // crimson — used for tags, step dots, labels

const steps = [
  {
    n: 1, icon: "🗺", title: "Navigating the landscape",
    tags: ["Blue sky research", "Weak signal scanning", "Market mapping"],
    body: "I began the sprint by scanning signals to understand emerging behaviours and cultural shifts, as well as the players shaping the femtech landscape, what ideas they are building and how people were responding to them. This helped me develop a dual lens in my research.",
  },
  {
    n: 2, icon: "🔍", title: "Finding the white space",
    tags: ["Competitive analysis", "Opportunity Mapping", "Ideation"],
    body: "By mapping and analysing how current solutions are positioned, opportunity spaces began to emerge. From there, I explored several concept directions and evaluated them based on market attractiveness and strategic fit with Essity's capabilities.",
  },
  {
    n: 3, icon: "🟩", title: "Framing the opportunity",
    tags: ["Persona development", "Value proposition"],
    body: "Analysing existing solutions revealed that menstrual care is largely reactive and centred on the menstruation phase, with little support for the other phases of the cycle. This opened up an opportunity to rethink the category beyond fragmented hygiene products toward more holistic, cycle-aware wellness.",
  },
  {
    n: 4, icon: "✦", title: "Conceptualising the venture",
    tags: ["Business model design"],
    body: "With a clear direction in place, I developed Lunara as a venture concept. This included designing the user experience, defining revenue streams and outlining a roadmap for how the idea could be brought to market.",
    last: true,
  },
];

const deliverables = [
  "User experience mapping across 2 touchpoints",
  "Business model design outlining 3 revenue streams",
  "Pitch deck communicating the concept for Essity",
];

// ────────────────────────────────────────────────────────────

const Project4 = () => {
  const navigate = useNavigate();

  return (
    <div className="project-page">

      {/* ── HERO ──────────────────────────────────────────── */}
      <div style={fullWidthStyle(heroColor)}>
        <div className="container proj-hero">

          <motion.h1
            className="proj-title"
            style={{ color: textColor }}
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
          >
            {"Rethinking menstrual wellness beyond period tracking"
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={i}
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1, y: 0,
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  {word}
                </motion.span>
              ))}
          </motion.h1>

          <StaggerParent className="proj-meta" stagger={0.1}>
            {[
              { label: "Stakeholder", value: "Personal project", underline: false },
              { label: "My role",     value: "Research & Service design" },
              { label: "Duration",    value: "2 days" },
              { label: "Year",        value: "2025" },
            ].map(({ label, value, underline }) => (
              <StaggerChild key={label}>
                <span className="proj-meta-label" style={{ color: ACCENT }}>{label}</span>
                <p className="proj-meta-value" style={underline ? { textDecoration: "underline" } : {}}>
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
          <img
            src={project4Img}
            alt="Lunara — menstrual wellness app screens"
            className="proj-hero-img"
          />
        </motion.div>
      </div>

      {/* ── CONTEXT ─────────────────────────────────────────── */}
      <div style={fullWidthStyle("#ffffff")}>
        <div className="container proj-context proj-section-pad">

          <FadeUp>
            <span className="proj-tag" style={{ borderColor: ACCENT, color: ACCENT }}>
              • CONTEXT
            </span>
          </FadeUp>

          <FadeUp delay={0.05}>
            <p className="proj-body">
              Essity Ventures, the innovation arm of global hygiene and health company Essity,
              explores new opportunities across women's health. Over a 2 day solo project,
              I explored the femtech landscape to identify service opportunities and present
              them as early venture concepts for Essity.
            </p>
          </FadeUp>

          {/* Initial brief — soft lavender card */}
          <FadeUp delay={0.1}>
            <div className="proj-card proj-card-tint" style={{ backgroundColor: "#D8D6EE" }}>
              <p className="proj-card-eyebrow">INITIAL BRIEF</p>
              <p className="proj-card-body">
                Identify potential revenue opportunities for Essity Ventures across key stages
                of women's health (pre-teens, menstruation, post-partum or menopause) that
                could be developed into an actionable venture within the next 2–3 years.
              </p>
            </div>
          </FadeUp>

          {/* Summary — salmon/rose card */}
          <FadeUp delay={0.15}>
            <div className="proj-card proj-card-tint" style={{ backgroundColor: "#F2AEAD" }}>
              <p
                className="proj-card-eyebrow proj-card-eyebrow-accent"
                style={{ color: ACCENT }}
              >
                SUMMARY
              </p>
              <p className="proj-card-body proj-card-body-lg">
                The research revealed a gap in menstrual care where most solutions focus on
                period tracking rather than supporting the body throughout the cycle. In
                response, I developed Lunara, a venture concept for a cycle-aware wellness
                ecosystem that offers personalised care packages, supportive rituals and
                guided cycle insights.
              </p>
            </div>
          </FadeUp>

        </div>
      </div>

      {/* ── BRIEF DETAILS ───────────────────────────────────── */}
      <div style={fullWidthStyle(bgLight)}>
        <div className="container proj-brief proj-section-pad-brief">

          <FadeUp><h2 className="proj-section-heading">Brief details</h2></FadeUp>

          <FadeUp delay={0.05}>
            <span className="proj-tag" style={{ borderColor: ACCENT, color: ACCENT }}>
              • FRAMING THE CHALLENGE
            </span>
          </FadeUp>

          <FadeUp delay={0.08}><hr className="proj-divider" /></FadeUp>

          {/* Reframe */}
          <div className="proj-reframe">
            <FadeLeft>
              <p className="proj-reframe-eyebrow">INITIAL BRIEF</p>
              <p className="proj-reframe-text">
                Identify potential revenue opportunities for Essity Ventures across key stages
                of women's health that could be developed into an actionable venture within
                the next 2–3 years.
              </p>
            </FadeLeft>

            <FadeUp delay={0.2}>
              <div className="proj-reframe-arrow">→</div>
            </FadeUp>

            <FadeRight>
              <p className="proj-reframe-eyebrow proj-reframe-eyebrow-accent">REFRAMED TO</p>
              <p className="proj-reframe-text proj-reframe-text-bold">
                How might we design a holistic, cycle-aware care ecosystem that supports
                women throughout their menstrual cycle?
              </p>
            </FadeRight>
          </div>

          <FadeUp><hr className="proj-divider" /></FadeUp>

          <FadeUp delay={0.05}>
            <p className="proj-caption">
              The challenge was framed through market research to identify white spaces in
              the femtech market
            </p>
          </FadeUp>

          {/* Approach */}
          <FadeUp delay={0.05}>
            <span
              className="proj-tag proj-tag-mt"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              • APPROACH
            </span>
          </FadeUp>

          <div className="proj-stepper">
            {steps.map((step, i) => (
              <StepItem key={step.n} {...step} index={i} />
            ))}
          </div>

          {/* Outcome */}
          <FadeUp>
            <span
              className="proj-tag proj-tag-mt"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              • OUTCOME
            </span>
          </FadeUp>

          <div className="proj-outcome-grid" style={{ marginTop: "28px" }}>

            {/* Left — salmon outcome card */}
            <FadeLeft delay={0.05}>
              <div
                className="proj-card proj-card-tint"
                style={{ backgroundColor: "#F2AEAD", height: "100%" }}
              >
                <p className="proj-card-eyebrow" style={{ color: ACCENT, opacity: 1 }}>
                  WHAT WE DELIVERED
                </p>
                <p style={{
                  fontSize: "18px", fontWeight: 700, lineHeight: 1.4,
                  margin: "0 0 14px", color: "#1a2a4a",
                }}>
                  Lunara, a venture concept for Essity Ventures
                </p>
                <p style={{
                  fontSize: "13px", lineHeight: 1.7,
                  color: "#1a2a4a", margin: 0,
                }}>
                  A cycle-aware wellness ecosystem that blends commerce with personalised
                  care. Lunara helps people curate and order care packages, build supportive
                  rituals and track their cycle with guided support throughout all the phases.
                </p>
              </div>
            </FadeLeft>

            {/* Right — deliverables */}
            <div className="proj-outcome-right">
              <FadeUp delay={0.1}>
                <p className="proj-outcome-right-label">The details I created:</p>
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
              *To view the detailed process and all final outcomes, please contact me for
              the PDF portfolio.
            </p>
          </FadeUp>

        </div>
      </div>

      {/* ── PREV / NEXT ─────────────────────────────────────── */}
      <div style={fullWidthStyle(heroColor)}>
        <div className="proj-nav-footer">
          <motion.button
            className="proj-nav-btn"
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            ‹ Previous project
          </motion.button>
          <motion.button
            className="proj-nav-btn"
            onClick={() => navigate(1)}
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

export default Project4;
