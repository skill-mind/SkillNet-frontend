"use client";
import { useState, useEffect } from "react";
interface ExamTimerProps {
  minutes: number;
  onFinish: (value: boolean) => void;
  onPreview: (value: boolean) => void;
}

export const ExamTimer = ({ minutes, onFinish, onPreview }: ExamTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const handleFinish = (value: boolean) => {
    onFinish(value);
  };

  const handlePreview = (value: boolean) => {
    onPreview(value);
  };

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 rounded-lg border border-[#313130] p-4">
      <div className="w-full col-span-1 flex items-center justify-start">
        <span className="font-medium text-white text-lg lg:text-xl">
          {minutes} Mins
        </span>
      </div>
      <div className="w-full col-span-1 flex items-center justify-end md:justify-start lg:justify-center">
        <span className="font-medium text-white text-lg lg:text-xl">
          Timer: {formatTime(timeLeft)}
        </span>
      </div>
      <div className="w-full pt-6 md:pt-0 col-span-2 md:col-span-1 flex space-x-2 items-center justify-end">
        <button onClick={() => handlePreview(true)} className="px-4 py-2 text-sm lg:text-md lg:px-6 lg:py-3 font-normal text-[#0E0F0E] rounded-lg bg-primary">
          Preview
        </button>
        <button onClick={() => handleFinish(true)} className="px-4 py-2 text-sm lg:text-md lg:px-6 lg:py-3 font-normal text-[#0E0F0E] rounded-lg bg-[#C78989]">
          End exam
        </button>
      </div>
    </div>
  );
};
