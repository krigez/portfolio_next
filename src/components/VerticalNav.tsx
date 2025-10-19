"use client";

import { useEffect, useState } from "react";

const sections = [
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "contact",
];

const VerticalNav = () => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-1/4 left-4 flex flex-col gap-4 z-50">
      {sections.map((id) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`text-sm text-left px-2 py-1 rounded transition-all duration-200 ${
            activeId === id
              ? "bg-blue-500 text-white font-semibold"
              : "text-gray-500 hover:text-blue-500"
          }`}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </button>
      ))}
    </nav>
  );
};

export default VerticalNav;
