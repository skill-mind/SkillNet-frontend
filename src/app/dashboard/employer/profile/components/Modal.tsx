import { MoveLeft, X } from "lucide-react";
import EditOverviewForm from "./EditOverviewForm";
import JobOpeningsForm from "./JobOpeningsForm";

interface ModalProps {
  activeSection: string | null;
  onCloseModal: () => void;
}

export default function Modal({ activeSection, onCloseModal }: ModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex justify-center items-center py-5 overflow-auto"
      onClick={onCloseModal}
    >
      <div
        className="bg-[#161716] border border-[#1D1D1C] rounded-md p-5 w-full md:w-[70%] max-h-[90vh] overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center py-4 border-b border-[#313130]">
          <p className="flex items-center space-x-2">
            <span className="cursor-pointer" onClick={onCloseModal}>
              <MoveLeft size={18} />
            </span>
            <span>Edit {activeSection}</span>
          </p>
          <X onClick={onCloseModal} className="cursor-pointer" />
        </div>

        <div className="mt-3">
          {activeSection === "Overview" && <EditOverviewForm />}
          {activeSection === "Job Opening" && <JobOpeningsForm />}
        </div>
      </div>
    </div>
  );
}
