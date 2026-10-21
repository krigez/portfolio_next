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
    title: "Technical Lead",
    organization: "Cognizant Technology Solutions (Client: Pegasystems)",
    location: "Hyderabad",
    start: "Dec 2020",
    end: "Present",
    summary:
      "Technical Lead since Aug 2022 (Associate, Dec 2020 – Jul 2022). Leading a development team on Pegasystems' enterprise software, from sprint planning to production support.",
    bullets: [
      "Led the development team through sprint planning, estimation, code reviews and mentoring, meeting sprint and release commitments.",
      "Resolved 300+ customer-reported defects and shipped 100+ user stories, using root-cause analysis and unit tests to prevent repeat issues.",
      "Migrated legacy React UI to React 19 on the new Pega Constellation APIs, making the product faster and easier to maintain.",
      "Fixed server-side security, REST API and AWS integration issues end to end with GitHub Copilot, shipping back-end and front-end changes together.",
      "Closed security vulnerabilities in UI and authentication flows, including XSS and data leaks, and delivered ADA / WCAG accessibility fixes.",
      "Built Pega OnCall, an internal incident-management app used by ~1,500 people across the organisation.",
    ],
    tech: ["React 19", "Node.js", "TypeScript", "REST APIs", "AWS", "GitHub Copilot"],
  },
  {
    id: "2",
    title: "Software Developer",
    organization: "Jazeera Technologies",
    location: "Hyderabad",
    start: "Jul 2019",
    end: "Dec 2020",
    summary:
      "Led end-to-end development of two e-commerce products and a logistics app.",
    bullets: [
      "Built Node.js APIs over MongoDB and PostgreSQL with React and Vue.js front ends (MERN / MEVN).",
      "Delivered a storefront and admin panel for jazeerapaints.com with live order tracking over WebSockets.",
      "Designed new features and product improvements with the product architect, turning business pain points into scalable solutions.",
    ],
    tech: ["React", "Vue.js", "Node.js", "MongoDB", "PostgreSQL", "WebSockets"],
    links: [{ label: "jazeerapaints.com", href: "https://jazeerapaints.com/" }],
  },
  {
    id: "3",
    title: "Full Stack Developer (Freelance)",
    organization: "Independent Clients",
    start: "Mar 2019",
    end: "Jun 2019",
    summary: "Delivered two client web applications end to end.",
    bullets: [
      "Built Node.js back ends and Vue.js / React front ends with reusable components and REST integrations.",
    ],
    tech: ["Node.js", "Vue.js", "React", "REST APIs"],
  },
  {
    id: "4",
    title: "Full Stack Developer (Freelance)",
    organization: "Alakop Digital",
    location: "Hyderabad",
    start: "Nov 2018",
    end: "Feb 2019",
    summary: "Built client web applications from wireframes to production.",
    bullets: [
      "Developed React.js and Node.js applications with GraphQL APIs on AWS DynamoDB.",
      "Delivered the JK Cheese e-commerce platform with sign-in, product management and payment-gateway checkout.",
    ],
    tech: ["React", "Node.js", "GraphQL", "AWS DynamoDB"],
  },
  {
    id: "5",
    title: "Web Development Intern",
    organization: "AppDataSoft",
    start: "Aug 2018",
    end: "Oct 2018",
    summary: "Started the move from engineering simulation into web development.",
    bullets: [
      "Created responsive web pages and UI components with HTML, CSS, JavaScript and Vue.js.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Vue.js"],
  },
  {
    id: "6",
    title: "Application Engineer (Simulation Software)",
    organization: "Ark Infosolutions",
    location: "Bangalore",
    start: "Apr 2016",
    end: "Jul 2018",
    summary:
      "Scientific computing for fluid-dynamics simulation, the foundation of my Python and performance work.",
    bullets: [
      "Wrote fluid-dynamics simulation algorithms in Python, C and MATLAB, including ANSYS Fluent UDFs and custom OpenFOAM solvers, for high-performance compute clusters.",
      "Tuned simulation performance and accuracy alongside a team of engineers.",
    ],
    tech: ["Python", "C", "MATLAB", "ANSYS Fluent", "OpenFOAM", "HPC"],
  },
];
