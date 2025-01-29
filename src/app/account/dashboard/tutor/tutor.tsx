import Image from "next/image";
import GlobeIcon from "@/public/img/globe.svg";
import CourseAccordion from "@/components/CourseAccordion";
import CourseEnrollCard from "@/components/CourseEnrollCard";

function Tutor() {
  return (
    <div className="flex justify-around font-sans h-full 2xl:h-screen py-10 space-x-5">
      <div className="w-1/2 ">
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold">
            Blockchain Development Bootcamp: Zero to Hero
          </h1>
          <p className="font-light">By Satoshi Nakamoto</p>
          <div className="flex space-x-2 [&_p]:border [&_p]:border-gray-700 [&_p]:rounded-md [&_p]:px-5 [&_p]:py-1 *:cursor-pointer">
            <p className="text-[#ABABAB]">Overview</p>
            <p className="text-[#ABABAB]">Content</p>
            <p className="text-primary">Tutors/Facilitators</p>
          </div>

          <div className="pt-5 space-y-2">
            <p className="font-semibold text-xl">Satoshi Nakamoto</p>
            <div className="flex space-x-10 items-center">
              <p className="flex space-x-1 items-center text-[#D9D9D9]">
                <span>
                  <Image src={GlobeIcon} alt="globe" width={15} height={15} />
                </span>
                <span>24 Videos</span>
              </p>
              <p className="flex space-x-1 items-center text-[#D9D9D9]">
                <span>
                  <Image src={GlobeIcon} alt="globe" width={15} height={15} />
                </span>
                <span>10 Assesments</span>
              </p>
              <p className="flex space-x-1 items-center text-[#D9D9D9]">
                <span>
                  <Image src={GlobeIcon} alt="globe" width={15} height={15} />
                </span>
                <span>5 Articles</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#282827] h-0.5 mt-10"></div>
        <div className="mt-5">
          <CourseAccordion />
          <CourseAccordion />
        </div>
      </div>
      <div className="w-1/3">
        <CourseEnrollCard />
      </div>
    </div>
  );
}

export default Tutor;
