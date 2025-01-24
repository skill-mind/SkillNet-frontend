import Link from "next/link";
import { RaLeway, WorkSans } from "../ui/fonts";

export default function page() {
  return (
    <div className="bg-white/5 bg-[url('/DESIGN.svg')] bg-no-repeat  -bg-top">
      <div
        id="helpDesk"
        className={` w-full ${WorkSans.className} text-white h-full   font-light space-y-24 text-[16px]pt-5 pb-10`}>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export function Header() {
  return (
    <div className="flex pt-10 justify-center">
      <div className=" space-y-5 w-full  flex flex-col justify-center items-center">
        <h1 className="text-2xl font-sans font-bold text-white/90 md:text-4xl ">WE'RE HERE TO HELP</h1>
        <p className="text-center text-[#898783] text-xl leading-5">
          Having any troubles? If our{" "}
          <Link className="text-[#C33BEC] font-bold" href={"/faq"}>
            FAQ section
          </Link>{" "}
          didn’t provide the solution you’re looking for, please submit a
          support ticket. <br /> Our team is here to assist you and will respond
          within 48 business hours.
        </p>
        <button
          type="button"
          className="py-2 md:py-4 px-4 md:px-8 font-medium hover:bg-[#A8C789] border border-[#A8C789] text-[#A8C789] hover:text-black rounded-lg transition-all duration-200 outline-none bg-transparent">
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
        className={` lg:text-[24px] font-sans  text-white/90 font-bold text-center`}>
        Tips for Submitting a Support Ticket
      </h1>
      <div className="flex w-fit flex-grow-1 justify-center gap-8 px-10 flex-wrap">
        <div className="p-10 h-[244px] bg-stone-700/5 space-y-5 w-[398px] rounded-lg border border-stone-600/30 ">
          <h1 className=" text-xl  text-white/90 font-medium">Be Clear and Concise</h1>

          <p className="w-[347px] text-[#898783]">
            Provide a detailed description of the issue, including the steps
            that led to the problem and any error messages you encountered.
          </p>
        </div>
        <div className="p-10 h-[244px] bg-stone-700/5 space-y-5 w-[398px] rounded-lg border border-stone-600/30 ">
          <h1 className=" text-xl  text-white/90 font-medium">Attach Screenshots or Logs</h1>

          <p className="w-[347px] text-[#898783]">
            Include screenshots, error logs, or files that can help the support
            team understand the issue better.{" "}
          </p>
        </div>
        <div className="p-10 h-[244px] bg-stone-700/5 space-y-5 w-[398px] rounded-lg border border-stone-600/30 ">
          <h1 className=" text-xl  text-white/90 font-medium">Mention Relevant Details</h1>

          <p className="w-[347px] text-[#898783]">
            Provide specific information like course name, or the date/time the
            issue occurred to help narrow down the investigation.
          </p>
        </div>
        <div className="p-10 h-[244px] bg-stone-700/5 space-y-5 w-[398px] rounded-lg border border-stone-600/30 ">
          <h1 className=" text-xl  text-white/90 font-medium">Prioritize Your Request</h1>

          <p className="w-[347px] text-[#898783]">
            Clearly indicate the urgency of your issue and its impact on your
            organization or account, so the team can prioritize accordingly.
          </p>
        </div>
        <div className="p-10 h-[244px] bg-stone-700/5 space-y-5 w-[398px] rounded-lg border border-stone-600/30 ">
          <h1 className=" text-xl  text-white/90 font-medium">Follow Up Respectfully</h1>

          <p className="w-[347px] text-[#898783]">
            If you haven’t received a response after 48 business hours, you can
            politely follow up with your ticket reference number.
          </p>
        </div>
      </div>
    </div>
  );
}
