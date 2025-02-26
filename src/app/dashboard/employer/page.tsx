"use client";

import Dashboard from "./employer";
import { useContext } from "react";
import { DashBoardContext } from "@/app/useContext/dashboardContext";


function Page() {
  const { activeSection } = useContext(DashBoardContext);

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "job openings":
        return <div className="text-white">"job-opening"</div>;
      case "notifications":
        return <div className="text-white">"Notifications"</div>;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="mx-auto">
      {renderContent()}
    </div>
  );
}

export default Page;