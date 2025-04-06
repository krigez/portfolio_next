"use client";

import { useEffect, useRef } from "react";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import FadeInSection from "./FadeInSection";

const sections = [
  { id: "skills", component: <SkillsSection /> },
  { id: "experience", component: <ExperienceSection index={0} /> },
  { id: "projects", component: <ProjectsSection index={0} /> },
];

export default function Home({
  setActiveSection,
}: {
  setActiveSection: (id: string) => void;
}) {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      for (const { id } of sections) {
        const el = sectionRefs.current[id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <div className="w-full snap-y snap-mandatory">
      {sections.map(({ id, component }) => (
        <FadeInSection key={id}>
          <section
            id={id}
            ref={(el) => (sectionRefs.current[id] = el)}
            className="h-screen snap-start flex items-center justify-center"
          >
            {component}
          </section>
        </FadeInSection>
      ))}
    </div>
  );
}
