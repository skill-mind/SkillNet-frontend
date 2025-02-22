import { useState, useEffect } from "react";

export const Timer = ({ timeLeft }: { timeLeft: number }) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs} Mins`;
  };

  return <div className="font-bold text-xl">{formatTime(timeLeft)}</div>;
};