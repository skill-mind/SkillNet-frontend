"use client";

import React from "react";

const CreateJobSection = () => {
  return (
    <>
    <h2 className="text-md  text-gray-400 mb-4">Create A New Job Opening</h2>
    <div className="w-full  rounded-md p-6 bg-[#161716]">
      
      <p className="text-gray-400 text-sm mb-8 text-center">
        Create a new job opening, publish for unique talents, and get the best hands to get the job done
      </p>
      
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Circle plus button */}
        <button 
          className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 4v16m8-8H4" 
            />
          </svg>
        </button>
        
        {/* Create job button */}
        <button 
          className="flex items-center gap-2 py-3 px-4 bg-zinc-800 text-sm text-[#A8C789] rounded hover:bg-zinc-700 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 4v16m8-8H4" 
            />
          </svg>
          CREATE NEW JOB OPENING
        </button>
      </div>
    </div>
    </>
  );
};

export default CreateJobSection;