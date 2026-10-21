"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import FallingText from "./FallingText";
import nameLogo from "./header_name_logo.png";

const techStack = ["JavaScript", "|", "React", "|", "Vue", "|", "Node.js"];

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Credentials", id: "education" },
  { label: "Contact", id: "contact" },
];

const LinkedInIcon = ({ className = "" }: { className?: string }) => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" className={className}>
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
  </svg>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["home", ...navItems.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    if (menuOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-[#1b1c21]/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <AnimatePresence mode="wait" initial={false}>
          {scrolled ? (
            <motion.a
              key="text"
              href="#home"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="text-base font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Krishna <span className="gradient-text">Arige</span>
            </motion.a>
          ) : (
            <motion.a
              key="logo"
              href="#home"
              aria-label="Chaitanya Arige – home"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-start"
            >
              <Image
                src={nameLogo}
                alt="Chaitanya Arige"
                priority
                className="h-auto w-[170px] invert dark:invert-0 md:w-[210px]"
              />
              <FallingText
                techStack={techStack}
                className="mt-1 text-xs font-medium italic text-slate-600 dark:text-slate-300 md:text-sm"
              />
            </motion.a>
          )}
        </AnimatePresence>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                active === id ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {active === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-slate-900/[0.07] dark:bg-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/chaitanyaarige"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="ml-2 rounded-full p-2 text-slate-600 dark:text-slate-300 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            <LinkedInIcon />
          </a>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
        <button
          className="rounded-md p-2 text-slate-900 dark:text-white md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((s) => !s)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path
              strokeWidth="2"
              strokeLinecap="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
            />
          </svg>
        </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass mx-4 mb-4 flex flex-col p-2 md:hidden"
          >
            {navItems.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm ${
                  active === id ? "bg-slate-900/[0.07] dark:bg-white/10 text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/chaitanyaarige"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm text-slate-600 dark:text-slate-300"
            >
              <LinkedInIcon className="text-blue-600 dark:text-blue-400" /> LinkedIn
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
