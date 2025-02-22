"use client";

import { useState } from "react";
import NewStudent from "./components/NewStudent";
import Questions from "./components/Questions";
import Payment from "./components/Payment";
import Announcements from "./components/Announcements";

const tabs = [
  { id: "new_student", label: "New Student" },
  { id: "questions", label: "Questions" },
  { id: "payment", label: "Payment" },
  { id: "announcements", label: "Announcements" },
] as const;

type TabType = (typeof tabs)[number]["id"];

function Notification() {
  const [activeTab, setActiveTab] = useState<TabType>("new_student");

  const renderComponent = () => {
    switch (activeTab) {
      case "new_student":
        return <NewStudent />;
      case "questions":
        return <Questions />;
      case "payment":
        return <Payment />;
      case "announcements":
        return <Announcements />;
      default:
        return null;
    }
  };

  return (
    <div className=" w-[1000px] h-full mx-auto p-6">
      <header className="w-full flex items-center justify-start gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 text-sm font-medium rounded-full transition-all ${
              activeTab === tab.id
                ? "bg-[#2D2E2D] text-white"
                : "bg-[#161716] text-gray-400 hover:text-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </header>

      <div className="text-white flex flex-col gap-3 py-5 px-4">
        {renderComponent()}
      </div>
    </div>
  );
}

export default Notification;
