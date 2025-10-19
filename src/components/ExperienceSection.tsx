"use client";

// import { motion } from "framer-motion";
import { Timeline } from "../components/Timeline";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative text-black py-16 px-4 pb-24 bg-gray-100 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <div className="wrap">
        {" "}
        <Timeline />
      </div>
    </section>
  );
};

export default ExperienceSection;
