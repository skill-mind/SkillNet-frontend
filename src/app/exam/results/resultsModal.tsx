"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { X } from "lucide-react";
import Modalimg from "../../../public/img/resultModal.png";

interface ExamDetails {
  "PASSING SCORE": string;
  DATE: string;
}

interface ExamData {
  title: string;
  details: ExamDetails;
}

interface ResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  examData?: ExamData | null;
}

export default function ResultsModal({ isOpen, onClose, examData }: ResultsModalProps) {
  if (!isOpen || !examData) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center font-sans md:w-[88%] max-sm:w-[95%] md:h-[80%] mx-auto bg-[#2D2E2D]/90 mt-[75px] backdrop-blur-sm z-50">
      <div className="w-[99%] lg:w-[60%] md:[80%] h-[85%] lg:h-[80%] md:h-[80%] bg-[#1A1A1A] text-white rounded-lg shadow-lg p-9 max-w-[90%]">
        <div className="flex items-center mb-6">
          <button onClick={onClose} className="flex items-center text-[#ABABAB] hover:text-white">
            <X size={16} className="mr-2" /> Back
          </button>
        </div>

        <div className="flex gap-4">
          <Image src={Modalimg} alt="Exam Preview" className="w-44 h-44 rounded-md object-cover" />
          <div className="flex-1">
            <h2 className="text-sm md:text-md lg:text-lg font-bold uppercase mb-4">{examData.title}</h2>
            <p className="text-md text-[#ABABAB] font-sans">Name Of Institution</p>
            <p className="text-sm text-[#ABABAB] font-sans">FRONT-END DEVELOPMENT</p>

            <div className="mt-4 space-y-1">
              <p className="flex gap-2 text-sm">
                <span className="text-[#ABABAB] font-sans">STATUS:</span>
                <span>Completed</span>
              </p>
              <p className="flex gap-2 text-sm">
                <span className="text-[#ABABAB] font-sans">PASS SCORE:</span>
                <span>{examData.details["PASSING SCORE"]}</span>
              </p>
              <p className="flex gap-2 text-sm">
                <span className="text-[#ABABAB] font-sans">TIMESTAMP:</span>
                <span>{examData.details.DATE}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <Button className="bg-transparent border border-[#313130] py-6 uppercase">Share</Button>
          <Button className="bg-transparent border border-[#313130] py-6 uppercase">Print</Button>
        </div>
      </div>
    </div>
  );
}
