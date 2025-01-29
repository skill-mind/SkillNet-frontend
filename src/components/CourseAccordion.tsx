"use client";

import Image from "next/image";
import VideoIcon from "@/public/img/video.svg";
import AssessmentIcon from "@/public/img/assessment.svg";
import ArticleIcon from "@/public/img/article.svg";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function CourseAccordion() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="bg-[#222220] flex justify-between p-5 mt-5 rounded-md border-2 border-[#282827]">
      <div>
        <div>
          <h1 className="text-xl font-semibold">Blockchain Fundamentals</h1>
          <div className="flex space-x-3 mt-3 items-center *:flex *:items-center *:space-x-1 *:text-sm *:font-light">
            <p>
              <span>
                <Image src={VideoIcon} alt="globe" width={15} height={15} />
              </span>
              <span>3 Videos</span>
            </p>
            <p>
              <span>
                <Image
                  src={AssessmentIcon}
                  alt="globe"
                  width={15}
                  height={15}
                />
              </span>
              <span>1 Assesment</span>
            </p>
            <p>
              <span>
                <Image src={ArticleIcon} alt="globe" width={15} height={15} />
              </span>
              <span>1 Article</span>
            </p>
          </div>
        </div>
        {isExpanded && (
          <div className="mt-5 space-y-2 *:flex *:items-center *:space-x-1 *:text-sm *:font-light">
            <p>
              <span>
                <Image src={VideoIcon} alt="video" width={15} height={15} />
              </span>
              <span>What is Blockchain</span>
            </p>
            <p>
              <span>
                <Image src={VideoIcon} alt="video" width={15} height={15} />
              </span>
              <span>Who created cryptocurrency</span>
            </p>
            <p>
              <span>
                <Image src={ArticleIcon} alt="article" width={15} height={15} />
              </span>
              <span>Satoshi Nakamoto White Paper</span>
            </p>
            <p>
              <span>
                <Image src={VideoIcon} alt="video" width={15} height={15} />
              </span>
              <span>Distributed Database and Ledger</span>
            </p>
            <p>
              <span>
                <Image
                  src={AssessmentIcon}
                  alt="assessment"
                  width={15}
                  height={15}
                />
              </span>
              <span>Assessment</span>
            </p>
          </div>
        )}
      </div>
      <FaChevronDown
        className={cn(
          "transform transition-all duration-300 cursor-pointer w-20",
          isExpanded && "rotate-[180deg]"
        )}
        size={25}
        onClick={() => setIsExpanded(!isExpanded)}
      />
    </div>
  );
}
