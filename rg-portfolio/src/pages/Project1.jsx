import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pp1 from "../assets/pp1.png";
import projectConfig from "../config/projectConfig";
// import "../styles/project.css";
import "../../src/App.css";

const PROJECT_ID = "deutsche-telekom";
const { heroColor, textColor } = projectConfig[PROJECT_ID];

// ── Shared animation helpers ─────────────────────────────────
// (copy these into every project page, or extract to a shared file)

export const fullWidthStyle = (bgColor) => ({
  width: "100vw",
  position: "relative",
  left: "50%",
  right: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  backgroundColor: bgColor,
});

export const FadeUp = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
};

export const FadeLeft = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
};

export const FadeRight = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
};

export const StaggerParent = ({ children, className = "", stagger = 0.12 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
    >{children}</motion.div>
  );
};

export const StaggerChild = ({ children, className = "" }) => (
  <motion.div className={className}
    variants={{
      hidden: { opacity: 0, y: 28 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    }}
  >{children}</motion.div>
);

export const StepItem = ({ n, icon, title, tags, body, last, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={`proj-step${last ? " proj-step-last" : ""}`}
      initial={{ opacity: 0, x: -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="proj-step-left">
        <motion.div className="proj-step-dot"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
        >{n}</motion.div>
        {!last && <div className="proj-step-line" />}
      </div>
      <div className="proj-step-content">
        <h4 className="proj-step-title">{icon} {title}</h4>
        <div className="proj-tags-row">
          {tags.map((t, i) => (
            <motion.span key={t} className="proj-method-tag"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + i * 0.06 }}
            >{t}</motion.span>
          ))}
        </div>
        <p className="proj-step-body">{body}</p>
      </div>
    </motion.div>
  );
};

// ── Page content ─────────────────────────────────────────────

const steps = [
  {
    n: 1, icon: "👀", title: "Looking outside",
    tags: ["Trend research", "Digital Diaries", "Exploratory Interviews"],
    body: "Before narrowing the focus, the team scanned broadly across cultural signals across films, reports, and over 15 interviews with participants aged 18–82 across five nationalities. We looked for human experiences around urban movement that current technologies underserved. This synthesis revealed five thematic clusters.",
  },
  {
    n: 2, icon: "🎯", title: "Finding a lens",
    tags: ["Opportunity Mapping", "Insight framing"],
    body: "From these clusters, safety emerged as a recurring concern. However, it surfaced in different forms: sometimes situational, sometimes emotional. This nuance positioned safety as a deeply personal and contextual experience.",
  },
  {
    n: 3, icon: "🗺️", title: "Visualising the journey",
    tags: ["Psychographic archetypes", "Journey mapping"],
    body: "We defined three profiles based on psychographic differences and mapped three journeys across distinct geographic contexts. This allowed us to explore how perceptions of safety shift across environments and individuals. I led the journey mapping for one of the three profiles.",
  },
  {
    n: 4, icon: "🚗", title: "Make it build ready!",
    tags: ["Feature maping", "Roadmapping"],
    body: "I mapped features across all archetypes to identify what needed to remain universal versus personalised. This laid the foundation for the roles Magenta AI would play and helped us articulate the requirements such as team capabilities, scope, and timelines to the client.",
    last: true,
  },
];

const Project1 = () => {
  const navigate = useNavigate();

  return (
    <div className="project-page">

      {/* HERO */}
      <div style={fullWidthStyle(heroColor)}>
        <div className="container proj-hero">
          <motion.h1 className="proj-title" style={{ color: textColor }}
            initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
          >
            {"How might emotionally aware AI support urban navigation"
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
              { label: "Stakeholder",  value: "Deutsch Telekom, Germany", underline: true },
              { label: "My role",      value: "Research, strategy and scenario development" },
              { label: "Duration",     value: "3 weeks" },
              { label: "Year",         value: "2025" },
            ].map(({ label, value, underline }) => (
              <StaggerChild key={label}>
                <span className="proj-meta-label">{label}</span>
                <p className="proj-meta-value" style={underline ? { textDecoration: "underline" } : {}}>{value}</p>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div style={fullWidthStyle("transparent")}>
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: "hidden" }}
        >
          <img src={pp1} alt="Emotionally aware AI" className="proj-hero-img" />
        </motion.div>
      </div>

      {/* CONTEXT */}
      <div style={fullWidthStyle("#ffffff")}>
        <div className="container proj-context proj-section-pad">
          <FadeUp><span className="proj-tag">• CONTEXT</span></FadeUp>
          <FadeUp delay={0.05}>
            <p className="proj-body">
              Deutsch Telekom, a leading German telecommunications company, developed Magenta AI,
              an AI-assisted smartphone concept. They posed an open brief: to explore how this
              technology could create new roles in people's everyday lives beyond the app-centric
              logic of current smartphones.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="proj-card proj-card-navy">
              <p className="proj-card-eyebrow">INITIAL BRIEF</p>
              <p className="proj-card-body" style={{ textDecoration: "underline" }}>
                How can an AI-based phone with no apps redefine user experience and deliver new
                forms of value and purpose in people's everyday lives?
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="proj-card proj-card-tint" style={{ backgroundColor: "#F9C8D4" }}>
              <p className="proj-card-eyebrow proj-card-eyebrow-accent" style={{ color: "#AD0058" }}>SUMMARY</p>
              <p className="proj-card-body proj-card-body-lg">
                A speculative research exploration that reframed navigation as an emotional
                experience over a logistical one. The results were 3 visualised scenarios across
                3 cities showing Magenta AI, an emotionally aware urban companion in action, and
                a roadmap to build it.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* BRIEF DETAILS */}
      <div style={fullWidthStyle("#F5EDD8")}>
        <div className="container proj-brief proj-section-pad-brief">
          <FadeUp><h2 className="proj-section-heading">Brief details</h2></FadeUp>
          <FadeUp delay={0.05}><span className="proj-tag">• FRAMING THE CHALLENGE</span></FadeUp>
          <FadeUp delay={0.08}><hr className="proj-divider" /></FadeUp>

          <div className="proj-reframe">
            <FadeLeft>
              <p className="proj-reframe-eyebrow">INITIAL BRIEF</p>
              <p className="proj-reframe-text">
                How can an AI-based phone with no apps redefine user experience and deliver
                new forms of value and purpose in people's everyday lives?
              </p>
            </FadeLeft>
            <FadeUp delay={0.2}><div className="proj-reframe-arrow">→</div></FadeUp>
            <FadeRight>
              <p className="proj-reframe-eyebrow proj-reframe-eyebrow-accent">REFRAMED TO</p>
              <p className="proj-reframe-text proj-reframe-text-bold">
                How might Magenta AI assist people in feeling safer while navigating within
                urban cities in Europe?
              </p>
            </FadeRight>
          </div>

          <FadeUp><hr className="proj-divider" /></FadeUp>
          <FadeUp delay={0.05}>
            <p className="proj-caption">
              The challenge was reframed by connecting research insights with exploring where
              AI could meaningfully support human experience
            </p>
          </FadeUp>

          <FadeUp delay={0.05}><span className="proj-tag proj-tag-mt">• APPROACH</span></FadeUp>
          <div className="proj-stepper">
            {steps.map((step, i) => <StepItem key={step.n} {...step} index={i} />)}
          </div>

          <FadeUp><span className="proj-tag proj-tag-mt">• OUTCOME</span></FadeUp>
          <div className="proj-outcome-grid">
            <FadeLeft delay={0.05}>
              <div className="proj-card proj-card-navy">
                <p className="proj-card-eyebrow">WHAT WE DELIVERED</p>
                <p className="proj-outcome-headline">
                  3 scenarios highlighting emotional aware safety companion for urban mobility
                </p>
                <p className="proj-outcome-desc">
                  The concept reframes mobility from fragmented, transactional interactions to a
                  context-aware system that recognises emotional cues, situational risk, and
                  personal comfort.
                </p>
              </div>
            </FadeLeft>
            <div className="proj-outcome-right">
              <FadeUp delay={0.1}><p className="proj-outcome-right-label">The details we created:</p></FadeUp>
              {["User journeys for 3 psychographic archetypes", "Feature architecture mapping", "A three-phase development roadmap for Deutsch Telekom"]
                .map((d, i) => (
                  <FadeUp key={d} delay={0.15 + i * 0.08}><div className="proj-deliverable">{d}</div></FadeUp>
                ))}
            </div>
          </div>

          <FadeUp delay={0.1}>
            <p className="proj-pdf-note">
              *To view the detailed process and all final outcomes, please contact me for the PDF portfolio.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* PREV / NEXT */}
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

export default Project1;
