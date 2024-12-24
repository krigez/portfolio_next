"use client"; // This is a client component

import "./Header.css";
import Image from "next/image";
import profilePic from "@/components/header_name.png";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      {scrolled ? (
        <>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="logos"
          >
            YourLogo
          </motion.div>
          <header className={`${scrolled ? "header_scrolled scrolled" : ""}`}>
            <div className="container">
              <span className="logos">
                {/* <Image
                  className="header"
                  src={profilePic}
                  alt="Krishna Chaitanya Arige"
                  priority
                  width={300}
                  height={80}
                /> */}
                Chaitanya Arige
              </span>
              <nav className="nav">
                <Link href="/about">
                  <span>About</span>
                </Link>
                <Link href="/projects">
                  <span>Experience</span>
                </Link>
                <Link href="/projects">
                  <span>Education</span>
                </Link>
                <Link href="/projects">
                  <span>Projects</span>
                </Link>
                <Link href="/projects">
                  <span>Contact</span>
                </Link>
              </nav>
            </div>
          </header>
        </>
      ) : (
        <>
          <div className="hideonscroll grid grid-cols-3 gap-3">
            <div> &nbsp;</div>
            <div className="header">
              <Image
                className="header"
                src={profilePic}
                alt="Krishna Chaitanya Arige"
                width={300}
                height={80}
                priority
              />
            </div>
            <div className="place-content-center text-sm">
              <div className="float-right m-2">Linkedin</div>
              <div className="float-right m-2">Contact</div>
            </div>
          </div>

          <nav>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-center">
              <div className="place-content-center hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <div
                    className="rounded-md getunderline px-3 py-2 text-sm text-white"
                    aria-current="page"
                  >
                    About Me
                  </div>
                  <div className="rounded-md getunderline px-3 py-2 text-sm hover:bg-gray-700 hover:text-white">
                    Experience
                  </div>
                  <div className="rounded-md getunderline px-3 py-2 text-sm hover:bg-gray-700 hover:text-white">
                    Education
                  </div>
                  <div className="rounded-md getunderline px-3 py-2 text-sm hover:bg-gray-700 hover:text-white">
                    Projects
                  </div>
                  <div className="rounded-md getunderline px-3 py-2 text-sm hover:bg-gray-700 hover:text-white">
                    Contact
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
              </div>
            </div>

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <button
                    type="button"
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>

                    <svg
                      className={`size-6 ${mobileMenu ? "hidden" : "block"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>

                    <svg
                      className={`size-6 ${mobileMenu ? "block" : "hidden"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {mobileMenu ? (
              <>
                <div className="sm:hidden" id="mobile-menu">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base  text-white"
                      aria-current="page"
                    >
                      About Me
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base"
                    >
                      Education
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base"
                    >
                      Projects
                    </a>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </nav>
          <div className="menu_divider">&nbsp;</div>
        </>
      )}
    </div>
  );
}
