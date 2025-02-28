"use client";

import { useContext } from "react";
import Messages from "./components/Messages";
import Payments from "./components/Payments";
import Newrequests from "./components/Newrequests";
import Announcements from "./components/Announcements";
import { DashBoardContext } from "@/app/useContext/dashboardContext";

const tabs = [
  { id: "Messages", label: "Messages" },
  { id: "Payments", label: "Payments" },
  { id: "Announcements", label: "Announcements" },
  { id: "New Requests", label: "New Requests" },
] as const;

type TabType = (typeof tabs)[number]["id"];

function Notification() {
  const { activeNotificationTab, setActiveNotificationTab } =
    useContext(DashBoardContext);

  const renderComponent = () => {
    switch (activeNotificationTab) {
      case "Messages":
        return <Messages />;

      case "Payments":
        return <Payments />;

      case "Announcements":
        return <Announcements />;

      case "New Requests":
        return <Newrequests />;

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full mx-auto p-3 sm:p-6">
      <header className="w-full flex flex-wrap overflow-x-auto gap-2 sm:gap-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveNotificationTab(tab.id as TabType)}
            className={`py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium rounded-full flex-shrink-0 transition-all ${
              activeNotificationTab === tab.id
                ? "bg-[#2D2E2D] text-white"
                : "bg-[#161716] text-gray-400 hover:text-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </header>

      <div className="text-white flex flex-col gap-2 py-5 px-4">
        {renderComponent()}
      </div>
    </div>
  );
}

export default Notification;
