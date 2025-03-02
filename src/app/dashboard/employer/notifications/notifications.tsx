"use client";

import { useContext, useEffect, useState } from "react";
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
  
  const [localActiveTab, setLocalActiveTab] = useState<TabType>("Messages");
  
  useEffect(() => {
    if (activeNotificationTab) {
      setLocalActiveTab(activeNotificationTab as TabType);
    }
  }, [activeNotificationTab]);
  
  const handleTabChange = (tabId: TabType) => {
    setLocalActiveTab(tabId);
    setActiveNotificationTab(tabId);
    
    console.log("Tab changed to:", tabId);
  };
  
  const renderComponent = () => {
    return localActiveTab === "Messages" ? (
      <Messages />
    ) : localActiveTab === "Payments" ? (
      <Payments />
    ) : localActiveTab === "Announcements" ? (
      <Announcements />
    ) : localActiveTab === "New Requests" ? (
      <Newrequests />
    ) : (
      <Messages />
    );
  };

  return (
    <div className="w-full h-full mx-auto p-3 sm:p-6">
      <header className="w-full flex flex-wrap overflow-x-auto gap-2 sm:gap-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            type="button"
            className={`py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium rounded-full flex-shrink-0 transition-all ${
              localActiveTab === tab.id
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