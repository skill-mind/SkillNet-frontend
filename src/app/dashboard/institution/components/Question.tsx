import { CustomCheckbox } from "./CustomCheckBox";
import { MoveLeft, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuestionProps {
  question: string;
  options: string[];
  selectedOption: number | null;
  handleOptionSelect: (optionIndex: number) => void;
  currentQuestion: number;
  totalQuestions: number;
  handlePrevious: () => void;
  handleNext: () => void;
}

export const Question = ({
  question,
  options,
  selectedOption,
  handleOptionSelect,
  currentQuestion,
  totalQuestions,
  handlePrevious,
  handleNext,
}: QuestionProps) => {
  return (
    <div className="mb-6 w-full border border-[#313130] rounded-[0.5rem] py-[1.5rem]">
      <p className="font-semibold text-xl ml-[1.5rem] mb-4">Options</p>
      <div className="w-full border border-[#313130]" />
      <div className="space-y-3 font-normal text-xl ml-[1.5rem] mt-4 relative">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80"
            onClick={() => handleOptionSelect(index)}
          >
            <span className="text-white/90">{`${String.fromCharCode(
              65 + index
            )}. ${option}`}</span>
            <CustomCheckbox checked={selectedOption === index} />
          </div>
        ))}

        {/* Next and Previous Buttons */}
        <div className="flex gap-x-4 absolute bottom-0 right-[1.5rem] font-normal text-[1rem]">
          <button
            className={cn(
              "px-4 py-2 rounded-[0.5rem] flex gap-x-4 items-center transition-colors",
              currentQuestion === 0
                ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                : "bg-transparent text-[#ABABAB] border border-[#ABABAB]"
            )}
            disabled={currentQuestion === 0}
            onClick={handlePrevious}
          >
            <MoveLeft size={24} /> Previous
          </button>
          <button
            className={cn(
              "px-4 py-2 rounded-[0.5rem] flex gap-x-4 items-center transition-colors",
              currentQuestion === totalQuestions - 1
                ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                : "bg-transparent text-[#ABABAB] border border-[#ABABAB]"
            )}
            disabled={currentQuestion === totalQuestions - 1}
            onClick={handleNext}
          >
            Next <MoveRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};