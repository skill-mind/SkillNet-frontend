import { Plus } from "lucide-react";
import JobItem from "./JobItem";
import { cn } from "@/lib/utils";

interface JobOpeningProps {
  onOpenModal: (section: string) => void;
  isUser: boolean;
}

export default function JobOpenings({ onOpenModal, isUser }: JobOpeningProps) {
  return (
    <div>
      <div className="flex justify-between items-center py-4 border-b border-[#313130]">
        <p className="font-semibold text-2xl">Job Openings</p>
        <button
          className={cn(
            isUser ? "flex" : "hidden",
            "text-grayText items-center space-x-2"
          )}
          onClick={() => onOpenModal("Job Opening")}
        >
          <Plus size={20} />
        </button>
      </div>
      <JobItem onOpenModal={onOpenModal} isUser={isUser} />
      <JobItem onOpenModal={onOpenModal} isUser={isUser} />
    </div>
  );
}
