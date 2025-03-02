"use client";

import { Sidebar } from "./components/employer-sidebar";
import Header from "./components/header";
import { DashBoardContext } from "@/app/useContext/dashboardContext";
import { useState } from "react";

export default function EmployerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <DashBoardContext.Provider
      value={{
        activeSection,
        setActiveSection,
        activeNotificationTab: "all",
        setActiveNotificationTab: useState("all")[1],
      }}
    >
      <div className="flex min-h-screen bg-[#101110] text-white">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </DashBoardContext.Provider>
  );
}
