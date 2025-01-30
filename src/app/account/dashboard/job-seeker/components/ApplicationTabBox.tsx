"use client"; // For Next.js App Router (if using `app` directory)

import React from "react";

// Define Job Type
export interface Job {
  title: string;
  company: string;
  location: string;
  workMode: string;
  type: string;
  level: string;
  postedTime: string;
}

// Clock Icon Component
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

// Location Icon Component
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

// Job Card Component
const JobCard: React.FC<{ job: Job }> = ({ job }) => (
  <div className="mb-4 p-5 bg-[#1D1D1C] w-[760px] rounded-lg shadow-md">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="text-[24px] font-semibold text-white mb-2">
          {job.title}
        </h3>
        <p className="text-[#BBBBBB]">{job.company}</p>
      </div>
      <button className="px-4 py-2 text-sm text-white bg-gray-700 rounded-lg hover:bg-gray-600">
        VIEW APPLICATION
      </button>
    </div>

    <div className="flex items-center gap-4 text-sm text-gray-400 my-4">
      <div className="flex items-center space-x-1 ml-2">
        <LocationIcon />
        <span>{job.location}</span>
      </div>
      <span className="border border-[#BBBBBB] rounded-lg px-2 py-1">
        {job.workMode}
      </span>
      <span className="border border-[#BBBBBB] rounded-lg px-2 py-1">
        {job.type}
      </span>
      <span className="border border-[#BBBBBB] rounded-lg px-2 py-1">
        {job.level}
      </span>
    </div>

    <div className="flex justify-between items-center text-sm text-gray-400">
      <div className="flex items-center space-x-1">
        <ClockIcon />
        <span>Posted {job.postedTime}</span>
      </div>
    </div>
  </div>
);

// Application List Component
const ApplicationTabBox = () => {
  const sampleJobs: Job[] = [
    {
      title: "Full Stack Developer",
      company: "SkillNet Incorporated",
      location: "Lagos, Nigeria",
      workMode: "Hybrid",
      type: "Full time",
      level: "Entry Level",
      postedTime: "12 hours ago",
    },
    {
      title: "Full Stack Developer",
      company: "SkillNet Incorporated",
      location: "Lagos, Nigeria",
      workMode: "Hybrid",
      type: "Full time",
      level: "Entry Level",
      postedTime: "12 hours ago",
    },
    {
      title: "Full Stack Developer",
      company: "SkillNet Incorporated",
      location: "Lagos, Nigeria",
      workMode: "Hybrid",
      type: "Full time",
      level: "Entry Level",
      postedTime: "12 hours ago",
    },
  ];

  return (
    <div className="p-4">
      {sampleJobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default ApplicationTabBox;
