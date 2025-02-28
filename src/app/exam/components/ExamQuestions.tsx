"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface ExamQuestionsProps {
  questions: Question[];
  selectedAnswers: { [key: number]: string };
  onAnswerSelect: (questionIndex: number, selectedOption: string) => void;
  onPreview: (value: boolean) => void;
}

export const ExamQuestions = ({
  questions,
  selectedAnswers,
  onAnswerSelect,
  onPreview,
}: ExamQuestionsProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handleOptionChange = (option: string) => {
    onAnswerSelect(currentQuestionIndex, option);
  };

  const handlePreview = (value: boolean) => {
    onPreview(value);
  };

  return (
    <>
      <div className="w-full flex flex-col divide-y rounded-lg divide-[#313130] border border-[#313130]">
        <div className="w-full p-4 flex items-center justify-start">
          <span className="font-medium text-white text-lg lg:text-xl">
            Questions {currentQuestionIndex + 1}/{questions.length}
          </span>
        </div>
        <div className="w-full p-4">
          <p className="font-normal text-white text-md sm:text-lg">
            {currentQuestion.question}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col divide-y rounded-lg divide-[#313130] border border-[#313130]">
        <div className="w-full p-4 flex items-center justify-start">
          <span className="font-medium text-white text-lg lg:text-xl">
            Options
          </span>
        </div>
        <div className="w-full">
          <div className="w-full p-4 flex flex-col items-start justify-start space-y-4">
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-4 w-full">
                <div className="flex h-7 shrink-0 items-center">
                  <div className="group grid size-5 grid-cols-1">
                    <input
                      id={`answer-${index}`}
                      aria-describedby={`answer-${index}`}
                      name="answer"
                      type="radio"
                      checked={selectedAnswers[currentQuestionIndex] === option}
                      onChange={() => handleOptionChange(option)}
                      className="col-start-1 row-start-1 appearance-none rounded-md border-[2px] border-[#313130] bg-transparent checked:border-primary checked:text-black checked:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:border-[#313130] disabled:bg-[#423410] disabled:checked:bg-[#423410] forced-colors:appearance-auto"
                    />
                    <svg
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        className="opacity-0 group-has-[:checked]:opacity-100"
                        d="M3 8L6 11L11 3.5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor={`answer-${index}`}
                  className="font-normal text-white text-md sm:text-lg flex flex-row space-x-4 items-center"
                >
                  <span>{String.fromCharCode(65 + index)}.</span>
                  <span>{option}</span>
                </label>
              </div>
            ))}
            <div className="w-full pt-4 flex flex-row space-x-4 items-center justify-end">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="py-2 px-4 md:py-3 md:px-6 flex items-center space-x-2 justify-center rounded-lg border border-[#ABABAB] text-sm md:text-md font-normal text-[#ABABAB] disabled:opacity-50"
              >
                <ArrowLeft size={20} />
                <span>Previous</span>
              </button>

              <button
                onClick={() => (currentQuestionIndex < (questions.length - 1) ? handleNext() : handlePreview(true))}
                className="py-2 px-4 md:py-3 md:px-6 flex items-center space-x-2 justify-center rounded-lg border border-[#ABABAB] text-sm md:text-md font-normal text-[#ABABAB] disabled:opacity-50"
              >
                <span>{(currentQuestionIndex < (questions.length - 1) ? "Next" : "Preview")}</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
