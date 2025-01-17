import Link from "next/link";
import { RaLeway, WorkSans } from "../ui/fonts";


export default function page() {
  return (
    <div
      className={`${WorkSans} w-full  h-full font-light space-y-24 text-[#020402]/80 text-[16px] bg-[#FCFCFC]`}>
      <Header />
      <Main />
    </div>
  );
}

export function Header() {
  return (
    <div className="flex pt-10 justify-center">
      <div className=" space-y-3 w-full md: lg:w-3/5 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold md:text-5xl ">We’re here to help</h1>
        <p className="text-center  leading-5">
          Having any troubles? If our{" "}
          <Link className="text-[#C33BEC] font-bold" href={"/faq"}>
            FAQ section
          </Link>{" "}
          didn’t provide the solution you’re looking for, please submit a
          support ticket. Our team is here to assist you and will respond within
          48 business hours.
        </p>
        <button
          type="button"
          className="py-2 md:py-4 px-4 md:px-8 font-semibold hover:bg-[#bfef8e] rounded-full outline-none bg-[#D0EFB1]">
          Submit a Ticket
        </button>
      </div>
    </div>
  );
}

export function Main() {
  return (
    <div className="space-y-4">
      <h1
        className={`lg:text-[32px] ${RaLeway.className}  font-bold text-center`}>
        Tips for Submitting a Support Ticket
      </h1>
      <div className="flex w-full flex-grow-1 justify-center md:justify-start gap-8 px-10 flex-wrap">
        <div className="p-3 space-y-3 w-[400px] bg-white rounded-xl border-2 border-[#D0EFB1]">
          <h3 className="flex space-x-2">
            <img src="/lucide_pen-line.svg" alt="pen-icon" />
            <span className=" text-xl font-medium">Be Clear and Concise</span>
          </h3>
          <p className="">
            Provide a detailed description of the issue, including the steps
            that led to the problem and any error messages you encountered.
          </p>
        </div>
        <div className="p-3 space-y-3 w-[400px] bg-white rounded-xl border-2 border-[#D0EFB1]">
          <h3 className="flex space-x-2">
            <img src="/ri_screenshot-2-line.svg" alt="pen-icon" />
            <span className=" text-xl font-medium">
              Attach Screenshots or Logs
            </span>
          </h3>
          <p className="">
            Include screenshots, error logs, or files that can help the support
            team understand the issue better.{" "}
          </p>
        </div>
        <div className="p-3 space-y-3 w-[400px] bg-white rounded-xl border-2 border-[#D0EFB1]">
          <h3 className="flex space-x-2">
            <img src="/bx_detail.svg" alt="pen-icon" />
            <span className=" text-xl font-medium">
              Mention Relevant Details
            </span>
          </h3>
          <p className="">
            Provide specific information like course name, or the date/time the
            issue occurred to help narrow down the investigation.
          </p>
        </div>
        <div className="p-3 space-y-3 w-[400px] bg-white rounded-xl border-2 border-[#D0EFB1]">
          <h3 className="flex space-x-2">
            <img src="/fluent_important-12-regular.svg" alt="pen-icon" />
            <span className=" text-xl font-medium">
              Prioritize Your Request
            </span>
          </h3>
          <p className="">
            Clearly indicate the urgency of your issue and its impact on your
            organization or account, so the team can prioritize accordingly.
          </p>
        </div>
        <div className="p-3 space-y-3 w-[400px] bg-white rounded-xl border-2 border-[#D0EFB1]">
          <h3 className="flex space-x-2">
            <img src="/mingcute_user-follow-line.svg" alt="pen-icon" />
            <span className=" text-xl font-medium">Follow Up Respectfully</span>
          </h3>
          <p className="">
            If you haven’t received a response after 48 business hours, you can
            politely follow up with your ticket reference number.
          </p>
        </div>
      </div>
    </div>
  );
}
