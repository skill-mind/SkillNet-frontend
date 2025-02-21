"use client";

import Input from "@/components/Forms/Input";
import TextArea from "@/components/Forms/TextArea";

function ExamPage() {
  return (
    <div className="w-full h-auto flex bg-inherit flex-col p-5">
      <form className="flex flex-col gap-5">
        <div className="md:flex w-full ">
          <div className="flex flex-col w-full md:w-3/5 gap-[20px] ">
            <div className="flex w-full items-stretch">
              <Input
                type="text"
                label="Exam Name"
                name={"examName"}
                placeholder=""
                value=""
                onChange={() => {}}
              />
            </div>
            <div className="">
              <TextArea
                name="examDescription"
                label="Exam Description"
                placeholder={"Write exam description"}
                onChange={() => {}}
                value=""
              />
            </div>
            <div className="flex w-full flex-col items-stretch">
              <label
                className="text-[#9596A0] text-[0.875rem] mb-1"
                htmlFor="Select">
                Exam Type
              </label>
              <select className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[26rem] px-4 py-[0.75rem] rounded-[0.5rem] ">
                <option
                  className="bg-black/90 border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[26rem] px-4 py-[0.75rem] rounded-[0.5rem] "
                  value="SC">
                  Single choice
                </option>
                <option
                  className="bg-black/90 border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[26rem] px-4 py-[0.75rem] rounded-[0.5rem] "
                  value="MC">
                  Multiple choice
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col w-full gap-[24px] ">
            <div className="flex w-full flex-col items-stretch">
              <label
                className="text-[#9596A0] text-[0.875rem] mb-1"
                htmlFor="Select">
                Candidate Eligibility*
              </label>
              <select className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[26rem] px-4 py-[0.75rem] rounded-[0.5rem] ">
                <option
                  className="bg-black/90 border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[26rem] px-4 py-[0.75rem] rounded-[0.5rem] "
                  value="SC">
                  Paid Course
                </option>
                <option
                  className="bg-black/90 border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[26rem] px-4 py-[0.75rem] rounded-[0.5rem] "
                  value="MC">
                  Free course
                </option>
              </select>
            </div>
            <div>
              <label className="text-[#9596A0] text-[0.875rem] mb-1">
                <div> Category</div>
                <div className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[26rem] px-4 py-[0.75rem] rounded-[0.5rem] "></div>
              </label>
            </div>
            <div className="flex w-full flex-col items-stretch">
              <label
                className="text-[#9596A0] text-[0.875rem] mb-1"
                htmlFor="Select">
                Certification*
              </label>
              <select className="bg-transparent border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[26rem] px-4 py-[0.75rem] rounded-[0.5rem] ">
                <option
                  className="bg-black/90 border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[26rem] px-4 py-[0.75rem] rounded-[0.5rem] "
                  value="SC">
                  Yes
                </option>
                <option
                  className="bg-black/90 border-[1px] outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[26rem] px-4 py-[0.75rem] rounded-[0.5rem] "
                  value="MC">
                  No
                </option>
              </select>
            </div>
            <div className="flex w-full items-stretch">
              <Input
                type="text"
                placeholder=""
                label="Exam duration"
                name="Exam Duration"
                value=""
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
        <div>
          <Input type="text" label="Question 1" placeholder="" value="" />
        </div>
      </form>
    </div>
  );
}

export default ExamPage;
