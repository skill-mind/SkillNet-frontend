"use client";

import { Sidebar } from "./component/TutorDashboardSidebar";
import { DashboardContent } from "./component/DashboardContent";

interface TutorProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Tutor({ activeSection, onSectionChange }: TutorProps) {
  return (
    <div className="flex min-h-[100%] text-white">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={onSectionChange}
      />
      <DashboardContent activeSection={activeSection} />
    </div>
  );
}
