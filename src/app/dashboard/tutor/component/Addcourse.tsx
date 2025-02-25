import { PlusIcon } from "lucide-react";

export const Addcourse = () => {
  return (
    <div className="h-[240px] bg-[#161716] p-[24px] rounded-[8px] gap-[15px] flex flex-col justify-between items-center">
      <h4 className="text-center font-[400] text-[14px] ">
        Create a new course, publish for new learners, and earn an income.
      </h4>
      <div className="h-[72px] w-[72px] bg-[#2D2E2D] flex items-center justify-center rounded-full">
        <PlusIcon className="w-[24px] h-[24px]" />
      </div>
      <button className=" flex justify-center items-center gap-4 font-[400] text-[16px] w-[231px] h-[48px] bg-[#2D2E2D] py-[12px] px-[12px] rounded-[8px]">
        <PlusIcon className="w-[16px] h-[16px] rounded-[8px]" /> CREATE NEW
        COURSE
      </button>
    </div>
  );
};
