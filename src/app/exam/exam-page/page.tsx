"use client";
import { useState } from "react";
import { ChatBot } from "../components/ChatBox";
import { ExamTimer } from "../components/ExamTimer";
import { ExamQuestions } from "../components/ExamQuestions";
import { questions } from "../components/mockData";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ExamPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  const [finish, setFinish] = useState<boolean>(false);
  const [preview, setPreview] = useState<boolean>(false);
  const [score, setScore] = useState<boolean>(false);

  const handleAnswerSelect = (
    questionIndex: number,
    selectedOption: string
  ) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedOption,
    }));
  };

  const handleFinish = (value: boolean) => {
    setFinish(value);
  };

  const handlePreview = (value: boolean) => {
    setPreview(value);
  };

  const showStart = () => {
    setFinish(false);
    setPreview(false);
    setScore(false);
    setSelectedAnswers({})
  };

  const showFinish = () => {
    setFinish(true);
    setPreview(false);
    setScore(false);
  };

  const showPreview = () => {
    setFinish(false);
    setPreview(true);
    setScore(false);
  };

  const showScore = () => {
    setFinish(false);
    setPreview(false);
    setScore(true);
  };

  const optionAlpha = (value: number) => {
    if (value == 1) {
      return "A";
    }
    if (value == 2) {
      return "B";
    }
    if (value == 3) {
      return "C";
    }
    if (value == 4) {
      return "D";
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;

    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        correctAnswers++;
      }
    });

    const totalQuestions = questions.length;
    const score = (correctAnswers / totalQuestions) * 100;
    return score;
  };
  return (
    <>
      <div className="w-full flex flex-col space-y-6 items-start justify-start min-h-screen h-full py-28 md:py-40 px-2 md:px-16">
        {!score && (
          <>
            {/* Chatbot */}
            <ChatBot />
          </>
        )}
        {!finish && !preview && !score && (
          <div className="w-full flex flex-col space-y-6 items-start justify-start">
            <ExamTimer
              minutes={15}
              onFinish={handleFinish}
              onPreview={handlePreview}
            />
            <div className="w-full flex flex-col divide-y rounded-lg divide-[#313130] border border-[#313130]">
              <div className="w-full p-4 flex items-center justify-start">
                <span className="font-medium text-white text-lg lg:text-xl">
                  Instructor
                </span>
              </div>
              <div className="w-full">
                <ul className="w-full px-8 py-4 flex flex-col items-start justify-start space-y-4 list-disc">
                  <li className="font-normal text-white text-md sm:text-lg px-4">
                    Read the question carefully before selecting your answer.
                  </li>
                  <li className="font-normal text-white text-md sm:text-lg px-4">
                    Select the most correct option.
                  </li>
                </ul>
              </div>
            </div>
            <ExamQuestions
              questions={questions}
              selectedAnswers={selectedAnswers}
              onAnswerSelect={handleAnswerSelect}
              onPreview={handlePreview}
            />
          </div>
        )}
        {preview && !finish && !score && (
          <>
            <div className="w-full flex flex-col divide-y rounded-lg divide-[#313130] border border-[#313130]">
              <div className="w-full p-4 flex items-center justify-start">
                <span className="font-medium text-white text-lg lg:text-xl">
                  Preview
                </span>
              </div>
              <div className="w-full">
                <div className="w-full p-4 flex flex-col items-start justify-start space-y-4">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {questions.map((q, index) => (
                      <div className="w-full col-span-1 flex items-center space-x-4">
                        <label
                          htmlFor="answer"
                          className="font-normal text-white text-md sm:text-lg flex flex-row space-x-4 items-center"
                        >
                          <span>Q{index + 1}.</span>
                          <span>
                            Option{" "}
                            {q.options.indexOf(selectedAnswers[index]) != -1
                              ? optionAlpha(
                                  q.options.indexOf(selectedAnswers[index]) + 1
                                )
                              : "--"}
                          </span>
                        </label>
                        <div className="flex h-7 shrink-0 items-center">
                          <div className="group grid size-5 grid-cols-1">
                            <input
                              id="answer"
                              aria-describedby="answer"
                              name="answer"
                              type="checkbox"
                              checked={
                                q.options.indexOf(selectedAnswers[index]) == -1
                                  ? false
                                  : true
                              }
                              className="col-start-1 row-start-1 appearance-none rounded-md border-[2px] border-[#313130] bg-transparent checked:border-white checked:text-black checked:bg-transparent indeterminate:border-white indeterminate:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:border-[#313130] disabled:bg-[#423410] disabled:checked:bg-[#423410] forced-colors:appearance-auto"
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
                              <path
                                className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                d="M3 7H11"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div className="w-full pt-4 flex flex-row space-x-4 items-center justify-start">
                      <button className="py-2 px-4 md:py-3 md:px-6 flex items-center space-x-2 justify-center rounded-lg border border-[#ABABAB] text-sm md:text-md font-normal text-[#ABABAB]">
                        <div className="flex h-7 shrink-0 items-center">
                          <div className="group grid size-5 grid-cols-1">
                            <input
                              id="answered"
                              aria-describedby="answered"
                              name="answered"
                              type="checkbox"
                              checked={true}
                              className="col-start-1 row-start-1 appearance-none rounded-md border-[2px] border-[#313130] bg-transparent checked:border-white checked:text-black checked:bg-transparent indeterminate:border-white indeterminate:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:border-[#313130] disabled:bg-[#423410] disabled:checked:bg-[#423410] forced-colors:appearance-auto"
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
                              <path
                                className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                d="M3 7H11"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <span>Answered</span>
                      </button>
                      <button className="py-2 px-4 md:py-3 md:px-6 flex items-center space-x-2 justify-center rounded-lg border border-[#ABABAB] text-sm md:text-md font-normal text-[#ABABAB]">
                        <div className="flex h-7 shrink-0 items-center">
                          <div className="group grid size-5 grid-cols-1">
                            <input
                              id="not_answered"
                              aria-describedby="not_answered"
                              name="not_answered"
                              type="checkbox"
                              checked={false}
                              className="col-start-1 row-start-1 appearance-none rounded-md border-[2px] border-[#313130] bg-transparent checked:border-white checked:text-black checked:bg-white indeterminate:border-white indeterminate:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:border-[#313130] disabled:bg-[#423410] disabled:checked:bg-[#423410] forced-colors:appearance-auto"
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
                              <path
                                className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                d="M3 7H11"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <span>Not Answered</span>
                      </button>
                    </div>
                    <div className="w-full pt-4 flex flex-row space-x-4 items-center justify-end">
                      <button
                        onClick={showStart}
                        className="py-2 px-4 md:py-3 md:px-6 flex items-center space-x-2 justify-center rounded-lg border border-[#ABABAB] text-sm md:text-md font-normal text-[#ABABAB]"
                      >
                        <ArrowLeft size={20} />
                        <span>Go Back</span>
                      </button>
                      <button
                        onClick={showFinish}
                        className="py-2 px-4 md:py-3 md:px-6 flex items-center space-x-2 justify-center rounded-lg border border-[#ABABAB] text-sm md:text-md font-normal text-[#ABABAB]"
                      >
                        <span>Submit</span>
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {!preview && finish && !score && (
          <>
            <div className="w-full flex flex-col space-y-6 items-start justify-start">
              {/* confirmation*/}
              <div className="w-full flex flex-col rounded-lg border border-[#313130]">
                <div className="w-full p-4">
                  <p className="font-medium text-white text-md sm:text-lg">
                    Are you sure you want to end the exam?
                  </p>
                </div>
              </div>
              {/*  Once you submit: */}
              <div className="w-full flex flex-col divide-y rounded-lg divide-[#313130] border border-[#313130]">
                <div className="w-full p-4 flex items-center justify-start">
                  <span className="font-medium text-white text-lg lg:text-xl">
                    Once you submit:
                  </span>
                </div>
                <div className="w-full">
                  <ul className="w-full px-8 py-4 flex flex-col items-start justify-start space-y-4 list-disc">
                    <li className="font-normal text-white text-md sm:text-lg px-4">
                      All answered questions will be recorded.
                    </li>
                    <li className="font-normal text-white text-md sm:text-lg px-4">
                      You cannot go back and make changes.
                    </li>
                    <li className="font-normal text-white text-md sm:text-lg px-4">
                      Your final score will be calculated immediately.
                    </li>
                  </ul>
                </div>
              </div>
              {/*  Answering */}
              <div className="w-full flex flex-col divide-y rounded-lg divide-[#313130] border border-[#313130]">
                <div className="w-full p-4 flex items-center justify-start">
                  <span className="font-medium text-white text-lg lg:text-xl">
                    If you still have time left, you can continue answering.
                  </span>
                </div>
                <div className="w-full">
                  <ul className="w-full px-8 py-4 flex flex-col items-start justify-start space-y-4 list-disc">
                    <li className="font-normal text-white text-md sm:text-lg px-4">
                      Click "Yes, Submit Exam" to finalize.
                    </li>
                    <li className="font-normal text-white text-md sm:text-lg px-4">
                      Click "Cancel" to go back.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full pt-8 flex space-x-2 items-center justify-center">
                <button
                  onClick={showPreview}
                  className="text-md px-6 py-3 font-normal text-[#0E0F0E] rounded-lg bg-primary"
                >
                  Cancel
                </button>
                <button
                  onClick={showScore}
                  className="text-md px-6 py-3 font-normal text-[#FFFFFF] rounded-lg bg-[#2D2E2D]"
                >
                  Yes, Submit exam
                </button>
              </div>
            </div>
          </>
        )}
        {!preview && !finish && score && (
          <>
            <div className="w-full flex flex-col space-y-6 mx-auto items-center min-h-[50vh] justify-center h-full">
              <h2 className="text-white text-xl text-center font-medium w-full">
                Thank you for taking Web3 Fundamentals Certification Exam
              </h2>
              <h2 className="text-white text-xl text-center font-medium w-full">
                Your score is: {calculateScore()}/100
              </h2>
              <div className="w-full pt-8 flex space-x-2 items-center justify-center bottom-[10%] absolute">
                <button
                  onClick={showStart}
                  className="text-md px-6 py-3 font-normal text-[#FFFFFF] rounded-lg bg-[#2D2E2D]"
                >
                  FINISH
                </button>
              </div>
            </div>
          </>
        )}
        {!score && (
          <>
            {/* powered by skillnet */}
            <div className="w-full flex flex-col rounded-lg border border-[#313130]">
              <div className="w-full p-4">
                <p className="font-normal text-right text-white text-md sm:text-lg">
                  Powered by SkillNet
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ExamPage;
