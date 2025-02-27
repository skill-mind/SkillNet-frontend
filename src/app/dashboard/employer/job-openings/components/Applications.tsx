"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Clock, Edit } from "lucide-react";
import { applicantData, jobDetails } from "@/app/utils/applicantData";

const Applications = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div className="flex flex-row gap-6 mb-10">
      {/* Left side - Applicant cards */}
      <div className="w-full lg:w-3/5 space-y-3">
        {applicantData.map((applicant) => (
          <div 
            key={applicant.id} 
            className={`bg-zinc-900 border ${expandedId === applicant.id ? "border-purple-500" : "border-zinc-800"} rounded-md overflow-hidden`}
          >
            {/* card */}
            <div className="p-4">
            <div className="text-sm text-gray-400">Posted {applicant.postedTime}</div>
              <h2 className="text-white text-xl font-semibold">{applicant.name}</h2>
              <p className="text-gray-400 mb-2">{applicant.position}</p>
              
              <div className="flex justify-start sm:flex-row sm:justify-between mb-2">
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <MapPin size={14} />
                  <span>{applicant.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">{applicant.level}</span>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Clock size={14} />
                    <span>Applied {applicant.appliedTime}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mb-2">
                <button
                  className="flex items-center justify-center px-3 py-1 text-white bg-transparent border border-zinc-700 rounded-md hover:bg-zinc-800 transition text-sm"
                  onClick={() => toggleExpand(applicant.id)}
                >
                  {expandedId === applicant.id ? "HIDE APPLICATION" : "VIEW APPLICATION"}
                </button>
              </div>
            </div>
            
            {/* drop-down details section */}
            {expandedId === applicant.id && (
              <div className="p-4 bg-zinc-950 border-t border-zinc-800">
                {/* Submission */}
                <div className="mb-4">
                  <h3 className="text-gray-400 mb-2">Submission</h3>
                  <p className="text-sm text-white">{applicant.submission.description}</p>
                </div>
                
                {/* Certifications */}
                <div className="mb-4">
                  <h3 className="text-gray-400 mb-2">Certifications</h3>
                  <div className="space-y-2">
                    {applicant.certifications.map((cert, index) => (
                      <div key={index} className="bg-zinc-900 p-3 rounded-md flex justify-between items-center">
                        <div>
                          <h4 className="text-white text-sm">{cert.title}</h4>
                          <p className="text-gray-400 text-xs">Provider: {cert.provider}</p>
                          <p className="text-gray-500 text-xs">{cert.id}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 text-xs">{cert.date}</span>
                          <button className="text-gray-400 hover:text-white">
                            <Edit size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Skills */}
                <div className="mb-4">
                  <h3 className="text-gray-400 mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {applicant.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-zinc-900 text-gray-300 text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex justify-between mt-4">
                  <button className="px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition text-sm">
                    REJECT
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition text-sm">
                    ACCEPT
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/*  Job Application details */}
      <div className="hidden lg:block lg:w-2/5">
        <div className="bg-zinc-900 rounded-md p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <div className="text-gray-400 text-sm mb-1">
                Job Title • {jobDetails.applicants} Applicants
              </div>
              <div className="text-sm text-gray-400">Posted {jobDetails.postedTime}</div>
            </div>
            <button className="px-3 py-1 border border-zinc-700 rounded-md text-white text-xs hover:bg-zinc-800">
              EDIT OPENING
            </button>
          </div>
          
          <h2 className="text-white text-xl mb-4">{jobDetails.title}</h2>
          
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div>
              <div className="text-gray-400 text-xs">Job Type</div>
              <div className="text-white text-sm">{jobDetails.type}</div>
            </div>
            <div>
              <div className="text-gray-400 text-xs">Level</div>
              <div className="text-white text-sm">{jobDetails.level}</div>
            </div>
            <div>
              <div className="text-gray-400 text-xs">Deadline</div>
              <div className="text-white text-sm">{jobDetails.deadline}</div>
            </div>
          </div>
          
          <div className="mb-2">
            <div className="text-gray-400 text-sm mb-1">Skills</div>
            <div className="flex flex-wrap gap-2">
              {jobDetails.skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-zinc-800 text-gray-300 text-xs rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center justify-between text-gray-400 border-b border-zinc-800 pb-2 cursor-pointer">
              <span>Description</span>
              <ChevronDown size={16} />
            </div>
            <div className="py-2 text-sm text-gray-300">
              {jobDetails.description}
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between text-gray-400 border-b border-zinc-800 pb-2 cursor-pointer">
              <span>Key Responsibilities</span>
              <ChevronDown size={16} />
            </div>
            <div className="py-2 text-sm text-gray-300">
              {jobDetails.keyResponsibilities}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;