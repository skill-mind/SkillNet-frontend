"use client";

import React from "react";

// This interface can be moved to a shared types file
export interface Job {
  title: string;
  company: string;
  location: string;
  workMode: string;
  type: string;
  level: string;
  description: string;
  deadline: string;
  postedTime: string;
}

interface RecentTabBoxProps {
  onSaveJob: (job: Job) => void;
}

const ClockIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.75 1.5C7.00978 1.5 8.21796 2.00044 9.10876 2.89124C9.99955 3.78204 10.5 4.99022 10.5 6.25C10.5 7.50978 9.99955 8.71796 9.10876 9.60876C8.21796 10.4996 7.00978 11 5.75 11C4.49022 11 3.28204 10.4996 2.39124 9.60876C1.50044 8.71796 1 7.50978 1 6.25C1 4.99022 1.50044 3.78204 2.39124 2.89124C3.28204 2.00044 4.49022 1.5 5.75 1.5ZM5.75 2C4.62283 2 3.54183 2.44777 2.7448 3.2448C1.94777 4.04183 1.5 5.12283 1.5 6.25C1.5 7.37717 1.94777 8.45817 2.7448 9.2552C3.54183 10.0522 4.62283 10.5 5.75 10.5C6.30812 10.5 6.86077 10.3901 7.3764 10.1765C7.89204 9.96291 8.36056 9.64985 8.7552 9.2552C9.14985 8.86056 9.46291 8.39204 9.67649 7.8764C9.89007 7.36077 10 6.80812 10 6.25C10 5.12283 9.55223 4.04183 8.7552 3.2448C7.95817 2.44777 6.87717 2 5.75 2ZM5.5 3.5H6V6.21L8.35 7.565L8.1 8L5.5 6.5V3.5Z"
      fill="#696969"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 9.1665C9.10457 9.1665 10 8.27107 10 7.1665C10 6.06193 9.10457 5.1665 8 5.1665C6.89543 5.1665 6 6.06193 6 7.1665C6 8.27107 6.89543 9.1665 8 9.1665Z"
      stroke="#BBBBBB"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.00008 1.83325C6.58559 1.83325 5.22904 2.39516 4.22885 3.39535C3.22865 4.39554 2.66675 5.7521 2.66675 7.16658C2.66675 8.42792 2.93475 9.25325 3.66675 10.1666L8.00008 15.1666L12.3334 10.1666C13.0654 9.25325 13.3334 8.42792 13.3334 7.16658C13.3334 5.7521 12.7715 4.39554 11.7713 3.39535C10.7711 2.39516 9.41457 1.83325 8.00008 1.83325Z"
      stroke="#BBBBBB"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SaveIcon = () => (
  <svg
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.666748 2.33333V12.0573C0.666748 12.6507 1.38475 12.9487 1.80475 12.5287L6.00008 8.33333L10.1954 12.5287C10.6154 12.9487 11.3334 12.6513 11.3334 12.0573V2.33333C11.3334 1.97971 11.1929 1.64057 10.9429 1.39052C10.6928 1.14048 10.3537 1 10.0001 1H2.00008C1.64646 1 1.30732 1.14048 1.05727 1.39052C0.807224 1.64057 0.666748 1.97971 0.666748 2.33333Z"
      stroke="#696969"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const JobCard: React.FC<{ job: Job; onSaveJob: (job: Job) => void }> = ({
  job,
  onSaveJob,
}) => (
  <div className="mb-6 p-4 bg-[#1D1D1C] rounded-lg">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="text-[24px] font-semibold text-white mb-1">
          {job.title}
        </h3>
        <p className="text-[#BBBBBB] text-base">{job.company}</p>
      </div>
      <button
        onClick={() => onSaveJob(job)}
        className="px-3 py-2 text-sm flex items-center space-x-1 bg-gray-700 text-white rounded bg-inherit border-[#696969] border hover:border-[#D0EFB1] hover:text-[#D0EFB1]" 
      >
        <SaveIcon />
        <span className="pl-2">Save job</span>
      </button>
    </div>

    <div className="flex flex-col lg:flex-row lg:items-center gap-4 text-sm text-gray-400 my-4">
      <div className="flex items-center space-x-1">
        <LocationIcon />
        <span>{job.location}</span>
      </div>
      <div className="flex gap-3">
        <span className=" border border-[#BBBBBB] rounded px-2 py-1">
          {job.workMode}
        </span>
        <span className=" border border-[#BBBBBB] rounded px-2 py-1">
          {job.type}
        </span>
        <span className=" border border-[#BBBBBB] rounded px-2 py-1">
          {job.level}
        </span>
      </div>
    </div>

    <p className="text-[#D9D9D9] text-base  my-4">{job.description}</p>

    <div className="flex justify-between items-center my-3 text-sm text-gray-400">
      <div className="flex items-center space-x-1">
        <ClockIcon />
        <span>Deadline: {job.deadline}</span>
      </div>

      <span>Posted {job.postedTime}</span>
    </div>
  </div>
);

const RecentTabBox: React.FC<RecentTabBoxProps> = ({ onSaveJob }) => {
  const sampleJobs: Job[] = [
    {
      title: "Full Stack Developer",
      company: "SkillNet Incorporated",
      location: "Lagos, Nigeria",
      workMode: "Hybrid",
      type: "Full time",
      level: "Entry Level",
      description:
        "Looking for a FullStack Developer to design, deploy, and maintain web applications, manage servers, ensure seamless user experiences, and optimize performance. Drive innovation in delivering scalable and reliable digital solutions.",
      deadline: "12th March, 2025",
      postedTime: "12 hours ago",
    },
    {
      title: "Full Stack Developer",
      company: "SkillNet Incorporated",
      location: "Lagos, Nigeria",
      workMode: "Hybrid",
      type: "Full time",
      level: "Entry Level",
      description:
        "Looking for a FullStack Developer to design, deploy, and maintain web applications, manage servers, ensure seamless user experiences, and optimize performance. Drive innovation in delivering scalable and reliable digital solutions.",
      deadline: "12th March, 2025",
      postedTime: "12 hours ago",
    },
    {
      title: "Full Stack Developer",
      company: "SkillNet Incorporated",
      location: "Lagos, Nigeria",
      workMode: "Hybrid",
      type: "Full time",
      level: "Entry Level",
      description:
        "Looking for a FullStack Developer to design, deploy, and maintain web applications, manage servers, ensure seamless user experiences, and optimize performance. Drive innovation in delivering scalable and reliable digital solutions.",
      deadline: "12th March, 2025",
      postedTime: "12 hours ago",
    },
  ];
  return (
    <div>
      {sampleJobs.map((job, index) => (
        <JobCard key={index} job={job} onSaveJob={onSaveJob} />
      ))}
    </div>
  );
};

export default RecentTabBox;
