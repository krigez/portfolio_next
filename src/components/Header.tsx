"use client";

import { useEffect, useState, RefObject } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import profilePic from "@/components/header_name.png";
import FallingText from "@/components/FallingText";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

interface HeaderProps {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
}
const Header: React.FC<HeaderProps> = ({ scrollContainerRef }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = scrollContainerRef?.current || window;

    const onScroll = () => {
      const scrollTop =
        scrollContainerRef?.current?.scrollTop ?? window.scrollY;
      setScrolled(scrollTop > 30);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [scrollContainerRef]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between transition-colors duration-300 ${
        scrolled ? "bg-white text-black shadow-md" : "bg-black/30 text-white"
      } backdrop-blur-md`}
    >
      {/* Logo / Name */}
      {scrolled ? (
        <>
          <div className="text-lg font-bold">Krishna Chaitanya Arige</div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={profilePic}
              alt="Chaitanya Arige"
              width={280}
              height={80}
              priority
            />

            <FallingText
              techStack={[
                "JavaScript",
                "|",
                "React",
                "|",
                "Vue",
                "|",
                "Node.js",
              ]}
              className="text-sm mt-1 italic text-white-700 dark:text-gray-300 font-medium"
            />
          </div>
        </>
      )}

      {/* Menu Items + LinkedIn */}
      <div className="flex items-center gap-6 text-sm">
        {navItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="hover:underline transition-colors"
          >
            {label}
          </Link>
        ))}

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
          className="hover:scale-105 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className={`${
              scrolled ? "text-blue-600" : "text-white"
            } hover:text-blue-800 transition-colors duration-200`}
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
