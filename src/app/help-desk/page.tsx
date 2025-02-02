'use client'

import Link from "next/link";
import design from "@/public/design.svg";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { tips } from "../utils/data";
import InformationCard from "@/components/InformationCard";


export default function page() {
 
  return (
    <>
      <Navbar />
      <div className={` pt-[160px]`}>
        <Image
          className="absolute -top-[50px]  left-10 -z-10"
          src={design}
          alt="design"
          width={900}
          height={500}
        />
        <div
          id="helpDesk"
          className={` w-full font-sans text-white h-full   font-light space-y-24 text-[16px]pt-5 pb-10`}
        >
          <div className="flex pt-10 justify-center">
            <div className=" space-y-5 w-full  flex flex-col justify-center items-center">
              <h1 className="text-2xl font-sans font-bold text-white/90 md:text-4xl ">
                WE&#39;RE HERE TO HELP
              </h1>
              <p className="text-center text-[#898783] text-lg sm:text-xl leading-5">
                Having any troubles? If our{" "}
                {/* <Link className="text-[#C33BEC] font-bold" href={"/"}> */}
                FAQ section
                {/* </Link>{" "} */}
                didn’t provide the solution you’re looking for, please submit a
                support ticket. <br /> Our team is here to assist you and will
                respond within 48 business hours.
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
            <div className="flex w-fit flex-grow-1 justify-center gap-8 px-10 flex-wrap">
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
