"use client";
import React, { useState } from "react";
import NewCandidates from "./Components/NewCandidates";
import PastCandidates from "./Components/PastCandidates";
import VerifiedCandidates from "./Components/VerifiedCandidates";

const tabs = [
  { id: "new_candidates", label: "New candidates" },
  { id: "past_candidates", label: "Past candidates" },
  { id: "verified_candidates", label: "Verified candidates" },
] as const;

type TabType = (typeof tabs)[number]["id"];

const CandidatesTabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>("new_candidates");

  const renderComponent = () => {
    switch (activeTab) {
      case "new_candidates":
        return <NewCandidates />;
      case "past_candidates":
        return <PastCandidates />;
      case "verified_candidates":
        return <VerifiedCandidates />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-5 ml-10">
      <header className="w-full md:p-4 p-1 flex flex-col md:flex-row items-center justify-start gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`md:px-5 gap-2 md:py-3 py-2 w-full rounded-md border border-neutral-900 text-white cursor-pointer transition-all ${
              activeTab === tab.id 
                ? "bg-neutral-800" 
                : "hover:bg-neutral-800"
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

export default CandidatesTabs;