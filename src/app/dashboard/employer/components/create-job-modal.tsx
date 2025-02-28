"use client";

import { useState } from "react";
import { X, ArrowLeft, Asterisk, CirclePlus } from "lucide-react";

interface CreateJobModalProps {
  createJobModalOpen: boolean;
  setCreateJobModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const formGroupsData: {
  label: string;
  type: "input" | "textarea";
  placeHolder: string;
}[] = [
  {
    label: "Job Title",
    type: "input",
    placeHolder: "e.g Quality Assurance Manager",
  },
  { label: "Job Type", type: "input", placeHolder: "e.g Hybrid" },
  { label: "Level", type: "input", placeHolder: "e.g Senior Level" },
  { label: "Deadline", type: "input", placeHolder: "Input delivery deadline" },
  {
    label: "Description",
    type: "textarea",
    placeHolder: "Give a description of the project",
  },
  {
    label: "Key Responsibilities",
    type: "textarea",
    placeHolder:
      "Input the key responsibilities that will be handled in this role",
  },
  {
    label: "Minimum Requirements",
    type: "textarea",
    placeHolder: "Input minimum requirements for this role",
  },
];

type FormGroupProps = {
  formData: { label: string; type: "input" | "textarea"; placeHolder: string };
  // For list fields:
  listData?: { items: string[]; current: string };
  handleListInputChange?: (label: string, value: string) => void;
  handleListKeyDown?: (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    label: string
  ) => void;
};

const FormGroup = ({
  formData,
  listData,
  handleListInputChange,
  handleListKeyDown,
}: FormGroupProps) => {
  const isListField = ["Key Responsibilities", "Minimum Requirements"].includes(
    formData.label
  );

  if (isListField) {
    return (
      <div className="mt-6">
        <label className="flex items-center mb-1 gap-1">
          <div className="text-[#BBBBBB] text-[14px] font-[400]">
            {formData.label}
          </div>
          <Asterisk color="red" size={15} />
        </label>
        {/* Container styled to mimic a textarea */}
        <div className="border border-[#252625] rounded-lg p-2 min-h-[100px] bg-transparent ">
          {listData && listData.items.length > 0 && (
            <ul className="m-0 pl-5 list-disc text-white">
              {listData.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          <textarea
            rows={3}
            value={listData?.current || ""}
            onChange={(e) =>
              handleListInputChange &&
              handleListInputChange(formData.label, e.target.value)
            }
            onKeyDown={(e) =>
              handleListKeyDown && handleListKeyDown(e, formData.label)
            }
            placeholder={formData.placeHolder}
            className="w-full border-none outline-none bg-transparent resize-none placeholder:text-[#696969] placeholder:text-[14px]"
          />
        </div>
      </div>
    );
  }

  // For non-list fields, simply render an input or a textarea.
  return (
    <div className="mt-6">
      <label className="flex items-center mb-1 gap-1">
        <div className="text-[#BBBBBB] text-[14px] font-[400]">
          {formData.label}
        </div>
        <Asterisk color="red" size={15} />
      </label>
      {formData.type === "input" ? (
        <input
          placeholder={formData.placeHolder}
          type="text"
          className="border border-[#252625] outline-none bg-transparent rounded-lg p-2 w-full placeholder:text-[#696969] placeholder:text-[14px]"
        />
      ) : (
        <textarea
          rows={4}
          placeholder={formData.placeHolder}
          className="border border-[#252625] outline-none bg-transparent rounded-lg p-2 w-full"
        />
      )}
    </div>
  );
};

export const CreateJobModal: React.FC<CreateJobModalProps> = ({
  setCreateJobModalOpen,
}) => {
  // For list fields, we store both the list items and the current input text.
  const [listData, setListData] = useState<{
    [key: string]: { items: string[]; current: string };
  }>({
    "Key Responsibilities": { items: [], current: "" },
    "Minimum Requirements": { items: [], current: "" },
  });

  const handleListInputChange = (label: string, value: string) => {
    setListData((prev) => ({
      ...prev,
      [label]: { ...prev[label], current: value },
    }));
  };

  const handleListKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    label: string
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const currentText = listData[label].current.trim();
      if (currentText) {
        setListData((prev) => ({
          ...prev,
          [label]: {
            items: [...prev[label].items, currentText],
            current: "",
          },
        }));
      }
    } else if (e.key === "Backspace" && listData[label].current === "") {
      // If current input is empty, remove the last item from the list.
      setListData((prev) => {
        const newItems = [...prev[label].items];
        newItems.pop();
        return {
          ...prev,
          [label]: {
            ...prev[label],
            items: newItems,
          },
        };
      });
    }
  };

  // State for skills
  const [skills, setSkills] = useState<string[]>(["JavaScript", "Front-End"]);
  const [skillInput, setSkillInput] = useState<string>("");

  const handleAddSkill = () => {
    const trimmedSkill = skillInput.trim();
    if (trimmedSkill && !skills.includes(trimmedSkill)) {
      setSkills((prev) => [...prev, trimmedSkill]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills((prev) => prev.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="border w-full mx-auto my-4 overflow-y-scroll !max-w-[761px] border-[#40403E] p-6 bg-[#161716] rounded-[12px] [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ArrowLeft />
          <div className="text-2xl font-semibold">Create Job Openings</div>
        </div>
        <div onClick={() => setCreateJobModalOpen(false)}>
          <X />
        </div>
      </div>

      {/* Form */}
      <form>
        <div>
          {formGroupsData.map((formData, index) => {
            if (
              ["Key Responsibilities", "Minimum Requirements"].includes(
                formData.label
              )
            ) {
              return (
                <FormGroup
                  key={index}
                  formData={formData}
                  listData={listData[formData.label]}
                  handleListInputChange={handleListInputChange}
                  handleListKeyDown={handleListKeyDown}
                />
              );
            }
            return <FormGroup key={index} formData={formData} />;
          })}
        </div>
        <div className="mt-4">
          <label className="flex items-center mb-1 gap-1">
            <div className="text-[#BBBBBB] text-[14px] font-[400]">Skills</div>
            <Asterisk color="red" size={15} />
            <div className="text-[#9596A0] text-[12px]">
              (input all the required skills for this role)
            </div>
          </label>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex rounded-[4px] border border-[#313130] gap-2 items-center py-2 px-3"
              >
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="cursor-pointer"
                >
                  <X size={20} color="#40403E" />
                </button>
                <span className="text-[#EAEDE7] text-[14px] font-[400]">
                  {skill}
                </span>
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder="e.g: TypeScript"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            className="border border-[#252625] outline-none bg-transparent rounded-lg p-2 w-full mt-2 placeholder:text-[#696969] placeholder:text-[14px]"
          />
          <button
            type="button"
            onClick={handleAddSkill}
            className="flex items-center gap-2 justify-center border border-[#252625] rounded-lg w-full py-2 px-3 text-[#696969] mt-4 bg-transparent"
          >
            <CirclePlus color="#A8C789" />
            <div>Add Skill</div>
          </button>
          <input
            type="submit"
            value="POST"
            className="text-black bg-[#D0EFB1] w-full min-h-[48px] rounded-lg font-bold mt-6 placeholder:text-[#696969] placeholder:text-[14px]"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateJobModal;
