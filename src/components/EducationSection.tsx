"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "proj-1",
    title: "M. Tech",
    course: "Computational Fluid Dynamics",
    college: "University of Petroleum and Energy Studies, Dehradun",
    timeframe: "2013-2015",
    tech: "Python · Fluid Dynamics · Numerical Methods",
    description:
      "A personal portfolio showcasing projects, blog posts and a resume. Includes smooth scroll, responsive layout and dark mode.",
  },
  {
    id: "proj-2",
    title: "B. Tech",
    course: "Aeronautical Engineering",
    college: "JNTU, Hyderabad",
    timeframe: "2009- 2013",
    tech: "Aerodynamics · Mechanical Systems",
    description:
      "A lightweight realtime chat with rooms, typing indicators and presence. Focused on performance and low-latency UX.",
  },
  {
    id: "proj-3",
    title: "Intermediate",
    timeframe: "2006 - 2008",
    tech: "Maths · Physics · Chemistry",
    description:
      "Intermediate education completed at  Junior College,  with a focus on MPC subjects.",
  },
  {
    id: "proj-4",
    title: "High School",
    college: "Jyothi Vidyalaya School, BHEL",
    marks: "84.66%",
    timeframe: "2006",
    tech: "Schooling · Fundamentals",
    description:
      "High School education completed at Jyothi Vidyalaya School, BHEL.",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative text-black py-16 px-4 pb-24 bg-gray-50 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>

      <div className="max-w-4xl mx-auto">
        <ul className="border-l-2 border-gray-200 dark:border-gray-700">
          {projects.map((p, idx) => (
            <li key={p.id} className="mb-8 ml-6 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-sm"
              >
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-lg font-semibold">
                      {p.title}{" "}
                      <span className="text-base font-light">
                        {" "}
                        - {p.course}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{p.timeframe}</div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {p.description}
                </p>

                <div className="mt-3 text-xs text-gray-500">{p.tech}</div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EducationSection;
