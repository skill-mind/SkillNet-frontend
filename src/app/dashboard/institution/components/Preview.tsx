import { CustomCheckbox } from "./CustomCheckBox";
import { MoveLeft, MoveRight } from "lucide-react";

interface PreviewProps {
  questions: {
    id: number;
    selectedOption: number | null;
  }[];
  setShowPreview: (show: boolean) => void;
  setShowEndDialog: (show: boolean) => void;
}

export const Preview = ({
  questions,
  setShowPreview,
  setShowEndDialog,
}: PreviewProps) => {
  return (
    <div className="w-full border border-[#313130] rounded-[0.5rem] py-[1.5rem]">
      <h2 className="text-xl font-semibold mb-4 ml-[1.5rem]">Preview</h2>
      <div className="w-full border border-[#313130]" />
      <div className="grid grid-cols-5 gap-y-6 px-[1.5rem] mt-4">
        {questions.map((question, index) => (
          <div key={index} className="flex items-center gap-x-4">
            <span className="text-[#ABABAB] w-10">Q{index + 1}.</span>
            <span className="w-20">
              {question.selectedOption !== null
                ? `Option ${question.selectedOption + 1}`
                : "Option 1"}
            </span>
            <CustomCheckbox checked={question.selectedOption !== null} />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-8 px-[1.5rem]">
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-2 bg-transparent text-[#ABABAB] border border-[#ABABAB] rounded-[0.5rem] px-4 py-2">
            <CustomCheckbox checked={true} />
            <span className="text-[#ABABAB]">Answered</span>
          </div>
          <div className="flex items-center gap-x-2 bg-transparent text-[#ABABAB] border border-[#ABABAB] rounded-[0.5rem] px-4 py-2">
            <CustomCheckbox checked={false} />
            <span className="text-[#ABABAB]">Not answered</span>
          </div>
        </div>
        <div className="flex gap-x-4">
          <button
            onClick={() => setShowPreview(false)}
            className="flex items-center gap-x-2 bg-transparent text-[#ABABAB] border border-[#ABABAB] rounded-[0.5rem] px-4 py-2"
          >
            <MoveLeft size={20} />
            Go back
          </button>
          <button
            onClick={() => {
              setShowPreview(false);
              setShowEndDialog(true);
            }}
            className="flex items-center gap-x-2 bg-transparent text-[#ABABAB] border border-[#ABABAB] rounded-[0.5rem] px-4 py-2"
          >
            Submit
            <MoveRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};