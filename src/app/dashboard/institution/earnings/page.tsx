"use client";

import { useState } from "react";

import { DateActionButton } from "../components/DateActionButton";
import AllTime from "./components/AllTime";
import Monthly from "./components/Monthly";
import Weekly from "./components/Weekly";


type DateLabel = "All-Time" | "Monthly" | "Weekly";


function Earnings() {

  // we set default date label view to "All-Time"
  const [activeDateLabel, setActiveDateLabel] = useState<DateLabel>("All-Time");


  const DateActions = [
    {
      label: "All-Time",
      isActive: activeDateLabel === "All-Time",
      onClick: () => setActiveDateLabel("All-Time"),
    },
    {
      label: "Monthly",
      isActive: activeDateLabel === "Monthly",
      onClick: () => setActiveDateLabel("Monthly"),
    },
    {
      label: "Weekly",
      isActive: activeDateLabel === "Weekly",
      onClick: () => setActiveDateLabel("Weekly"),
    },
  ];


  const RenderComponent = () => {
    switch (activeDateLabel) {
      case "All-Time":
        return <AllTime />;
      case "Monthly":
        return <Monthly />;
      case "Weekly":
        return <Weekly />;
      default:
        return null;
    }
  };


  return (
    <main className="flex-1 px-8 scrollbar-hide">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 text-white">
        {DateActions.map((action, index) => (
          <DateActionButton key={index} {...action} />
        ))}
      </div>
      {RenderComponent()}

    </main>
  );
}

export default Earnings;
