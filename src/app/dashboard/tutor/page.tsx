"use client";
import { useState } from "react";
import Header from "./component/DashboardHeader";
import Tutor from "./tutor";

function Page() {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <div className="bg-[#101110] min-h-[100vh]">
      <Header activeSection={activeSection} />
      <Tutor activeSection={activeSection} onSectionChange={setActiveSection} />

    </div>
  );
}
export default Page;
