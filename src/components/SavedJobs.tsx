"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bookmark } from "lucide-react"
import { useState } from "react"

interface Job {
  id: number
  title: string
  company: string
  location: string
  tags: string[]
  description: string
  deadline: string
  postedTime: string
}

const SAMPLE_JOBS: Job[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "SkillNet Incorporated",
    location: "Lagos, Nigeria",
    tags: ["Hybrid", "Full time", "Entry Level"],
    description:
      "Looking for a Fullstack Developer to design, deploy, and maintain web applications, manage servers, ensure seamless user experiences, and optimize performance. Drive innovation in delivering scalable and reliable digital solutions.",
    deadline: "12th March, 2025",
    postedTime: "12 hours ago",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "SkillNet Incorporated",
    location: "Lagos, Nigeria",
    tags: ["Hybrid", "Full time", "Entry Level"],
    description:
      "Looking for a Fullstack Developer to design, deploy, and maintain web applications, manage servers, ensure seamless user experiences, and optimize performance. Drive innovation in delivering scalable and reliable digital solutions.",
    deadline: "12th March, 2025",
    postedTime: "12 hours ago",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "SkillNet Incorporated",
    location: "Lagos, Nigeria",
    tags: ["Hybrid", "Full time", "Entry Level"],
    description:
      "Looking for a Fullstack Developer to design, deploy, and maintain web applications, manage servers, ensure seamless user experiences, and optimize performance. Drive innovation in delivering scalable and reliable digital solutions.",
    deadline: "12th March, 2025",
    postedTime: "12 hours ago",
  },
]

export default function SavedJobs() {
  const [activeTab, setActiveTab] = useState<"recent" | "saved" | "applications">("saved")

  return (
        <div className="space-y-3">
          {SAMPLE_JOBS.map((job) => (
            <Card key={job.id} className="bg-[#1C1C1C] border-none p-6 relative">
              <div className="text-[14px] text-gray-500 mb-2">Posted {job.postedTime}</div>
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-start justify-between">
                      <h2 className="text-[24px] font-semibold text-[#FCFCFC]">{job.title}</h2>
                    </div>
                    <p className="text-[16px] text-grayText">{job.company}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[14px] text-grayText flex items-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      {job.location}
                    </span>

                    <div className="flex gap-2">
                      {job.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 border border-[#313130] text-grayText text-[14px] rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-[16px] text-grayText leading-[1.5]">{job.description}</p>

                  <div className="text-[13px] text-grayText flex items-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Deadline: {job.deadline}
                  </div>
                </div>

                <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                  <Bookmark className="h-5 w-5 fill-current" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
  )
}

