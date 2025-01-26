'use client'

import Link from "next/link";
import design from "../public/img/design.svg";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function page() {
  const tips = [
    {
      title: "Be Clear and Concise",
      body: " Provide a detailed description of the issue, including the steps that led to the problem and any error messages you encountered.",
    },
    {
      title: "Attach Screenshots or Logs",
      body: "Include screenshots, error logs, or files that can help the support team understand the issue better.",
    },
    {
      title: "Mention Relevant Details",
      body: "Provide specific information like course name, or the date/time the issue occurred to help narrow down the investigation.",
    },
    {
      title: "Prioritize Your Request",
      body: "Clearly indicate the urgency of your issue and its impact on your organization or account, so the team can prioritize accordingly.",
    },
    {
      title: "Follow Up Respectfully",
      body: "If you haven’t received a response after 48 business hours, you can politely follow up with your ticket reference number.",
    },
  ];
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
          className={` w-full font-sans text-white h-full   font-light space-y-24 text-[16px]pt-5 pb-10`}>
          <div className="flex pt-10 justify-center">
            <div className=" space-y-5 w-full  flex flex-col justify-center items-center">
              <h1 className="text-2xl font-sans font-bold text-white/90 md:text-4xl ">
                WE&#39;RE HERE TO HELP
              </h1>
              <p className="text-center text-[#898783] text-lg sm:text-xl leading-5">
                Having any troubles? If our{" "}
                <Link className="text-[#C33BEC] font-bold" href={"/"}>
                  FAQ section
                </Link>{" "}
                didn’t provide the solution you’re looking for, please submit a
                support ticket. <br /> Our team is here to assist you and will
                respond within 48 business hours.
              </p>
              <Link href="/submit-ticket">
              <button
                type="button"
                className="py-2 md:py-4 px-2 md:px-8 font-medium hover:bg-[#A8C789] border border-[#A8C789] text-[#A8C789] hover:text-black rounded-lg transition-all duration-200 outline-none bg-transparent">
                Submit a Ticket
              </button>
              </Link>
       
            </div>
          </div>
          <div className="space-y-4">
            <h1
              className={` lg:text-[24px] font-sans  text-white/90 font-bold text-center`}>
              Tips for Submitting a Support Ticket
            </h1>
            <div className="flex w-fit flex-grow-1 justify-center gap-8 px-10 flex-wrap">
              {tips &&
                tips.map((tip) => (
                  <div
                    key={tip.title}
                    className="p-10 min-h-[244px] bg-stone-700/5 space-y-5 max-w-[398px] rounded-lg border border-stone-600/30 ">
                    <h1 className=" text-xl  text-white/90 font-medium">
                      {tip.title}
                    </h1>

                    <p className="max-w-[347px] text-[#898783]">{tip.body}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
