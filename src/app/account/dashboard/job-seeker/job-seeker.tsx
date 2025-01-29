"use client"

import { useState } from "react"
import Tabs from "@/components/Tabs"
import SavedJobs from "@/components/SavedJobs"

export default function JobSeeker() {
  const [activeTab, setActiveTab] = useState<"recent" | "saved" | "applications">("saved")

  return (
    <div className="w-[1096px] mx-auto flex gap-6">
      <div className="w-[800px]">
        <h1 className="text-[24px] font-semibold mt-6 mb-6 text-white">
          {activeTab === "recent" && "Recent Jobs"}
          {activeTab === "saved" && "Your Saved Jobs"}
          {activeTab === "applications" && "Your Applications"}
        </h1>

        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-6">
          {activeTab === "recent" && <p>Here are your recent jobs...</p>}
          {activeTab === "saved" && <SavedJobs />}
          {activeTab === "applications" && <p>Here are your applications...</p>}
        </div>
      </div>
    </div>
  )
}
