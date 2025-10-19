"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AboutSection from "@/components/AboutMe";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
// import VerticalNav from "@/components/VerticalNav"; // new nav

const sectionVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const leftFadeVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const rightFadeVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export default function Home() {
  return (
    <>
      <Header />
      <ScrollProgressBar />
      {/* <VerticalNav /> */}
      <main className="snap-mandatory">
        <motion.section
          id="about"
          className="snap-start min-h-screen w-full max-w-none flex items-center justify-center p-6 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={leftFadeVariant}
        >
          {/* Inner wrapper to constrain content width while keeping full-bleed background */}
          <div className="w-full max-w-6xl mx-auto px-6">
            <AboutSection />
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="snap-start min-h-screen w-full max-w-none flex items-center justify-center p-6 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <div className="w-full max-w-6xl mx-auto px-6">
            <SkillsSection />
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="snap-start min-h-screen w-full max-w-none flex items-center justify-center p-6 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={rightFadeVariant}
        >
          <div className="w-full max-w-6xl mx-auto px-6">
            <ExperienceSection />
          </div>
        </motion.section>

        <motion.section
          id="education"
          className="snap-start min-h-screen w-full max-w-none flex items-center justify-center  p-6 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={leftFadeVariant}
        >
          <div className="w-full max-w-6xl mx-auto px-6">
            <EducationSection />
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="snap-start min-h-screen w-full max-w-none flex items-center justify-center p-6 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <div className="w-full max-w-6xl mx-auto px-6">
            <ProjectsSection />
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="snap-start min-h-screen w-full max-w-none flex items-center justify-center p-6 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={rightFadeVariant}
        >
          <div className="w-full max-w-6xl mx-auto px-6">
            <ContactSection />
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
