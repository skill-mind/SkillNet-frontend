"use client";
import { useContext } from "react";
import { DashBoardContext } from "@/app/useContext/dashboardContext";
import Institution from "./institution/institution";
import Candidates from "./candidates/page";
import Notification from "./notification/page";
import Certification from "./certificates/page";
import Exam from "./exams/page";
import Verification from "./verification/page";



function Page() {
  const { activeSection } = useContext(DashBoardContext);

  return (
    <div className="overflow-y-auto scrollbar-hide scroll-smooth">
      {activeSection === "home" && <Institution />}
      {activeSection === "certifications" && <Certification />}
      {activeSection === "notifications" && <Notification />}
      {activeSection === "exam" && <Exam />}
      {activeSection === "candidates" && <Candidates />}
      {activeSection === "verification" && <Verification />}
      
    </div>
  );
}
export default Page;
