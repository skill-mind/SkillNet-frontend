"use client";
import ExamFeedNavbar from "@/app/exam/components/ExamFeedNavbar";
import ExamPageNavbar from "@/app/exam/components/ExamPageNavbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function ExamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isMainExamPage = pathname === "/exam";
  const isExamPage = pathname.includes("exam-page");

  return (
    <div>
      {!isMainExamPage && !isExamPage && <ExamFeedNavbar />}
      {isExamPage && <ExamPageNavbar />}
      {<div className="">{children}</div>}
      {!isMainExamPage && !isExamPage && <Footer />}
    </div>
  );
}
