"use client"

interface TabsProps {
  activeTab: "recent" | "saved" | "applications"
  onTabChange: (tab: "recent" | "saved" | "applications") => void
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => onTabChange("recent")}
        className={` text-[16px] px-4 py-2 rounded border ${
          activeTab === "recent"
            ? "text-primary border-primary bg-[#1C1C1C]" 
            : "text-grayText border-gray-700 bg-transparent hover:text-primary"
        }`}
      >
        Recent
      </button>
      <button
        onClick={() => onTabChange("saved")}
        className={`text-[16px] px-4 py-2 rounded border ${
          activeTab === "saved"
            ? "text-primary border-primary bg-[#1C1C1C]"
            : "text-grayText border-gray-700 bg-transparent hover:text-primary"
        }`}
      >
        Saved
      </button>
      <button
        onClick={() => onTabChange("applications")}
        className={`text-[16px] px-4 py-2 rounded border ${
          activeTab === "applications"
            ? "text-primary border-primary bg-[#1C1C1C]"
            : "text-grayText border-gray-700 bg-transparent hover:text-primary"
        }`}
      >
        Applications
      </button>
    </div>
  )
}

export default Tabs
