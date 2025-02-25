"use client";

import Image from "next/image";
import ExamFeedNavbar from "./ExamFeedNavbar";
import Footer from "@/components/Footer";
import examHeroImage from "@/public/examinations.png";

interface ExamCard {
  title: string;
  description: string;
  date: string;
  duration: string;
  registered: number;
  certification: string;
  format: string;
  topics: string[];
  benefits: string[];
}

const examData: ExamCard[] = [
    {
        title: "WEB3 FUNDAMENTALS CERTIFICATION EXAM",
        description: "The Web3 Test Exam is a blockchain-powered assessment designed to evaluate a candidate's understanding of decentralized technologies, smart contracts, and blockchain security. This exam is hosted on StarkNet, ensuring that all results are securely stored on-chain for authenticity and tamper-proof verification.",
        date: "26th Feb, 2025",
        duration: "2h",
        registered: 110,
        certification: "Yes on completion",
        format: "Multiple choice",
        topics: [
          "Blockchain Basics (consensus mechanisms, Layer 1 vs. Layer 2, decentralization)",
          "Smart Contracts (solidity fundamentals, contract security, gas optimization)",
          "DeFi & NFTs (decentralized finance protocols, NFT standards, use cases)"
        ],
        benefits: [
          "Enhance Your Web3 Credentials With A Blockchain-Verified Certificate",
          "Prove Your Skills To Potential Employers And Blockchain Projects",
          "Gain Credibility In The Decentralized Space With Verifiable Results"
        ]
      },
    {
        title: "WEB3 FUNDAMENTALS CERTIFICATION EXAM",
        description: "The Web3 Test Exam is a blockchain-powered assessment designed to evaluate a candidate's understanding of decentralized technologies, smart contracts, and blockchain security. This exam is hosted on StarkNet, ensuring that all results are securely stored on-chain for authenticity and tamper-proof verification.",
        date: "26th Feb, 2025",
        duration: "2h",
        registered: 110,
        certification: "Yes on completion",
        format: "Multiple choice",
        topics: [
          "Blockchain Basics (consensus mechanisms, Layer 1 vs. Layer 2, decentralization)",
          "Smart Contracts (solidity fundamentals, contract security, gas optimization)",
          "DeFi & NFTs (decentralized finance protocols, NFT standards, use cases)"
        ],
        benefits: [
          "Enhance Your Web3 Credentials With A Blockchain-Verified Certificate",
          "Prove Your Skills To Potential Employers And Blockchain Projects",
          "Gain Credibility In The Decentralized Space With Verifiable Results"
        ]
      },
];

const ExamCard = ({ exam }: { exam: ExamCard }) => {
  return (
    <div className="bg-[#161716] rounded-lg p-6 text-[#FCFCFC]">
      <h2 className="text-xl font-bold mb-4">{exam.title}</h2>
      <p className="text-[#ABABAB] mb-8 text-sm leading-relaxed">
        {exam.description}
      </p>

            {/* Section Divider */}
            <div className="h-[1px] bg-[#313130] mb-8" />
      
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex gap-2 text-sm">
          <span className="text-[#ABABAB]">DATE:</span>
          <span>{exam.date}</span>
        </div>
        <div className="flex gap-2 text-sm">
          <span className="text-[#ABABAB]">DURATION:</span>
          <span>{exam.duration}</span>
        </div>
        <div className="flex gap-2 text-sm">
          <span className="text-[#ABABAB]">REGISTERED CANDIDATES:</span>
          <span>{exam.registered}</span>
        </div>
        <div className="flex gap-2 text-sm">
          <span className="text-[#ABABAB]">CERTIFICATION:</span>
          <span>{exam.certification}</span>
        </div>
        <div className="flex gap-2 text-sm">
          <span className="text-[#ABABAB]">FORMAT:</span>
          <span>{exam.format}</span>
        </div>
      </div>

            {/* Section Divider */}
            <div className="h-[1px] bg-[#313130] mb-8" />

      <div className="mb-8">
        <h3 className="text-[#ABABAB] text-sm mb-3">TOPICS COVERED:</h3>
        <ul className="list-disc pl-5 text-sm space-y-2">
          {exam.topics.map((topic, index) => (
            <li key={index} className="text-[#FCFCFC]">{topic}</li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-[#ABABAB] text-sm mb-3">WHY TAKE THIS EXAM?</h3>
        <ul className="list-disc pl-5 text-sm space-y-2">
          {exam.benefits.map((benefit, index) => (
            <li key={index} className="text-[#FCFCFC]">{benefit}</li>
          ))}
        </ul>
      </div>

      <button className="w-full py-3 border border-[#D0EFB1] rounded-lg hover:bg-[#D0EFB1] hover:text-[#000000] transition-colors uppercase">
        Register
      </button>
    </div>
  );
};

const ExamFeedPage = () => {
  return (
    <>
      <ExamFeedNavbar />
      
      <main className="min-h-screen bg-black pt-24">
        {/* Hero Section */}
        <section className="px-[100px]">
          <div className="w-full h-[200px] relative rounded-lg overflow-hidden">
            <Image
              src={examHeroImage}
              alt="Examinations background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-full flex items-end px-16 pb-8">
              <h1 className="text-4xl font-bold text-white">Ongoing examinations</h1>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-[100px] py-8">
          <div className="mx-auto flex justify-between overflow-x-auto pb-4" >
            {["JavaScript", "Data Science", "AI Development", "Frontend", "Cairo", "Solidity", "NextJS"].map((category) => (
              <button
                key={category}
                className="flex flex-col items-start justify-center border border-[#222220] px-6 py-2 bg-[#101110] text-[#FCFCFC] rounded-lg whitespace-nowrap hover:bg-[#313130] transition-colors"
              >
                {category}
                <span className="text-xs text-[#6E6E6E]">6 ongoing exams</span>
              </button>
            ))}
          </div>
        </section>

        {/* Exams Grid */}
        <section className="px-[100px] py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {examData.map((exam, index) => (
            <ExamCard key={index} exam={exam} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ExamFeedPage;