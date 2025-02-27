"use client";

import EmployerDashboard from "./employer";
import { useContext } from "react";
import { DashBoardContext } from "@/app/useContext/dashboardContext";
import JobOpening from "./job-openings/job-openings";
import Notifications from "./notifications/notifications";

function Page() {
  const { activeSection } = useContext(DashBoardContext);

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <EmployerDashboard />;
      case "job openings":
        return <JobOpening />;
      case "notifications":
        return <Notifications />;

      default:
        return <EmployerDashboard />;
    }
  };

  return <div className="mx-auto">{renderContent()}</div>;
}

export default Page;
