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
      "Engineered the internal “Pega-OnCall” app with RESTful APIs, integrating backend services to support a dynamic, responsive frontend.",
      "Optimized core Pega product by resolving critical bugs and implementing key enhancements to improve performance and stability",
      "Developed an Admin Dashboard for leadership, featuring interactive data visualizations and real-time insights using modern charting libraries.",
    ],
    tech: ["React", "TypeScript", "Vite", "Cypress"],
    links: [
      // { label: "Case study", href: "#" },
      // { label: "GitHub", href: "#" },
    ],
  },
  {
    id: "2",
    title: "Software Developer",
    organization: "Jazeera Technologies",
    location: "Hyderabad",
    start: "July-2019",
    end: "Dec-2020",
    summary:
      "Built and shipped the marketing & dashboard apps; collaborated with design & backend teams.",
    bullets: [
      "Designed and developed responsive web applications using JavaScript, HTML, CSS, and modern frameworks like React, Vue.js, and Node.js",
      "Collaborated closely with architects and stakeholders to identify pain points and deliver scalable, high-impact technical solutions aligned with business goals",
    ],
    tech: ["Vue.js", "Node.js", "Postgres"],
    links: [{ label: "Live app", href: "https://jazeerapaints.com/" }],
  },
  {
    id: "3",
    title: "Full Stack Developer",
    organization: "Alakop Digital",
    location: "Hyderabad",
    start: "Nov-2018",
    end: "Feb-2019",
    summary:
      "Focus on software engineering, data structures, and distributed systems.",
    bullets: [
      "Developed responsive web applications using React.js, HTML, and CSS based on client wireframes and requirements",
      "Integrated AWS services and built GraphQL APIs backed by DynamoDB for scalable data operations",
      "Collaborated with clients to deliver tailored solutions aligned with business goals and user experience.",
    ],
    tech: ["Javascript", "React", "AWS"],
  },
  {
    id: "4",
    title: "Application Engineer",
    location: "Bangalore",
    organization: "Ark Infosolutions",
    start: "2016-08",
    end: "2020-05",
    summary:
      "Focus on software engineering, data structures, and distributed systems.",
    bullets: [
      "Developed and implemented numerical algorithms for fluid dynamics simulations using MATLAB/ANSYS and Python",
      "Collaborated with a team of engineers to optimize simulation performance and accuracy.",
      "Primarily responsible for writing code in Python/C for large clusters and using UDF’s for in-house applications on scientific software.",
      "Developed and implemented numerical algorithms for fluid dynamics simulations using Openfoam software.",
    ],
    tech: ["C++", "Python", "MATLAB", "HPC"],
  },
];
