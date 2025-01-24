import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillNet",
  description:
    "SkillNet is an innovative blockchain-powered platform that seamlessly bridges the gap between job seekers, employers, tutors, and institutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className="relative w-full bg-[#0E0F0E] text-white bg-cover bg-center bg-no-repeat">
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
