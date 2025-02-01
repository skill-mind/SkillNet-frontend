import { Bookmark, Clock4 } from "lucide-react";
import img from "@/public/img/Rectangle 8(1).svg";
import Image from "next/image";

function CourseCard(){
    return (
      <div className="border max-w-96 w-[352px] rounded-lg border-[#313130]">
        <Image src={img} alt="course logo" />
        <div className="py-6 px-2">
          <div className="grid grid-cols-[3fr_1fr]">
            <h2 className="text-xl font-medium text-[#FCFCFC]">
              Blockchain Development Bootcamp: Zero to Hero
            </h2>
            <span className="font-normal text-base text-[#D9D9D9] text-end">
              $29.99
            </span>
          </div>
          <h3 className="text-[#BBBBBB] text-base font-medium py-1">
            Satoshi Nakamoto
          </h3>
          <div className="grid grid-cols-[1fr_1fr] mt-6">
            <div className="flex gap-2 items-center text-[#D9D9D9] font-normal text-sm">
              <Clock4 />
              <h3>3 months course</h3>
            </div>
            <Bookmark className="justify-self-end text-[#696969]" />
          </div>
        </div>
      </div>
    );
}

export default CourseCard