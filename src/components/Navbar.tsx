"use client";
import Link from "next/link";

const sections = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export default function Navbar({ activeSection }: { activeSection: string }) {
  return (
    <nav className="fixed top-1/2 -translate-y-1/2 left-6 flex flex-col space-y-6 z-50">
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          scroll={false}
          className={`text-lg font-medium transition-all duration-300 ${
            activeSection === section.id
              ? "text-blue-600 scale-110 font-bold"
              : "text-gray-500 hover:text-blue-400"
          }`}
        >
          {section.label}
        </Link>
      ))}
    </nav>
  );
}
