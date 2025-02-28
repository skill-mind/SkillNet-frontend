"use client";
import { useState } from "react";
import { ChevronDown, MapPin, PencilIcon } from "lucide-react";
import { applicantData} from "@/app/utils/applicantData";

const Applications = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(true);
  const [isResponsibilitiesExpanded, setIsResponsibilitiesExpanded] = useState(true);
  
  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const toggleResponsibilities = () => {
    setIsResponsibilitiesExpanded(!isResponsibilitiesExpanded);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 mb-10 lg:mr-10">
      <div className="w-full md:w-3/5 space-y-3">
        {applicantData.map((applicant) => (
          <div 
            key={applicant.id} 
            className={`bg-[#161716] border ${expandedId === applicant.id ? "border-zinc-500" : "border-zinc-800"} rounded-md overflow-hidden`}
          >
            {/* card */}
            <div className="p-4">
              <div className="text-xs text-[#606060] mb-1">Posted {applicant.postedTime}</div>
              <h2 className="text-white text-xl md:text-[24px] pt-3 font-semibold">{applicant.name}</h2>
              <p className="text-[#BBBBBB] text-sm md:text-[16px]">{applicant.position}</p>
              
              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center sm:justify-between pb-6 mb-4 border-b border-[#1D1D1C]">
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-0">
                  <div className="flex items-center gap-1 text-gray-400 text-xs md:text-[12px] sm:text-sm">
                    <MapPin size={14} />
                    <span>{applicant.location}</span>
                    <span className="border-[#1D1D1C] mr-2">|</span>
                  </div>
                  <div className="flex items-center text-gray-400 gap-2">
                    <span className="text-xs sm:text-sm">{applicant.level}</span>
                    <span className="border-[#1D1D1C] mr-2">|</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
  
                    <span>Applied {applicant.appliedTime}</span>
                  </div>
                </div>

                <div className="w-full sm:w-auto">
                  <button
                    className="flex items-center justify-center w-full  sm:w-auto px-3 md:py-[4px] md:px-[8px] sm:px-[24px] py-2 sm:py-[12px] text-[#A8C789] bg-transparent border border-zinc-700 rounded-md hover:bg-zinc-800 transition text-xs md:text-[10px] sm:text-sm"
                    onClick={() => toggleExpand(applicant.id)}
                  >
                    {expandedId === applicant.id ? "HIDE APPLICATION" : "VIEW APPLICATION"}
                  </button>
                </div>
              </div>
            </div>
            
            {/* drop-down details section */}
            {expandedId === applicant.id && (
              <div className="p-4 gap-2 bg-[#161716] border-b border-[#1D1D1C]">
                  <div className="mb-4">
                  <h3 className="text-[#76776] text-base md:text-[18px] mb-2">Submission</h3>
                  <p className="text-sm md:text-[16px] text-[#D9D9D9]">{applicant.submission.description}</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-gray-400 mb-2">Certifications</h3>
                  <div className="space-y-4 py-4">
                    {applicant.certifications.map((cert, index) => (
                      <div key={index} className="p-4 rounded-md flex flex-col md:flex-row items-start md:items-center gap-4">
                        <div className="bg-[#D9D9D9] w-12 h-12 rounded-md"></div>
                        <div className="flex-grow">
                          <h4 className="text-white text-base md:text-[18px]">{cert.title}</h4>
                          <p className="text-[#999999] text-sm md:text-[14px]">Provider: {cert.provider}</p>
                          <p className="text-[#A8C789] text-xs cursor-pointer pt-2 underline">{cert.id}</p>
                        </div>
                        <div className="flex items-center justify-between w-full md:w-auto mt-2 md:mt-0">
                          <span className="text-[#BBBBBB] text-xs md:text-[14px] mr-2">{cert.date}</span>
                          <div className="flex items-center"> 
                            <button className="text-[#BBBBBB] text-xs md:text-[14px] flex items-center hover:text-white">
                              <PencilIcon className="w-4 h-4 mr-1" /> EDIT
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
              
                <div className="mb-4 border-b border-[#1D1D1C]">
                  <h3 className="text-[#767776] text-base md:text[18px] mb-4">Skills</h3>
                  <div className="flex mb-2 flex-wrap gap-2">
                    {applicant.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 md:px-4 py-1 md:py-2 text-[#BBBBBB] text-xs md:text-[14px] border border-zinc-700 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
         
                <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
                  <button className="px-[24px] w-full py-[12px] bg-zinc-800 border border-zinc-700 text-white rounded hover:bg-zinc-700 transition text-xs md:text-[14px]">
                    REJECT
                  </button>
                  <button className="px-[24px] w-full py-[12px] bg-[#A8C789] text-black rounded hover:bg-[#A8C789] transition text-xs md:text-[14px]">
                    ACCEPT
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Job Application overview*/}
      <div className="w-full mt-6 md:mt-0 md:w-3/5 lg:w-2/5">
        <div className="bg-[#161716] border-zinc-800 border rounded-md overflow-hidden">
          <div className="bg-[#161716] bg-opacity-10 p-3">
            <div className="flex items-center justify-between">
              <div className="font-medium mb-4 text-sm md:text-base">Job Title - (24 Applicants)</div>
            </div>
            <div className="text-xs text-[#606060] mb-1">Posted 12 hours ago</div>
          </div>
          <div className="px-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-3 mt-3">
              <h2 className="text-white text-lg md:text-xl font-medium">Job Title</h2>
              <button className="w-full sm:w-auto px-3 sm:px-[24px] py-2 sm:py-[10px] border border-zinc-700 rounded-md text-white text-xs md:text-[14px] hover:bg-zinc-800">
                EDIT OPENING
              </button>
            </div>
            
            <div className="text-[#BBBBBB] text-xs md:text-[14px] mb-1">Job Type (e.g Hybrid)</div>
             
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="bg-[#161716] bg-opacity-60 px-3 md:px-4 py-1 md:py-2 text-center rounded border border-zinc-700 text-[#BBBBBB] text-xs">Level</div>
              <div className="bg-[#161716] bg-opacity-60 px-3 md:px-4 py-1 md:py-2 text-center rounded border border-zinc-700 text-[#BBBBBB] text-xs">Deadline</div>
              <div className="bg-[#161716] bg-opacity-60 px-3 md:px-4 py-1 md:py-2 text-center rounded border border-zinc-700 text-[#BBBBBB] text-xs">Skills</div>
            </div>
            
            
            <div className="mb-4 mt-6">
              <div 
                className="flex items-center justify-between text-gray-400 pb-2 cursor-pointer"
                onClick={toggleDescription}
              >
                <span className="text-[#76776] font-medium text-sm md:text-base">Description</span>
                <ChevronDown size={16} className={`transition-transform ${isDescriptionExpanded ? 'transform rotate-180' : ''}`} />
              </div>
              {isDescriptionExpanded && (
                <div className="py-3 text-xs md:text-sm text-[#D9D9D9] leading-relaxed">
                  SkillNet is an innovative, blockchain-powered platform that seamlessly connects job seekers with employers while empowering tutors and institutions to create, sell, and deliver high-quality courses and exams. It combines the best of both worlds—an online job marketplace and a learning hub—giving users a competitive edge in today&apos;s dynamic job market.
                </div>
              )}
            </div>
            
            <div className="mb-4 border-b border-zinc-700">
              <div 
                className="flex items-center justify-between text-gray-400 pb-2 cursor-pointer"
                onClick={toggleResponsibilities}
              >
                <span className="text-[#76776] font-medium text-sm md:text-base">Key Responsibilities</span>
                <ChevronDown size={16} className={`transition-transform ${isResponsibilitiesExpanded ? 'transform rotate-180' : ''}`} />
              </div>
              {isResponsibilitiesExpanded && (
                <div className="py-3 text-xs md:text-sm text-[#D9D9D9] leading-relaxed">
                  SkillNet is an innovative, blockchain-powered platform that seamlessly connects job seekers with employers while empowering tutors and institutions to create, sell, and deliver high-quality courses and exams. It combines the best of both worlds—an online job marketplace and a learning hub—giving users a competitive edge in today&apos;s dynamic job market.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;