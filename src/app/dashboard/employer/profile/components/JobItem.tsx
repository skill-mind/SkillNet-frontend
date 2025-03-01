"use client";

import { Pencil, EllipsisVertical } from "lucide-react";
import Separator from "./Separator";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Dropdown from "./Dropdown";

interface JobItemProps {
  onOpenModal: (section: string) => void;
  isUser: boolean;
}

export default function JobItem({ onOpenModal, isUser }: JobItemProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="mb-5">
      <div className="flex relative items-center justify-between py-4 border-b border-[#313130]">
        <div>
          <p className="text-grayText font-medium text-lg">
            Front-End Developer
          </p>
          <p className="text-sm text-[#999999]">Required skills: JavaScript</p>
          <p className="text-sm text-[#999999] flex items-center space-x-2">
            <span>3 days ago</span>
            <Separator />
            <span>4 applicants</span>
          </p>
        </div>
        <button
          className={cn(
            isUser ? "flex" : "hidden",
            "text-grayText items-center space-x-2"
          )}
          onClick={() => onOpenModal("Job Opening")}
        >
          <span>
            <Pencil size={14} />
          </span>
          <span className="uppercase">Edit</span>
        </button>

        <button
          className={cn(isUser && "hidden", "text-grayText")}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <EllipsisVertical />
        </button>
        {isDropdownOpen && <Dropdown />}
      </div>
      <div className="mt-3 space-y-2">
        <p className="text-[#D9D9D9]">
          We are seeking a highly skilled and detail-oriented Quality Assurance
          Manager to lead and manage our QA team. In this role, you will be
          responsible for ensuring that our products and services meet the
          highest standards of quality and reliability. You will develop and
          implement quality assurance strategies, oversee testing processes, and
          collaborate with cross-functional teams to drive continuous
          improvement. As the Quality Assurance Manager, you will play a
          critical role in maintaining customer satisfaction and upholding the
          company’s reputation for excellence. This position requires strong
          leadership, analytical, and problem-solving skills, as well as a deep
          understanding of QA methodologies and best practices.
        </p>
        <button className="border border-[#696969] py-2 px-5 text-grayText">
          More
        </button>
      </div>
    </div>
  );
}
