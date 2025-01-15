import type { Metadata } from "next";
import { Inter, Work_Sans, Raleway } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
});

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
      <body className={`${workSans.className} ${inter.className} ${raleway.className}`}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
