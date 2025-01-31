import { Bookmark, Clock } from "lucide-react";
//import banner from "../../../../public/course-banner.png";
import Image from "next/image";

function CourseCard() {
  return (
    <div className="w-[352px] border border-[#313130]">
      <div className="w-full h-[249px]">
        <Image
          src="/img/course-banner.png"
          width={200}
          height={200}
          alt="hey"
        />
      </div>
      <div className="py-6 px-2">
        <div className="flex justify-between">
          <div className="font-medium max-w-[286px]">
            <h3 className="mb-2 text-xl leading-6  text-[#FCFCFC]">
              Blockchain Development Bootcamp: Zero to Hero
            </h3>
            <h5 className="text-base leading-5 text-[#BBBBBB]">
              Satoshi Nakamoto
            </h5>
          </div>
          <h6 className="text-base leading-7 text-[#D9D9D9]">$29.99</h6>
        </div>
        <div className="flex justify-between items-center mt-12">
          <h3 className="flex gap-x-2 items-center text-xs leading-7 text-[#D9D9D9]">
            <Clock size={16} /> 3 months course
          </h3>
          <button className="cursor-pointer">
            <Bookmark size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
