"use client";

import Header from "@/components/Header";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import AboutSection from "@/components/AboutMe";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <Header />
      <main>
        <Hero />
        <Section id="about" eyebrow="About" title="Engineer, lead, lifelong learner">
          <AboutSection />
        </Section>
        <Section
          id="skills"
          eyebrow="Skills"
          title="Tools I use to ship"
          subtitle="Full-stack JavaScript and TypeScript, with Python and generative AI."
        >
          <SkillsSection />
        </Section>
        <Section
          id="experience"
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="From scientific computing to leading a team on enterprise software."
        >
          <ExperienceSection />
        </Section>
        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected work"
          subtitle="Production systems and client products I've built or led."
        >
          <ProjectsSection />
        </Section>
        <Section id="education" eyebrow="Credentials" title="Education & certifications">
          <EducationSection />
        </Section>
        <Section id="contact" eyebrow="Contact" title="Let's work together">
          <ContactSection />
        </Section>
      </main>
      <Footer />
    </>
  );
}
