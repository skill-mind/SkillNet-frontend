"use client";

import React from "react";

const CreateJobSection = () => {
  return (
    <div className="lg:mr-10">
    <h2 className="text-md text-gray-400 mb-4 px-2 sm:px-0">Create A New Job Opening</h2>
    <div className="w-full rounded-md p-4 sm:p-6 bg-[#161716]">
      
      <p className="text-gray-400 text-sm mb-6 sm:mb-8 text-center px-2">
        Create a new job opening, publish for unique talents, and get the best hands to get the job done
      </p>
      
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
      
        <button 
          className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 sm:h-8 sm:w-8 text-white" 
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
      
        <button 
          className="flex items-center gap-2 py-2 sm:py-3 px-3 sm:px-4 bg-zinc-800 text-xs sm:text-sm text-[#A8C789] rounded hover:bg-zinc-700 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-3 w-3 sm:h-4 sm:w-4" 
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
    </div>
  );
};

export default CreateJobSection;