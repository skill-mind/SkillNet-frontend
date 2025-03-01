"use client";
import { useState } from "react";
import Applications from "./components/Applications";
import Post from "./components/Post";
import Draft from "./components/Draft";
import CreateJobSection from "../components/createJob";

const tabs = [
  { id: "post", label: "Posts" },
  { id: "applications", label: "Applications" },
  { id: "draft", label: "Drafts" },
] as const;

type TabType = (typeof tabs)[number]["id"];

const JobOpening = () => {
  const [activeTab, setActiveTab] = useState<TabType>("post");

  const renderComponent = () => {
    switch (activeTab) {
      case "post":
        return <Post />;
      case "applications":
        return <Applications/>;
      case "draft":
        return <Draft />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full  mx-auto p-3 mr-8 sm:p-6 bg-black">
      <h1 className="text-[24px] font-bold mb-4 text-white">Job Openings</h1>
      
      <div className="flex gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 text-sm rounded-sm transition-all ${
              activeTab === tab.id
                ? "bg-[#1e1e1e] text-[#A8C789] border border-[#444444]"
                : "text-white hover:text-gray-300 border border-[#333333]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="text-white flex flex-col gap-2">
        {renderComponent()}
      </div>

      <CreateJobSection/>
    </div>
  );
}

export default JobOpening;