import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

export type TabItem = {
  id: string;
  text: string;
};

interface TabNavigationProps {
  items: TabItem[];
  defaultTab?: string;
  paramName?: string;
  className?: string;
  onChange?: (tabId: string) => void;
  children: React.ReactNode;
}

interface TabNavBarProps {
  items: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

interface TabPanelProps {
  tabId: string;
  activeTab: string;
  children: React.ReactNode;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  tabId,
  activeTab,
  children,
}) => {
  if (tabId !== activeTab) return null;
  return <div className="py-6">{children}</div>;
};

export const TabNavBar: React.FC<TabNavBarProps> = ({
  items,
  activeTab,
  onTabChange,
  className = "",
}) => {
  return (
    <nav className={`${className}`}>
      <div className="flex gap-3 h-9 ">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`inline-flex leading-5 text-lg items-center font-medium transition-colors duration-200 border-2 rounded-md px-4
                ${
                  activeTab === item.id
                    ? "text-[#A8C789] border-[#3B3B3A"
                    : "text-gray-400 border-[#1D1D1C]  hover:text-gray-200"
                }`}
          >
            {item.text}
          </button>
        ))}
      </div>
    </nav>
  );
};

// Main Tab Navigation Component
export const TabNavigation: React.FC<TabNavigationProps> = ({
  items,
  defaultTab = items[0]?.id,
  paramName = "tab",
  className = "",
  onChange,
  children,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get(paramName) || defaultTab;

  const createQueryString = (name: string, value: string): string => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  };

  const handleTabChange = (tabId: string): void => {
    router.push(`?${createQueryString(paramName, tabId)}`, { scroll: false });
    onChange?.(tabId);
  };

  useEffect(() => {
    if (!searchParams.get(paramName)) {
      handleTabChange(defaultTab);
    } else {
      onChange?.(currentTab);
    }
  }, []);

  return (
    <div
      className={`min-h-screen bg-black text-white max-w-[92%] mx-auto w-full px-4 py-5 flex flex-col gap-8 ${className}`}
    >
      <TabNavBar
        items={items}
        activeTab={currentTab}
        onTabChange={handleTabChange}
      />
      <main className="">{children}</main>
    </div>
  );
};

export default TabNavigation;
