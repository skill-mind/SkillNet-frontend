import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../components/providers";

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
        <body className="relative w-full bg-[#0E0F0E] bg-cover bg-center bg-no-repeat overflow-x-hidden">
          {children}
        </body>
      </Providers>
    </html>
  );
}
