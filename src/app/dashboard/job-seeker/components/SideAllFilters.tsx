import React, { useState } from "react";

interface FilterSection {
  title: string;
  options: {
    id: string;
    label: string;
    checked: boolean;
  }[];
  isOpen: boolean;
}

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const Checkbox = ({ checked, label }: { checked: boolean; label: string }) => (
  <label className="flex items-center gap-2 py-1 cursor-pointer group">
    <div
      className={`w-4 h-4 rounded border ${
        checked
          ? "bg-blue-500 border-blue-500"
          : "border-gray-600 group-hover:border-gray-500"
      }`}
    >
      {checked && (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      )}
    </div>
    <span className="text-sm text-gray-300">{label}</span>
  </label>
);

const AllFilters = () => {
  const [sections, setSections] = useState<FilterSection[]>([
    {
      title: "Work MSStatusode",
      isOpen: true,
      options: [
        { id: "available", label: "Available", checked: true },
        { id: "not-available", label: "Not available", checked: false },
      ],
    },
    {
      title: "Work Mode",
      isOpen: true,
      options: [
        { id: "hybrid", label: "Hybrid", checked: true },
        { id: "remote", label: "Remote", checked: true },
        { id: "on-site", label: "On site", checked: false },
      ],
    },
    {
      title: "Experience",
      isOpen: true,
      options: [
        { id: "internship", label: "Internship", checked: false },
        { id: "entry-level", label: "Entry Level", checked: false },
        { id: "mid-level", label: "Mid Level", checked: false },
        { id: "senior-level", label: "Senior Level", checked: false },
      ],
    },
    {
      title: "Job Type",
      isOpen: true,
      options: [
        { id: "contract", label: "Contract", checked: false },
        { id: "per-time", label: "Per Time", checked: false },
        { id: "full-time", label: "Full Time", checked: false },
      ],
    },
  ]);

  const toggleSection = (index: number) => {
    setSections(
      sections.map((section, i) =>
        i === index ? { ...section, isOpen: !section.isOpen } : section
      )
    );
  };

  const toggleOption = (sectionIndex: number, optionId: string) => {
    setSections(
      sections.map((section, i) =>
        i === sectionIndex
          ? {
              ...section,
              options: section.options.map((option) =>
                option.id === optionId
                  ? { ...option, checked: !option.checked }
                  : option
              ),
            }
          : section
      )
    );
  };

  return (
    <div className="bg-[#1D1D1C] rounded-lg p-4 max-w-xs lg:h-[722px] lg:w-[550px]">
      <h2 className="text-white text-lg font-semibold mb-4">All Filters</h2>

      <div className="space-y-6">
        {sections.map((section, sectionIndex) => (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(sectionIndex)}
              className="w-full flex justify-between items-center text-gray-400 hover:text-gray-300 mb-2"
            >
              <span>{section.title}</span>
              <ChevronIcon isOpen={section.isOpen} />
            </button>

            {section.isOpen && (
              <div className="space-y-1">
                {section.options.map((option) => (
                  <div
                    key={option.id}
                    onClick={() => toggleOption(sectionIndex, option.id)}
                  >
                    <Checkbox checked={option.checked} label={option.label} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFilters;
