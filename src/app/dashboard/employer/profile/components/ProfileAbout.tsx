import { cn } from "@/lib/utils";
import { Pencil } from "lucide-react";

interface ProfileAboutProps {
  onOpenModal: (section: string) => void;
  isUser: boolean;
}

export default function ProfileAbout({
  isUser,
  onOpenModal,
}: ProfileAboutProps) {
  return (
    <div className="space-y-3 ">
      <div className="flex justify-between items-center py-4 border-b border-[#313130]">
        <p className="font-semibold text-2xl">About</p>
        <button
          onClick={() => onOpenModal("Overview")}
          className={cn(
            !isUser ? "hidden" : "flex",
            "text-grayText items-center space-x-2"
          )}
        >
          <span>
            <Pencil size={14} />
          </span>
          <span className="uppercase">Edit</span>
        </button>
      </div>
      <div>
        <p className="text-sm">
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
      </div>
    </div>
  );
}
