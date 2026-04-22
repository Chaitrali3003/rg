import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import project5Img from "../assets/project5.png";
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

const ACCENT = "#D4691E";  // orange — Banco Alimentare brand

const steps = [
  {
    n: 1, icon: "🔍", title: "Mapping the current state",
    tags: ["Desk research", "Field visit", "As-is journey mapping"],
    body: "We began by looking at the broader food donation landscape in Italy understanding policies, donation rates and the market context shaping it. This helped us understand the system at a high level. From there, we zoomed in through conversations with Banco Alimentare, mapping their donor relationships to understand who was involved, how communication flowed and where gaps appeared.",
  },
  {
    n: 2, icon: "🕳️", title: "Finding gaps",
    tags: ["Gap analysis", "Opportunity Mapping", "Ideation"],
    body: "We then turned inward to examine the friction points in Banco Alimentare's current model. As we mapped these gaps, a few early directions began to take shape. But they felt premature, so we paused and shifted to a futures thinking approach to bring a more systemic perspective to the work.",
  },
  {
    n: 3, icon: "🔭", title: "Thinking in futures",
    tags: ["Future cones", "Backcasting", "Ideation"],
    body: "To avoid designing for today's problems and suggesting quick fixes, we used futures thinking to ask a bigger question: what role should Banco Alimentare play in a future where food donation is the norm rather than an afterthought? Working backwards from that future helped us identify what needs to change now and grounded our ideation in systemic intent.",
  },
  {
    n: 4, icon: "📇", title: "Shaping the service system",
    tags: ["Journey Mapping", "Visualisation", "Value mapping", "Business model design"],
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
            alt="Beyond the Table — Banco Alimentare service concept"
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
              Banco Alimentare is an Italian non-profit organisation committed to reducing food
              waste and fighting hunger by recovering surplus food from the agro-food supply
              chain and redistributing it to charities supporting individuals and families in need.
            </p>
          </FadeUp>

          {/* Initial brief */}
          <FadeUp delay={0.1}>
            <div className="proj-card proj-card-tint" style={{ backgroundColor: "#F5DEC8" }}>
              <p className="proj-card-eyebrow">INITIAL BRIEF</p>
              <p className="proj-card-body">
                Identify new ways to retain existing donors and build loyalty so they continue
                to donate surplus, and design strategies to reach new agri-food companies to
                donate their surplus to Banco Alimentare.
              </p>
            </div>
          </FadeUp>

          {/* Summary */}
          <FadeUp delay={0.15}>
            <div className="proj-card proj-card-tint" style={{ backgroundColor: "#E8D9C8" }}>
              <p
                className="proj-card-eyebrow proj-card-eyebrow-accent"
                style={{ color: ACCENT }}
              >
                SUMMARY
              </p>
              <p className="proj-card-body proj-card-body-lg">
                Working closely with the stakeholder, we developed Beyond the Table, a service
                system that positions Banco Alimentare as a strategic partner for its donors.
                It supports the organisation in retaining existing partners and attracting new
                ones through co-created storytelling (podcasts), structured onboarding and a
                recognition framework.
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
                Identify new ways to retain existing donors and build loyalty so they continue
                to donate surplus, and design strategies to reach new agri-food companies to
                donate their surplus to Banco Alimentare.
              </p>
            </FadeLeft>

            <FadeUp delay={0.2}>
              <div className="proj-reframe-arrow">→</div>
            </FadeUp>

            <FadeRight>
              <p className="proj-reframe-eyebrow proj-reframe-eyebrow-accent">REFRAMED TO</p>
              <p className="proj-reframe-text proj-reframe-text-bold">
                How might we build sustainable relationships with donor's while positioning
                Banco Alimentare as a valuable & strategic partner?
              </p>
            </FadeRight>
          </div>

          <FadeUp><hr className="proj-divider" /></FadeUp>

          <FadeUp delay={0.05}>
            <p className="proj-caption">
              The challenge was framed by connecting the gaps in the as-is journey with a
              long term vision for the organisation
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

            {/* Left — outcome card */}
            <FadeLeft delay={0.05}>
              <div
                className="proj-card proj-card-tint"
                style={{ backgroundColor: "#F5DEC8", height: "100%" }}
              >
                <p className="proj-card-eyebrow" style={{ color: ACCENT, opacity: 1 }}>
                  WHAT WE DELIVERED
                </p>
                <p style={{
                  fontSize: "18px", fontWeight: 700, lineHeight: 1.4,
                  margin: "0 0 14px", color: "#1a2a4a",
                }}>
                  Beyond the table, a service system concept
                </p>
                <p style={{
                  fontSize: "13px", lineHeight: 1.7,
                  color: "#1a2a4a", margin: 0,
                }}>
                  A service concept that repositions Banco Alimentare as a strategic partner
                  for food donor companies, rather than just a recipient of donations. The
                  system introduces a five-stage partnership journey from awareness and
                  onboarding to co-created storytelling, recognition and renewal supported by
                  a business model that outlines the roles and incentives for key stakeholders.
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
            onClick={() => { window.scrollTo(0, 0); navigate("/project/4"); }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            ‹ Previous project
          </motion.button>
          <motion.button
            className="proj-nav-btn"
            disabled={true}
            style={{ opacity: 0.4, cursor: "not-allowed" }}
          >
            Next project ›
          </motion.button>
        </div>
      </div>

    </div>
  );
};

export default Project5;