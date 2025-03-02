"use client";

import EmployerDashboard from "./employer";
import { useContext } from "react";
import { DashBoardContext } from "@/app/useContext/dashboardContext";
import JobOpening from "./job-openings/job-openings";
import Notifications from "./notifications/notifications";
import Profile from "./profile/profile";
import Support from "./support/page";
import Payment from "./payment/payment";

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
      case "profile":
        return <Profile />;      
      case "payments":
        return <Payment />;
        case "support":
         return <Support />;
      default:
        return <EmployerDashboard />;
    }
  };

  return <div className="mx-auto">{renderContent()}</div>;
}

export default Page;
