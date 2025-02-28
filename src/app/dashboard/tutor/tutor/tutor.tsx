"use client";

import { StatCard } from "../component/StatCard";
import { MessageSquare, Percent, Folder } from "lucide-react";
import { QuickActionButton } from "../component/QuickActionButton";

const stats = [
  {
    value: "$1,500",
    label: "Total Earnings",
    icon: <Percent className="text-blue-500" size={30} />,
    bgCol: "bg-blue-500",
  },
  {
    value: "12",
    label: "Number of Enrolled Students",
    icon: <Folder className="text-purple-600" size={30} fill={"#9333ea"} />,
    bgCol: "bg-purple-500",
  },
  {
    value: "12",
    label: "Total Courses Published",
    icon: <Folder className="text-purple-600" size={30} fill={"#9333ea"} />,
    bgCol: "bg-purple-500",
  },
  {
    value: "10+",
    label: "Messages",
    icon: (
      <MessageSquare className="text-orange-500" fill="#f97316" size={30} />
    ),
    bgCol: "bg-orange-500",
  },
];

const quickActions = [
  {
    label: "Create Course",
    onClick: () => console.log("Create Course clicked"),
  },
  {
    label: "Viewing Earnings",
    onClick: () => console.log("Viewing Earnings clicked"),
  },
  {
    label: "Student Feedback",
    onClick: () => console.log("Student Feedback clicked"),
  },
];

export default function Tutor() {
  return (
    <main className="flex-1 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      <section>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {quickActions.map((action, index) => (
            <QuickActionButton key={index} {...action} />
          ))}
        </div>
      </section>
    </main>
  );
}
