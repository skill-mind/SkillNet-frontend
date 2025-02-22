import Image from "next/image";
import { EllipsisVertical } from "lucide-react";
import logo from "../../../../public/logo2black.png";

export const ExamHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <Image src={logo} alt="Logo" width={100} height={40} />
      <span>Candidate Name</span>
      <button className="text-white bg-[#161716] w-[16rem] h-[3rem] rounded-md flex items-center justify-center gap-x-2 hover:text-gray-300">
        Help
        <EllipsisVertical size={24} />
      </button>
    </div>
  );
};