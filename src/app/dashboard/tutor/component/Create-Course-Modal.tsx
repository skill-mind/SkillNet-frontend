// components/CreateCourseModal.js
import { useState } from "react";
import { PlusIcon } from "lucide-react";

interface CreateCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateCourseModal: React.FC<CreateCourseModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-60 z-50">
      <div className="bg-black border border-[#2D2E2D] rounded-[8px] p-6 w-[700px] max-w-full">
        <div className="flex justify-end  mb-4">
          <button onClick={onClose} className="text-[#FAFAFA]">
            ✕
          </button>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-[14px] font-normal text-[#9596A0] leading-[24px]">
              Course title*
            </label>
            <input
              type="text"
              placeholder="Design made simple"
              className="w-full mt-1 p-2 rounded-[8px] border border-[#2D2E2D] bg-transparent text-[#FAFAFA] text-[14px] font-normal leading-[24px]"
            />
          </div>

          <div>
            <label className="text-[14px] font-normal leading-[24px] text-[#9596A0]">
              Access*
            </label>
            <select className="w-full mt-1 p-2 rounded-[8px] border border-[#2D2E2D] bg-transparent text-[#FAFAFA] text-[14px] font-normal leading-[24px]">
              <option className="bg-[#9596A0] text-[#FAFAFA]">
                Paid Course
              </option>
              <option className="bg-[#9596A0] text-[#FAFAFA]">
                Free Course
              </option>
            </select>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            <div className="w-full">
              <label className="text-[14px] font-normal leading-[24px] text-[#9596A0]">
                Course description
              </label>
              <textarea
                placeholder="Write your cover letter"
                className="w-full mt-1 p-2 h-[240px] rounded-[8px] border border-[#2D2E2D] bg-transparent text-[#FAFAFA]"
              />
            </div>

            <div className="w-full space-y-4">
              <div>
                <label className="text-[14px] font-normal leading-[24px] text-[#9596A0]">
                  Skills you will gain
                </label>
                <div className="w-full mt-1 p-2 rounded-[8px] border border-[#2D2E2D] bg-transparent flex gap-2">
                  <button className="bg-black border rounded-[8px] border-[#2D2E2D] text-[#FAFAFA] text-xs px-2 py-1">
                    Button x
                  </button>
                  <button className="bg-black border border-[#2D2E2D]  text-[#FAFAFA] text-xs px-2 py-1 rounded-[8px]">
                    Add
                  </button>
                </div>
              </div>

              <div>
                <label className="text-[14px] font-normal leading-[24px] text-[#9596A0]">
                  Certification*
                </label>
                <select className="w-full mt-1 p-2 rounded-[8px] border border-[#2D2E2D] bg-transparent text-[#FAFAFA]">
                  <option className="bg-[#9596A0] text-[#FAFAFA] text-[14px] font-normal leading-[24px]">
                    Yes
                  </option>
                  <option className="bg-[#9596A0] text-[#FAFAFA] text-[14px] font-normal leading-[24px]">
                    No
                  </option>
                </select>

                <div className="w-full mt-2 p-2 rounded-[8px] border border-[#2D2E2D] bg-transparent flex items-center justify-between">
                  <button className="bg-black border border-[#2D2E2D] text-[#FAFAFA] text-xs px-2 py-1 rounded-[8px]">
                    Add file <span className="text-[10px]">✕</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourseModal;
