import { Pencil } from "lucide-react";
import Separator from "./Separator";
import { cn } from "@/lib/utils";

interface ProfileOverviewProps {
  onOpenModal: (section: string) => void;
  isUser: boolean;
}

export default function ProfileOverview({
  onOpenModal,
  isUser,
}: ProfileOverviewProps) {
  return (
    <div>
      <div className="flex justify-between items-center py-4 border-b border-[#313130]">
        <p className="font-semibold text-2xl">Overview</p>
        <button
          className={cn(
            isUser ? "flex" : "hidden",
            "text-grayText items-center space-x-2"
          )}
          onClick={() => onOpenModal("Overview")}
        >
          <span>
            <Pencil size={14} />
          </span>
          <span className="uppercase">Edit</span>
        </button>
      </div>
      <div className="space-y-5 mt-5">
        <div>
          <p className="text-grayText text-lg font-medium">Company Size</p>
          <p className="text-sm">2-10 employees</p>
        </div>
        <div>
          <p className="text-grayText text-lg">Industry</p>
          <p className="text-sm">Blockchain Services</p>
        </div>
        <div>
          <p className="text-grayText text-lg font-medium">Values</p>
          <p className="text-sm flex items-center space-x-2">
            <span>Good work ethics</span>
            <Separator />
            <span>Team Work</span>
          </p>
        </div>
      </div>
    </div>
  );
}
