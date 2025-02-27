"use client";
import { MessageSquare, Percent, Folder } from "lucide-react";
import EmployerStatCard from "./components/employer-stats";
import QuickActionButton from "./components/employer-card";


const stats = [
  {
    value: "$1,500",
    label: "Total Money Disbursed",
    icon: <Percent className="text-blue-500" size={30} />,
    bgCol: "bg-blue-500",
  },
  {
    value: "12",
    label: "Number of Job Openings",
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
    label: "Create Job Opening",
    sectionName: "job openings",
  },
  {
    label: "Viewing Jobs",
    sectionName: "job openings",
  },
  {
    label: "Workers Feedback",
    sectionName: "notifications",
  },
];

export default function Tutor() {
  return (
    <main className="flex-1 px-8 pb-8 pt-2 mt-2 mb-4 overflow-scroll scrollbar-hide">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <EmployerStatCard key={index} {...stat} />
        ))}
      </div>
      <section>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {quickActions.map((action, index) => (
            <QuickActionButton
              key={index}
              label={action.label}
              sectionName={action.sectionName}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
