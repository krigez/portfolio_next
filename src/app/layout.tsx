import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header.js"
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Chaitanya Arige",
  description: "This is my Portfolio",
};

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
})


export default function RootLayout(
  {
  children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <Header></Header>
        {children}
      </body>
    </html>
  );
}
