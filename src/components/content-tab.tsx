"use client";
import React from "react";
import Image from "next/image";
import TabNavigation, { TabPanel } from "./tabs";
import hexagon from "@/public/img/hexagonn.svg";
import ContentComponent from "./content";

interface NavItem {
  id: string;
  text: string;
}

const ContentPage: React.FC = () => {
  const [tabId, setTabId] = React.useState("overview");

  const tabs: NavItem[] = [
    { id: "overview", text: "Overview" },
    { id: "content", text: "Content" },
    { id: "tutors", text: "Tutors/Facilitators" },
  ];

  return (
    <div className="min-h-screen bg-black text-white mt-32 overflow-hidden">
      <Image
        src={hexagon}
        className="absolute -left-64 top-52 translate-y-1/2 -translate-x-1/2 transform object-contain"
        width={900}
        alt=""
      />
      <TabNavigation
        items={tabs}
        defaultTab="overview"
        onChange={(tabId) => setTabId(tabId)}
      >
        <TabPanel tabId={tabId} activeTab={tabs[0].id}>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-300">Course overview content goes here...</p>
        </TabPanel>
        <TabPanel tabId={tabId} activeTab={tabs[1].id}>
          <ContentComponent />
        </TabPanel>
        <TabPanel tabId={tabId} activeTab={tabs[2].id}>
          <h2 className="text-2xl font-bold mb-4">Tutors/Facilitators</h2>
          <p className="text-gray-300">
            Tutor and Facilitators content goes here...
          </p>
        </TabPanel>
      </TabNavigation>
    </div>
    // </div>
  );
};

export default ContentPage;
