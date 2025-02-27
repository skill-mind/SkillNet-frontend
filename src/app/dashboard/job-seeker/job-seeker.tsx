"use client";
import React, { useState } from "react";
import RecentTab from "./components/RecentTab";
import SavedTab from "./components/SavedTab";
import ApplicationTab from "./components/ApplicationTabs";
import { Job } from "./components/RecentTabBox";
import AllFilters from "./components/SideAllFilters";
import FilterBottomSheet from "./components/FilterBottomSheet";

type TabType = "recent" | "saved" | "applications";

const JobSeeker: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("recent");
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSaveJob = (job: Job) => {
    if (!savedJobs.some((saved) => saved.title === job.title)) {
      setSavedJobs((prev) => [...prev, job]);
    }
  };

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
            <RecentTab onSaveJob={handleSaveJob} />
          </div>
        );
      case "saved":
        return (
          <div className="text-gray-300">
            <SavedTab savedJobs={savedJobs} />
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
    <div className="min-h-screen mx-5 lg:mx-24 text-white py-6">
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

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-[4rem]">
        <div className="col-span-3">{renderContent()}</div>
        <div className="hidden lg:block">
          {(savedJobs.length > 0 || activeTab !== "saved") && <AllFilters />}
        </div>
      </div>

      {(savedJobs.length > 0 || activeTab !== "saved") && (
        <>
          <button
            className="lg:hidden fixed bottom-4 right-4 bg-primary text-black px-4 py-2 rounded-lg shadow-lg"
            onClick={() => setIsFilterOpen(true)}
          >
            Filters
          </button>

          <FilterBottomSheet
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />
        </>
      )}
    </div>
  );
};

export default JobSeeker;
