import Image from "next/image";
import GlobeIcon from "@/public/img/globe.svg";
import CourseAccordion from "../../components/CourseAccordion";
import CourseEnrollCard from "../../components/CourseEnrollCard";

const TutorFacilitator = () => {
  return (
    <div className="flex justify-evenly font-sans h-full 2xl:h-screen py-10 space-x-5">
      <div className="w-1/2">
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold">
            Blockchain Development Bootcamp: Zero to Hero
          </h1>
          <p className="font-light">By Satoshi Nakamoto</p>
          <div className="pt-5 space-y-2">
            <p className="font-semibold text-xl">Satoshi Nakamoto</p>
            <div className="flex space-x-10 items-center">
              <p className="flex space-x-1 items-center text-[#D9D9D9]">
                <span>
                  <Image
                    src={GlobeIcon}
                    alt="globe-icon"
                    width={15}
                    height={15}
                  />
                </span>
                <span>24 Videos</span>
              </p>
              <p className="flex space-x-1 items-center text-[#D9D9D9]">
                <span>
                  <Image
                    src={GlobeIcon}
                    alt="globe-icon"
                    width={15}
                    height={15}
                  />
                </span>
                <span>10 Assesments</span>
              </p>
              <p className="flex space-x-1 items-center text-[#D9D9D9]">
                <span>
                  <Image
                    src={GlobeIcon}
                    alt="globe-icon"
                    width={15}
                    height={15}
                  />
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
};

export default TutorFacilitator;
