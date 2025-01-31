"use client";

import React, { useState } from "react";
import TabSwitcher from "./components/TabSwitcher";
import Explore from "./components/Explore";
import MyCourses from "./components/MyCourses";

const LearningHub = () => {
  const [currentTab, setCurrentTab] = useState<
    "explore" | "my-courses" | "wish-list"
  >("explore");

  function handleSwitch(to: "explore" | "my-courses" | "wish-list") {
    if (to === currentTab) return;
    setCurrentTab(to);
  }
  return (
    <div className="py-4 px-[100px]">
      <TabSwitcher activeTab={currentTab} handleSwitch={handleSwitch} />
      <div className="py-[50px]">
        {currentTab === "explore" && <Explore />}
        {currentTab === "my-courses" && <MyCourses />}
      </div>
    </div>
  );
};

export default LearningHub;
