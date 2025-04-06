'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  { year: "2017", text: "Started with React.js" },
  { year: "2019", text: "Worked on large-scale Redux app" },
  { year: "2021", text: "Led architecture revamp using TypeScript" },
  { year: "2023", text: "Mentored devs & contributed to testing strategy" },
  { year: "2025", text: "Aiming Technical Architect at FAANG" },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-20 px-4 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Journey</h2>
      
      <div className="relative max-w-3xl mx-auto before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-gray-300 dark:before:bg-gray-700 before:-translate-x-1/2">
        {timelineData.map((item, idx) => (
          <TimelineItem key={idx} {...item} isLeft={idx % 2 === 0} />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({ year, text, isLeft }: { year: string; text: string; isLeft: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={`mb-12 w-full flex ${isLeft ? 'justify-start' : 'justify-end'} relative`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-[calc(50%-20px)] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-md"
      >
        <h4 className="font-bold text-lg text-gray-800 dark:text-white">{year}</h4>
        <p className="text-gray-600 dark:text-gray-300">{text}</p>
      </motion.div>

      {/* Dot on center line */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10" />
    </div>
  );
}
