"use client";

import React from "react";
import { Card } from "@/components/ui/card";

type AccountType = {
  id: string;
  title: string;
  description: string;
};

const accountTypes: AccountType[] = [
  {
    id: "job-seeker",
    title: "Job Seeker",
    description: "Apply for jobs and excel in careers",
  },
  {
    id: "employer",
    title: "Employer",
    description: "Post jobs and verify candidate certificates",
  },
  {
    id: "tutor",
    title: "Tutor",
    description: "Create and monitor courses and test assignments",
  },
  {
    id: "institution",
    title: "Institution",
    description: "Create courses and host exams for students or employees",
  },
];

const AccountTypeSelector: React.FC = () => {
  const [selectedType, setSelectedType] = React.useState<string>("");

  return (
    <Card className="max-w-md p-6 bg-gray-900 text-white">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-1">Select Account Type</h2>
          <p className="text-gray-400 text-sm">Select Account Type</p>
        </div>

        <div className="space-y-3">
          {accountTypes.map((type) => (
            <label
              key={type.id}
              className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors
                ${
                  selectedType === type.id
                    ? "border-green-500 bg-gray-800"
                    : "border-gray-700 hover:border-gray-600"
                }`}
            >
              <input
                type="radio"
                name="accountType"
                value={type.id}
                checked={selectedType === type.id}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-8 h-8 text-green-500 bg-gray-700 border-gray-600 focus:ring-green-500 focus:ring-2"
              />
              <div className="ml-4">
                <div className="text-sm font-medium">{type.title}</div>
                <div className="text-xs text-gray-400">{type.description}</div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AccountTypeSelector;
