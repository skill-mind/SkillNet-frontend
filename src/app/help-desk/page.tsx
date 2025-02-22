import { Metadata } from "next";
import Link from "next/link";
import design from "@/public/design.svg";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { tips } from "../utils/data";
import InformationCard from "@/components/InformationCard";

export const metadata: Metadata = {
  title: "Help Desk",
  description:
    "Learn about SkillNet, a decentralized platform for job seekers and employers.",
  keywords: [
    "SkillNet",
    "decentralized jobs",
    "blockchain certification",
    "secure exams",
  ],
};

export default function page() {
  return (
    <>
      <Navbar />
      <div className={` pt-[160px]`}>
        <Image
          className="absolute -top-[50px] left-0 sm:left-5 md:left-10 -z-10 w-[90%] sm:w-auto max-w-full object-contain"
          src={design}
          alt="design"
          width={900}
          height={500}
          priority
        />
        <div
          id="helpDesk"
          className={` w-full font-sans text-white h-full   font-light space-y-24 text-[16px] pt-5 pb-10`}
        >
          <div className="flex pt-10 justify-center">
            <div className=" space-y-5 w-full  flex flex-col justify-center items-center">
              <h1 className="text-2xl font-sans font-bold text-white/90 md:text-4xl ">
                WE&#39;RE HERE TO HELP
              </h1>
              <p className="text-center px-4  text-[#898783] text-sm sm:text-base md:text-xl leading-5">
                Having any troubles? If our FAQ section didn&#39;t provide the
                solution you&#39;re looking for, please submit a support ticket
                <br /> Our team is here to assist you and will respond within 48
                business hours.
              </p>
              <Link href="/submit-ticket">
                <button
                  type="button"
                  className="py-2 md:py-4 px-2 md:px-8 font-medium hover:bg-[#A8C789] border border-[#A8C789] text-[#A8C789] hover:text-black rounded-lg transition-all duration-200 outline-none bg-transparent"
                >
                  Submit a Ticket
                </button>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h1
              className={` lg:text-[24px] font-sans  text-white/90 font-bold text-center`}
            >
              Tips for Submitting a Support Ticket
            </h1>
            <div className="flex w-fit justify-center gap-4 sm:gap-6 md:gap-8 px-6 sm:px-10 flex-wrap">
              {tips.map((quality, index) => (
                <InformationCard
                  title={quality.title}
                  description={quality.description}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
