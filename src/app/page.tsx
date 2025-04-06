"use client";

import { useRef } from "react";
import Header from "@/components/Header";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AboutMe from "@/components/AboutMe";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Header scrollContainerRef={scrollContainerRef} />
      <ScrollProgressBar />
      <main ref={scrollContainerRef}>
        <section id="about">
          <AboutMe />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="education">
          <EducationSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
