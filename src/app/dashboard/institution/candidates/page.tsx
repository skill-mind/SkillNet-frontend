"use client";
import React, { useState } from "react";
import NewCandidates from "./Components/NewCandidates";

const Candidates = () => {
  const [activeTab, setActiveTab] = useState<TabType>("new_candidates");

  const tabs = [
    { id: "new_candidates", label: "New candidates" },
    { id: "past_candidates", label: "Past candidates" },
    { id: "verified_candidates", label: "Verified candidates" },
  ] as const;

  type TabType = (typeof tabs)[number]["id"];

  const renderComponent = () => {
    switch (activeTab) {
      case "new_candidates":
        return <NewCandidates />;
      // case "past_candidates":
      //   return <Past candidates />;
      // case "verified_candidates":
      //   return <Verified candidates />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-5 ml-10">
      <header className="w-full flex items-center justify-start gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 rounded-md border border-neutral-900 cursor-pointer transition-all ${
              activeTab === tab.id ? "bg-neutral-800" : "hover:bg-neutral-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </header>
      <div className="text-white flex flex-col gap-3 py-5">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Candidates;
