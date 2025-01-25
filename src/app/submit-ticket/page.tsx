"use client";
import Image from "next/image";
import hexagon from "../../public/img/hexagon.svg";
import { Plus } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SubmitTicket() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  return (
    <>
      <Navbar />
      <div className="relative pt-[150px] md:pt-[200px] lg::pt-[252px] pb-[128px] text-center flex flex-col items-center px-6">
        <Image
          src={hexagon}
          className="absolute top-[-232px] left-[24px] lg:left-[59px] z-[-1]"
          alt=""
        />
        <h1 className="text-2xl md:text-[40px] leading-[48px] text-[#FCFCFC] font-bold mb-3 md:mb-6">
          SUBMIT TICKET
        </h1>
        <p className="text-sm md:text-base md:leading-[22px] text-[#D9D9D9] max-w-[750px]">
          Having any troubles? If our FAQ section didn&apos;t provide the
          solution you&apos;re looking for, please submit a support ticket. Our
          team is here to assist you and will respond within 48 business hours.
        </p>

        <form className="mt-[56px] md:w-[535px] text-left font-workSan flex flex-col gap-y-5">
          <div className="flex flex-col justify-start text-sm leading-6 text-[#696969]">
            <label
              htmlFor=""
              className=" text-[#9596A0] font-workSans mt-[2px]"
            >
              Your Email Address
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 px-3 border-[#252625] placeholder:text-[#696969] border rounded-lg bg-transparent w-full"
              placeholder="Enter email address"
            />
          </div>
          <div className="flex flex-col justify-start text-sm leading-6 text-[#696969]">
            <label htmlFor="" className="text-[#9596A0] font-workSans mt-[2px]">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="py-2 px-3 border-[#252625] placeholder:text-[#696969] border rounded-lg bg-transparent w-full"
              placeholder="Enter subject"
            />
            <p>Choose a reason that best describes your current issue.</p>
          </div>
          <div className="flex flex-col justify-start text-sm leading-6 text-[#696969]">
            <label
              htmlFor=""
              className=" text-[#9596A0] font-workSans mt-[2px]"
            >
              Additional Details
            </label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="py-2 px-3 border-[#252625] placeholder:text-[#696969] border rounded-lg bg-transparent w-full h-[149px]To min-h-[149px] resize-none h-[10em]"
              placeholder="Write your message here..."
            />
            <p>
              For the best help, share details, steps tried, and error
              screenshots.
            </p>
          </div>
          <div className="flex flex-col justify-start text-[#696969] ">
            <label htmlFor="" className="text-[#9596A0] font-workSans mt-[2px]">
              Attachment
            </label>
            <button className="flex justify-center items-center gap-x-2 border-[#252625] border py-[11px] rounded-lg">
              <div className="p-[6px] rounded-full border border-[#A8C789] w-fit text-[#A8C789]">
                <Plus size={10} />
              </div>
              Click to add a file
            </button>
          </div>
          <button className="bg-[#D0EFB1] py-[15px] text-[#0E0F0E] text-base leading-5 font-medium rounded-lg capitalize">
            SUBMIT
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
