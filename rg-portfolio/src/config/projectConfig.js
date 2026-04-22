// ─────────────────────────────────────────────────────────
//  projectConfig.js
//  Single source of truth for every project's hero color.
//  Add a new entry here whenever you add a new project page.
// ─────────────────────────────────────────────────────────

const projectConfig = {
  // path segment must match your route: /project/:id
  "deutsche-telekom": {
    label: "Emotionally Aware AI",
    heroColor: "#E6D3B3",   // warm beige   (screenshot 3)
    textColor: "#1a2a4a",
  },
   "asb-glassfloor": {
    label: "ASB GlassFloor",
    heroColor: "#0D0F1C",   // near-black navy  (matches screenshot 1)
    textColor: "#ffffff",
    bgLight:   "#F4F4F6",   // light grey for brief details section
  },
   "srishti-k12": {
    label: "K-12 Social Design",
    heroColor: "#F0EEF5",   // very light lavender-grey  (matches screenshot 1)
    textColor: "#1a2a4a",
    bgLight:   "#EDE9F5",   // brief details section (slightly more purple)
  },

   "essity-lunara": {
    label: "Lunara — Essity Ventures",
    heroColor: "#C5C3E8",   // soft lavender (screenshot 1)
    textColor: "#1a2a4a",
    bgLight:   "#ECEAF6",   // lighter lavender for brief section (screenshot 3)
  },
  "project-cream": {
    label: "Project Cream",
    heroColor: "#ffffff",   // pale cream    (screenshot 6)
    textColor: "#1a2a4a",
     bgLight:   "#EEEFD0",
  },
};

export default projectConfig;
