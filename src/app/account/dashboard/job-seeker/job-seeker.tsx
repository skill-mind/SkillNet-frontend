"use client";

import React, { useState } from "react";
import RecentTab from "./components/RecentTab";
import SavedTab from "./components/SavedTab";
import ApplicationTab from "./components/ApplicationTabs";

type TabType = "recent" | "saved" | "applications";

const JobSeeker: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("recent");

  const tabs = [
    { id: "recent", label: "Recent" },
    { id: "saved", label: "Saved" },
    { id: "applications", label: "Applications" },
  ] as const;

  const renderContent = () => {
    switch (activeTab) {
      case "recent":
        return (
          <div className="space-y-4">
            <RecentTab />
          </div>
        );
      case "saved":
        return (
          <div className="text-gray-300">
            <SavedTab />
          </div>
        );
      case "applications":
        return (
          <div className="text-gray-300">
            <ApplicationTab />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen mx-24 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Jobs you might like</h1>

      <div className="mb-6">
        <div className="flex gap-4 border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 transition-all rounded-lg text-base font-medium ${
                activeTab === tab.id
                  ? "border-b-1 text-[#A8C789] border border-[#A8C789]"
                  : "text-gray-400 border border-[#3B3B3A] hover:text-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">{renderContent()}</div>
    </div>
  );
};

export default JobSeeker;
