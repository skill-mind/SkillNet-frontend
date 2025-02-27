"use client";

import {
  Bookmark,
  MapPin,
  BarChart,
  Globe,
  ChevronDown,
  Clock,
  Banknote,
} from "lucide-react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { useState } from "react"; 
import ApplicationModal from "../components/ApplicationForm";

export default function JobSeekerOverview() {

  const [isModalOpen, setIsModalOpen] = useState(false); 

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const jobDetails = {
    title: "Quality Assurance Manager",
    company: "SkillNet Incorporated",
    location: "Lagos, Nigeria",
    type: "Remote",
    posted: "Posted 5 days ago",
    salary: "250,000 - $300,000 per year",
    jobType: "Full-time",
    level: "Senior Level",
    deadline: "Deadline: 21st January, 2025",
  };

  return (
    <div className="max-w-[1256px] mx-auto px-4 sm:px-6  lg:px-10 py-8 flex gap-8">
      {/* Left Column - Job Details */}
      <div className="flex-1 space-y-6">
        <div className="bg-[#101110] rounded-[8px] pt-[20px] pb-[20px] gap-[24px]">
          <div className="space-y-2">
            <p className="text-[#606060] text-[14px] font-[400]">
              Posted 12 hours ago
            </p>
            <div className="flex justify-between items-center">
              {/* Company Info */}
              <div>
                <h1 className="text-[#FCFCFC] font-[600] leading-[28.8px] text-[24px]">
                  {jobDetails.title}
                </h1>
                <p className="text-[#BBBBBB] font-[400] text-[16px] leading-[19.2px]">
                  {jobDetails.company}
                </p>
              </div>
              {/* Apply Button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleModal}
                  className="bg-[#D0EFB1] hover:bg-[#B5D998] text-[#0E0F0E] p-[12px_24px] gap-[8px]  rounded-[4px]"
                >
                  APPLY NOW
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center space-y-8">
            <div className="flex items-center gap-4 text-[14px] text-[#BBBBBB] font-[400] leading-[16.8px]">
              <span className="flex items-center gap-1">
                <MapPin className="w-[16px] h-[16px] text-[#BBBBBB]" />
                {jobDetails.location}
              </span>
              <span className="block w-[2px] h-[28px] bg-[#1D1D1C] rounded-[8px]" />
              <span>{jobDetails.type}</span>
              <span className="block w-[2px] h-[28px] bg-[#1D1D1C] rounded-[8px]" />
              <span>{jobDetails.posted}</span>
            </div>
            {/* Bookmark Button */}
            <div className="flex items-center gap-2">
              <button>
                <Bookmark className="w-[20px] h-[20px] text-[#696969]" />
              </button>
            </div>
          </div>

          <div className="h-px w-full bg-[#1D1D1C] my-4" />

          <div className="grid grid-cols-1 gap-2 text-sm mb-[24px] text-[#BBBBBB]">
            <div className="flex gap-4">
              <IoBriefcaseOutline className="w-5 h-5 text-[#696969]" />
              <p>{jobDetails.jobType}</p>
            </div>
            <div className="flex gap-2">
              <Banknote className="w-5 h-5 text-[#696969]" />
              <p>{jobDetails.salary}</p>
            </div>
            <div className="flex gap-2">
              <BarChart className="w-5 h-5 text-[#696969]" />
              <p>{jobDetails.level}</p>
            </div>
            <div className="flex gap-2">
              <Clock className="w-5 h-5 text-[#696969]" />
              <p>{jobDetails.deadline}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#161716] p-[24px_20px_24px_20px] gap-[32px] rounded-[12px] border-solid border-[#1D1D1C] space-y-4">
          {/* Job Overview Section */}
          <div className="p-2 space-y-4">
            <h2 className="text-xl font-[500] text-[#767776]">Job Overview</h2>
            <p className="text-[#D9D9D9] leading-relaxed">
              We are seeking a highly skilled and detail-oriented Quality
              Assurance Manager to lead and manage our QA team. In this role,
              you will be responsible for ensuring that our products and
              services meet the highest standards of quality and reliability.
              You will develop and implement quality assurance strategies,
              oversee testing processes, and collaborate with cross-functional
              teams to drive continuous improvement. As the Quality Assurance
              Manager, you will play a critical role in maintaining customer
              satisfaction and upholding the company&apos;s reputation for
              excellence. This position requires strong leadership, analytical,
              and problem-solving skills, as well as a deep understanding of QA
              methodologies and best practices.
            </p>
          </div>

          <div className="h-px w-full bg-[#1D1D1C] my-4" />

          {/* Key Responsibilities Section */}
          <div className="p-2 space-y-4">
            <h2 className="text-xl font-[500] text-[#767776]">
              Key Responsibilities
            </h2>
            <ul className="list-none space-y-2 text-[#D9D9D9]">
              {/* Using custom bullet styling for better text wrapping */}
              <li className="flex gap-2">
                <span className="min-w-[6px] h-[6px] rounded-full bg-[#D9D9D9] mt-2" />
                <span>
                  Develop and implement comprehensive quality assurance
                  policies, procedures, and standards.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="min-w-[6px] h-[6px] rounded-full bg-[#D9D9D9] mt-2" />
                <span>
                  Oversee all aspects of the QA process, including planning,
                  testing, and reporting.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="min-w-[6px] h-[6px] rounded-full bg-[#D9D9D9] mt-2" />
                <span>
                  Lead and mentor the QA team, fostering a culture of continuous
                  improvement.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="min-w-[6px] h-[6px] rounded-full bg-[#D9D9D9] mt-2" />
                <span>
                  Collaborate with product development, engineering, and
                  operations teams to identify and resolve quality issues.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="min-w-[6px] h-[6px] rounded-full bg-[#D9D9D9] mt-2" />
                <span>
                  Monitor key quality metrics and develop strategies to address
                  gaps.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="min-w-[6px] h-[6px] rounded-full bg-[#D9D9D9] mt-2" />
                <span>
                  Conduct regular audits and reviews to ensure compliance with
                  regulatory requirements and company standards.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="min-w-[6px] h-[6px] rounded-full bg-[#D9D9D9] mt-2" />
                <span>
                  Stay updated on industry trends and emerging technologies to
                  enhance QA processes.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="min-w-[6px] h-[6px] rounded-full bg-[#D9D9D9] mt-2" />
                <span>
                  Manage resource allocation and prioritize tasks to meet
                  project deadlines.
                </span>
              </li>
            </ul>
          </div>

          <div className="h-px w-full bg-[#1D1D1C] my-4" />

          {/* Minimum Requirements Section */}
          <div className="p-2 space-y-4">
            <h2 className="text-xl font-[500] text-[#767776]">
              Minimum Requirements
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#D9D9D9]">
              <li>
                Bachelor&apos;s degree in Quality Management, Engineering, or a
                related field.
              </li>
              <li>
                Proven experience as a Quality Assurance Manager or in a similar
                role.
              </li>
              <li>
                Strong knowledge of QA methodologies, tools, and processes.
              </li>
              <li>
                Experience with software development and testing frameworks is a
                plus.
              </li>
              <li>Excellent leadership and team management skills.</li>
              <li>Exceptional analytical and problem-solving abilities.</li>
              <li>Strong communication and interpersonal skills.</li>
              <li>
                Detail-oriented with a commitment to achieving excellence.
              </li>
            </ul>
          </div>

          {/* Skills Section */}
          <section className="p-2">
            <h2 className="text-xl mb-4 font-[500] text-[#767776]">Skills</h2>
            <div className="flex flex-wrap gap-2 ">
              <span className="px-3 py-1 text-[#BBBBBB] rounded-[4px] border border-[#313130] text-[14px]">
                Microsoft Excel
              </span>
              <span className="px-3 py-1 text-[#BBBBBB] rounded-[4px] border border-[#313130] text-[14px]">
                Notion
              </span>
              <span className="px-3 py-1 text-[#BBBBBB] rounded-[4px] border border-[#313130] text-[14px]">
                Team Work
              </span>
            </div>
          </section>
        </div>
      </div>

      {/* Right Column - Company Info */}
      <div className="w-[400px] space-y-6 bg-[#161716] rounded-[8px] p-[20px] h-[638px]">
        <div className="space-y-4">
          <h2 className="text-[20px] font-[700] leading-[24px]">
            About The Company
          </h2>
          <div className="flex justify-between items-center">
            <h2 className="text-[18px] font-[500] text-[#767776] leading-[21.6px]">
              Overview
            </h2>
            <ChevronDown className="text-[#767776] w-[24px] h-[24px]" />
          </div>

          <p className="text-[#D9D9D9] leading-[24px] text-[16px] font-[400]">
            SkillNet is an innovative, blockchain-powered platform that
            seamlessly connects job seekers with employers while empowering
            tutors and institutions to create, sell, and deliver high-quality
            courses and exams. It combines the best of both worlds—an online job
            marketplace and a learning hub—giving users a competitive edge in
            today&apos;s ever-evolving job market. Job seekers can enhance their
            skills through verified courses and exams, employers gain access to
            a pool of talented candidates, and tutors/institutions monetize
            their expertise—all powered by the StarkNet blockchain for security,
            transparency, and decentralization.
          </p>
        </div>

        <div className="h-px w-full bg-[#1D1D1C] my-4" />

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-[18px] font-[500] text-[#767776] leading-[21.6px]">
              Other Information
            </h2>
            <ChevronDown className="text-[#767776] w-[24px] h-[24px]" />
          </div>

          <div className="space-y-3 text-gray-300">
            <div className="flex items-center gap-2 text-[14px]">
              <Globe className="w-[12px] h-[12px] text-[#ABABAB]" />
              <span className="font-medium">Website:</span>
              <a
                href="https://www.skillnet.com"
                className="text-[#A8C789] underline hover:[#B5D998]"
              >
                www.skillnet.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#FCFCFC] text-[12px]">
              <Globe className="w-[12px] h-[12px] text-[#ABABAB]" />
              <span className="font-medium text-[#FCFCFC]">Location:</span>
              <span>Santa Monica CA, USA</span>
            </div>
            <div className="flex items-center gap-2 text-[14px]">
              <Globe className="w-[12px] h-[12px] text-[#ABABAB]" />
              <span className="font-medium">Company Size:</span>
              <span>200 - 300 employees</span>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ApplicationModal isOpen={isModalOpen} onClose={toggleModal} />
      )}
    </div>
  );
}
