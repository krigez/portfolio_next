"use client";
// import Link from "next/link";

interface FooterProps {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  author?: string;
}

export default function Footer({
  email = "chaitanya.arige@gmail.com",
  phone,
  linkedin = "https://www.linkedin.com/in/chaitanyaarige",
  github = "https://github.com/krigez",
  author = "Chaitanya Arige",
}: FooterProps) {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 text-sm text-gray-700 dark:text-gray-300">
          <a href={`mailto:${email}`} className="hover:underline">
            {email}
          </a>
          {phone && (
            <a href={`tel:${phone}`} className="mt-1 sm:mt-0 hover:underline">
              {phone}
            </a>
          )}
        </div>

        <div className="flex items-center space-x-3">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-blue-500"
          >
            {/* LinkedIn SVG */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.797-1.75-1.782 0-.984.784-1.782 1.75-1.782s1.75.799 1.75 1.782c0 .985-.784 1.782-1.75 1.782zm13.25 12.268h-3v-5.604c0-1.337-.026-3.061-1.866-3.061-1.867 0-2.153 1.459-2.153 2.968v5.697h-3v-11h2.881v1.503h.041c.401-.76 1.379-1.561 2.839-1.561 3.037 0 3.6 2 3.6 4.594v6.464z" />
            </svg>
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 hover:text-gray-800 dark:hover:text-white"
          >
            {/* GitHub SVG */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.236 1.839 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.874.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.624-5.476 5.921.43.372.814 1.102.814 2.222 0 1.604-.015 2.896-.015 3.286 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {author}. Designed & built by me.
        </div>
      </div>
    </footer>
  );
}
