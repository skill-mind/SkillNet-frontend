import { CirclePlus } from "lucide-react";
import FormInput from "./FormInput";

export default function EditOverviewForm() {
  return (
    <form>
      <div className="space-y-5">
        <FormInput
          title="Company Name"
          id="companyName"
          placeholder="Enter Your Company name"
        />
        <FormInput
          title="Company Size"
          id="companySize"
          placeholder="Enter Your Company size"
        />

        <FormInput
          title="Industy"
          id="industry"
          placeholder="Enter the industry your company falls under"
        />

        <div className="flex flex-col gap-y-1">
          <label htmlFor="aboutCompany" className="text-[#BBBBBB] space-x-1">
            <span>About</span>
            <span className="text-red-500">*</span>
          </label>
          <textarea
            name="aboutCompany"
            id="aboutCompany"
            placeholder="Write about your company here"
            className="bg-transparent w-full h-32 outline-none border border-[#252625] p-2 rounded-md resize-none"
          ></textarea>
          <p className="text-sm text-[#BBBBBB]">
            For the best help, share details, steps tried, and error
            screenshots.
          </p>
        </div>
        <div>
          <p className="text-sm text-[#9596A0]">
            Values (asides from the skills, select attributes the company hold
            in high esteem)
          </p>
          <button className="flex justify-center items-center space-x-1 w-full p-2 border border-[#252625] rounded-md">
            <span className="text-[#A8C789]">
              <CirclePlus />
            </span>
            <span className="text-[#696969]">Add Value</span>
          </button>
        </div>
        <button className="rounded-md w-full p-2 bg-primary text-black mt-3">
          Save
        </button>
      </div>
    </form>
  );
}
