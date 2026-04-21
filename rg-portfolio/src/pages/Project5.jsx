import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import project5Img from "../assets/project4.png";
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

const PROJECT_ID = "project-cream";
const { heroColor, textColor, bgLight } = projectConfig[PROJECT_ID];

const ACCENT = "#AD0058";  // crimson — used for tags, step dots, labels

const steps = [
  {
    n: 1, icon: "🔍", title: "Mapping the current state",
    tags: ["Desk research", "Field visit", "As-is journey mapping"],
    body: "We began by looking at the broader food donation landscape in Italy understanding policies, donation rates and the market context shaping it. This helped us understand the system at a high level. From there, we zoomed in through conversations with Banco Alimentare, mapping their donor relationships to understand who was involved, how communication flowed and where gaps appeared.",
  },
  {
    n: 2, icon: "🕳️", title: "Finding gaps",
    tags: ["Gap analysis", "Opportunity Mapping", "Ideation"],
    body: "We then turned inward to examine the friction points in Banco Alimentare’s current model. As we mapped these gaps, a few early directions began to take shape. But they felt premature, so we paused and shifted to a futures thinking approach to bring a more systemic perspective to the work.",
  },
  {
    n: 3, icon: "🔭", title: "Thinking in futures",
    tags: ["Future cones", "Backcasting","Ideation"],
    body: "To avoid designing for today’s problems and suggesting quick fixes, we used futures thinking to ask a bigger question: what role should Banco Alimentare play in a future where food donation is the norm rather than an afterthought? Working backwards from that future helped us identify what needs to change now and grounded our ideation in systemic intent.",
  },
  {
    n: 4, icon: "📇", title: "Shaping the service system",
    tags: ["Journey Mapping","Visualisation","Value mapping","Business model design"],
    body: "With a strategic direction in place, we began designing the service system defining the key touchpoints and thinking through the business logic that would make it viable for Banco Alimentare to implement.",
    last: true,
  },
];

const deliverables = [
  "Mockups of the key touchpoints",
  "A business model outlining the system",
];

// ────────────────────────────────────────────────────────────

const Project5 = () => {
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
            {"How might we reimagine surplus food donation as a network of mutual benefit?"
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
              { label: "Stakeholder", value: "Banco Alimentare, Milano", underline: true },
              { label: "My role",     value: "Futures thinking, strategy" },
              { label: "Duration",    value: "2 weeks" },
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
            src={project5Img}
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

export default Project5;
