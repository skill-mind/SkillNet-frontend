"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveLeft, MessageCircle } from "lucide-react";
import HeaderBG from "../../../public/img/resultBgImg.png";
import ResultsModal from "./resultsModal"; // Import the modal component
import { ChatBot } from "../components/ChatBox";

// Define TypeScript types
interface ExamDetails {
    DATE: string;
    DURATION: string;
    "REGISTERED CANDIDATES": string;
    CERTIFICATION: string;
    "PASSING SCORE": string;
    FORMAT: string;
}

interface ExamData {
    title: string;
    status: "Pass" | "Failed";
    statusColor: string;
    description: string;
    details: ExamDetails;
    image: string;
}

// Define an array of exams
const results: ExamData[] = [
    {
        title: "WEB3 FUNDAMENTALS CERTIFICATION EXAM",
        status: "Pass",
        statusColor: "text-[#A8C789] border border-[#3B3B3A]",
        description:
            "The Web3 Test Exam is a blockchain-powered assessment designed to evaluate a candidate's understanding of decentralized technologies, smart contracts, and blockchain security. This exam is hosted on SkillNet, ensuring that all results are securely stored on-chain for authenticity and tamper-proof verification.",
        details: {
            DATE: "29th Feb, 2025",
            DURATION: "1hr",
            "REGISTERED CANDIDATES": "120",
            CERTIFICATION: "Yes on completion",
            "PASSING SCORE": "70%",
            FORMAT: "Multichoice",
        },
        image: "/exam-image.jpg",
    },
    {
        title: "WEB3 FUNDAMENTALS CERTIFICATION EXAM",
        status: "Failed",
        statusColor: "text-[#C78989] border border-[#3B3B3A]",
        description:
            "The Web3 Test Exam is a blockchain-powered assessment designed to evaluate a candidate's understanding of decentralized technologies, smart contracts, and blockchain security. This exam is hosted on SkillNet, ensuring that all results are securely stored on-chain for authenticity and tamper-proof verification.",
        details: {
            DATE: "09th Feb, 2024",
            DURATION: "1hr",
            "REGISTERED CANDIDATES": "120",
            CERTIFICATION: "Yes on completion",
            "PASSING SCORE": "70%",
            FORMAT: "Multichoice",
        },
        image: "/exam-image.jpg",
    },
];

export default function ResultsPage() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedExam, setSelectedExam] = useState<ExamData | null>(null);

    const handleViewResults = (exam: ExamData) => {
        setSelectedExam(exam);
        setIsModalOpen(true);
    };

    // Function to close modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-[#0F0F0F] text-[#FCFCFC] px-4 sm:px-8 lg:px-20">
            <main className="mx-auto px-4 py-8">
                <div className="mb-8 overflow-hidden rounded-lg my-20 relative">
                    <div className="absolute inset-0 top-40 -left-[86%] flex items-center justify-center z-10">
                        <h1 className="text-4xl font-semibold font-ubuntu bg-gradient-to-r from-[#FCFCFC] via-[#FCFCFC] to-transparent bg-clip-text text-transparent">Results</h1>
                    </div>
                    <Image src={HeaderBG} alt="Results table" width={1000} height={200} className="w-full object-cover" />
                </div>

                <div className="mb-8 flex items-center justify-between">
                    <ChatBot />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {results.map((exam, index) => (
                        <div key={index} className="rounded-lg bg-[#161716] p-6">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-[#FFFFFF] font-sans">{exam.title}</h2>
                                <span className={`rounded-md px-3 py-1 text-xs font-medium ${exam.statusColor}`}>
                                    {exam.status}
                                </span>
                            </div>

                            <p className="mb-6 text-sm text-[#FFFFFF] leading-5 border-b-2 pb-8 border-[#252625] font-sans">
                                {exam.description}
                            </p>

                            <div className="mb-6 grid gap-2">
                                {Object.entries(exam.details).map(([key, value], idx) => (
                                    <div key={idx} className="flex gap-2 py-2">
                                        <span className="text-xs text-[#6E6E6E] font-medium font-sans">{key}:</span>
                                        <span className="text-xs text-[#FFFFFFCC]/80">{value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t-2 border-[#252625]">
                                <Button
                                    className="w-full border border-[#D0EFB1] bg-transparent mt-7 py-5 font-ubuntu"
                                    onClick={() => handleViewResults(exam)}
                                >
                                    VIEW RESULTS
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add the modal component with the selected exam data */}
                <ResultsModal isOpen={isModalOpen} onClose={handleCloseModal} examData={selectedExam} />
            </main>
        </div>
    );
}
