import { CirclePlus } from "lucide-react";
import FormInput from "./FormInput";

export default function JobOpeningsForm() {
  return (
    <form>
      <div className="space-y-5">
        <FormInput
          title="Job Title"
          id="jobTitle"
          placeholder="eg Quality Assurance Manager"
        />

        <FormInput title="Job Type" id="jobType" placeholder="eg Hybrid" />
        <FormInput title="Level" id="level" placeholder="eg Senior Level" />
        <FormInput
          title="Deadline"
          id="deadline"
          placeholder="input delivery deadline"
        />

        <div className="flex flex-col gap-y-1">
          <label htmlFor="description" className="text-[#BBBBBB] space-x-1">
            <span>Description</span>
            <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Give a description of the project"
            className="bg-transparent w-full outline-none border border-[#252625] p-2 rounded-md resize-none"
          ></textarea>
        </div>
        <FormInput
          title="Key Responsibilities"
          id="responsibilities"
          placeholder="Input the key responsibilities that will be handled in this role"
          className="border-none"
        />
        <FormInput
          title="Minimium Requirements"
          id="requirements"
          placeholder="Input minimum requirements for this role"
        />
        <div className="space-y-3">
          <FormInput
            title="Skills (input all the required skills for this role)"
            id="skills"
            placeholder="eg Typescript"
          />
          <button className="flex justify-center items-center space-x-1 w-full p-2 border border-[#252625] rounded-md">
            <span className="text-[#A8C789]">
              <CirclePlus />
            </span>
            <span className="text-[#696969]">Add Skill</span>
          </button>
        </div>
        <button className="rounded-md w-full p-2 bg-primary text-black mt-3">
          Post
        </button>
      </div>
    </form>
  );
}
