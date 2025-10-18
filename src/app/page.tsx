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
      <main className="snap-mandatory ">
        <motion.section
          id="about"
          className="main snap-start h-screen flex items-center justify-center px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={leftFadeVariant}
        >
          <AboutSection />
        </motion.section>

        <motion.section
          id="skills"
          className="main snap-start h-screen  items-center justify-center px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <SkillsSection />
        </motion.section>

        <motion.section
          id="experience"
          className="main snap-start h-screen items-center justify-center px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={rightFadeVariant}
        >
          <ExperienceSection />
        </motion.section>

        <motion.section
          id="projects"
          className="main"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={sectionVariants}
        >
          <ProjectsSection />
        </motion.section>

        <motion.section
          id="education"
          className="main"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={leftFadeVariant}
        >
          <EducationSection />
        </motion.section>

        <motion.section
          id="contact"
          className="main"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={rightFadeVariant}
        >
          <ContactSection />
        </motion.section>
      </main>
    </>
  );
}
