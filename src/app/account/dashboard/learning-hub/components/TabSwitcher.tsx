"use client";

const tabs: {
  label: string;
  value: "explore" | "my-courses" | "wish-list";
  index: number;
}[] = [
  {
    label: "Explore",
    value: "explore",
    index: 1,
  },
  {
    label: "My Courses",
    value: "my-courses",
    index: 2,
  },
  {
    label: "Wish List",
    value: "wish-list",
    index: 3,
  },
];

const TabSwitcher = ({
  activeTab,
  handleSwitch,
}: {
  activeTab: string;
  handleSwitch: (to: "explore" | "my-courses" | "wish-list") => void;
}) => {
  return (
    <div className="flex gap-x-2 items-center text-base leading-5 text-[#ABABAB] font-normal">
      {tabs.map((tab) => (
        <button
          key={tab.index}
          onClick={() => handleSwitch(tab.value)}
          className={`py-[6px] px-5 rounded-sm border bg-transparent border-[#1D1D1C] transition-all duration-300 ease-in-out ${
            activeTab === tab.value &&
            "border-[#3B3B3A] bg-[#161716] font-medium text-[#A8C789]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;
