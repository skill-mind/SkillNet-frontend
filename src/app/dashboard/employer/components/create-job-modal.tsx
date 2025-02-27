"use client";

import { X, ArrowLeft, Asterisk } from "lucide-react";

const formGroupsData = [
  { label: "Job Title", type: "input" },
  { label: "Job Type", type: "input" },
  { label: "Level", type: "input" },
  { label: "Deadline", type: "input" },
  { label: "Description", type: "textarea" },
  { label: "Key Responsibilities", type: "textarea" },
  { label: "Minimum Requirements", type: "textarea" },
];

// Define the type for form data
type FormGroupProps = {
  formData: { label: string; type: "input" | "textarea" };
};

const FormGroup = ({ formData }: FormGroupProps) => {
  return (
    <div>
      <label className="flex items-center">
        {formData.label} <Asterisk color="red" size={15}/>
      </label>
      {formData.type === "input" ? (
        <input type="text" />
      ) : (
        <textarea />
      )}
    </div>
  );
};

export default function CreateJobModal() {
  return (
    <div className="border border-white p-[24px]">
      {/* Header */}
      <div>
        <div className="gap-2 flex items-center">
          <ArrowLeft />
          <div className="text-[24px] !font-[600]">Create Job Openings</div>
        </div>
        <X />
      </div>

      {/* Form */}
      <form>
        <div>
          {formGroupsData.map((formData, index) => (
            <FormGroup key={index} formData={formData} />
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
