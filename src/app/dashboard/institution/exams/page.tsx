"use client"
import { useState, useEffect } from "react";
import { ExamHeader } from "../components/ExamHeader";
import { Timer } from "../components/Timer";
import { Question } from "../components/Question";
import { Preview } from "../components/Preview";
import { EndExamDialog } from "../components/EndExamDialog";

interface Question {
  id: number;
  question: string;
  options: string[];
  selectedOption: number | null;
  correctAnswer: number;
}

const Exam = () => {
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [showEndDialog, setShowEndDialog] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const [questions, setQuestions] = useState<Question[]>(
    Array(25)
      .fill(null)
      .map((_, i) => ({
        id: i + 1,
        question: `What is the Question for  ${i + 1} ?`,
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        selectedOption: null,
        correctAnswer: Math.floor(Math.random() * 4),
      }))
  );

  useEffect(() => {
    if (timeLeft <= 0 || examSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, examSubmitted]);

  const handleOptionSelect = (optionIndex: number) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].selectedOption = optionIndex;
    setQuestions(updatedQuestions);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((question) => {
      if (question.selectedOption === question.correctAnswer) {
        correctAnswers++;
      }
    });
    return Math.round((correctAnswers / questions.length) * 100);
  };

  const handleEndExam = () => {
    const calculatedScore = calculateScore();
    setScore(calculatedScore);
    setExamSubmitted(true);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  if (examSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white p-6">
        <ExamHeader />
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <h2 className="mb-4 text-center">
            Thank you for taking Web3 Fundamentals Certification Exam
          </h2>
          <p className="mb-8">Your score is: {score}/100</p>
          <button className="px-6 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition-colors">
            FINISH
          </button>
        </div>
      </div>
    );
  }

  if (showEndDialog) {
    return (
      <EndExamDialog
        setShowEndDialog={setShowEndDialog}
        handleEndExam={handleEndExam}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#101110] text-white p-6">
      <div className="w-full mx-auto">
        <ExamHeader />
        {!showPreview ? (
          <div className="">
            <div className="flex justify-between items-center mb-6 w-full border border-[#313130] rounded-[0.5rem] p-[1.5rem]">
              <Timer timeLeft={timeLeft} />
              <div className="flex gap-2">
                <button
                  className="bg-[#D0EFB1] text-[#0E0F0E] font-normal text-[1rem] w-[6.6rem] h-[2.7rem] flex justify-center items-center rounded-[0.5rem]"
                  onClick={() => setShowPreview(true)}
                >
                  Preview
                </button>
                <button
                  className="bg-[#C78989] text-[#0E0F0E] font-normal text-[1rem] w-[7.4rem] h-[2.7rem] flex justify-center items-center rounded-[0.5rem]"
                  onClick={() => setShowEndDialog(true)}
                >
                  End exam
                </button>
              </div>
            </div>

            <div className="mb-6 w-full border border-[#313130] rounded-[0.5rem] py-[1.5rem]">
              <h3 className="text-lg mb-4 ml-[1.5rem]">Instructions</h3>
              <div className="w-full border border-[#313130]" />
              <ul className="space-y-2 ml-[2.5rem] mt-4">
                <li>
                  • Read the question carefully before selecting your answer.
                </li>
                <li>• Select the most correct option.</li>
              </ul>
            </div>

            <div className="mb-6 w-full border border-[#313130] rounded-[0.5rem] py-[1.5rem]">
              <h3 className="mb-4 ml-[1.5rem] font-semibold text-xl">
                Question {currentQuestion + 1}/25
              </h3>
              <div className="w-full border border-[#313130]" />
              <p className="mt-4 ml-[1.5rem] font-normal text-xl">
                {questions[currentQuestion].question}
              </p>
            </div>

            <Question
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              selectedOption={questions[currentQuestion].selectedOption}
              handleOptionSelect={handleOptionSelect}
              currentQuestion={currentQuestion}
              totalQuestions={questions.length}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
            />
          </div>
        ) : (
          <Preview
            questions={questions}
            setShowPreview={setShowPreview}
            setShowEndDialog={setShowEndDialog}
          />
        )}

        <div className="flex justify-end mt-4 mb-6 w-full border border-[#313130] rounded-[0.5rem] p-[1.5rem]">
          <span className="text-[#ABABAB] text-[1rem] font-normal">
            Powered by SkillNet
          </span>
        </div>
      </div>
    </div>
  );
};

export default Exam;