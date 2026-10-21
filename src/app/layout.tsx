import type { Metadata } from "next";
import "./globals.css";
// import Header from "@/components/Header";
import { Montserrat } from "next/font/google";

const description =
  "Krishna Chaitanya Arige – Senior Software Engineer and Technical Lead with 9.5+ years building full-stack web apps with React, Node.js, TypeScript and Python, and AI-assisted development.";

export const metadata: Metadata = {
  metadataBase: new URL("https://chaiarige.in"),
  title: "Krishna Chaitanya Arige | Senior Software Engineer & Technical Lead",
  description,
  keywords: [
    "Krishna Chaitanya Arige",
    "Senior Software Engineer",
    "Technical Lead",
    "Full Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "Generative AI",
    "Hyderabad",
  ],
  authors: [{ name: "Krishna Chaitanya Arige", url: "https://chaiarige.in" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://chaiarige.in",
    title: "Krishna Chaitanya Arige | Senior Software Engineer & Technical Lead",
    description,
    siteName: "Krishna Chaitanya Arige",
  },
  twitter: {
    card: "summary",
    title: "Krishna Chaitanya Arige | Senior Software Engineer & Technical Lead",
    description,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Runs before paint so the saved or system theme applies without a flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${montserrat.className} overflow-x-hidden text-slate-700 dark:text-slate-200`}
      >
        {" "}
        {children}
      </body>
    </html>
  );
}
