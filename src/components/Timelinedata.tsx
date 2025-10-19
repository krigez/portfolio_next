// src/data/timelineData.ts

export interface TimelineEntry {
  id: string;
  title: string;
  organization: string;
  location?: string;
  start: string; // e.g. "2022-08"
  end: string; // e.g. "Present" or "2023-09"
  summary: string;
  bullets: string[];
  tech: string[];
  links?: { label: string; href: string }[];
}

export const timelineData: TimelineEntry[] = [
  {
    id: "1",
    title: "Senior Associate",
    organization: "Cognizant Technology Solutions.",
    location: "Hyderabad",
    start: "Dec-2020",
    end: "Present",
    summary:
      "Lead frontend development for the customer web app, focusing on performance & accessibility.",
    bullets: [
      "Refactored core UI into a component library used across 3 products.",
      "Reduced bundle size by 28% by adopting code-splitting & tree-shaking.",
      "Improved Lighthouse accessibility score from 74 → 95.",
    ],
    tech: ["React", "TypeScript", "Vite", "Cypress"],
    links: [
      { label: "Case study", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    id: "2",
    title: "Frontend Engineer",
    organization: "Startup Labs",
    location: "Bangalore",
    start: "2020-05",
    end: "2022-07",
    summary:
      "Built and shipped the marketing & dashboard apps; collaborated with design & backend teams.",
    bullets: [
      "Implemented analytics dashboards used by 1200+ customers.",
      "Automated CI pipeline to reduce deploy time by 40%.",
    ],
    tech: ["Vue.js", "Node.js", "Postgres"],
    links: [{ label: "Live app", href: "#" }],
  },
  {
    id: "3",
    title: "B.Tech in Computer Science",
    organization: "Some University",
    start: "2016-08",
    end: "2020-05",
    summary:
      "Focus on software engineering, data structures, and distributed systems.",
    bullets: [
      "Graduated with First Class; final year project on distributed queues.",
      "Organized college developer community & hackathons.",
    ],
    tech: ["C++", "Algorithms"],
  },
];
