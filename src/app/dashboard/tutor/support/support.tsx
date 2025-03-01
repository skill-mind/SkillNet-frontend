import React, { JSX } from "react";
import { useState } from "react";

// Define interfaces for our data structures
interface SponsorItem {
  question: string;
  answer: string;
}

interface SponsorItemsProps {
  question: string;
  answer: string;
  isOpen: boolean;
  handleToggle: () => void;
}

const sponserData: SponsorItem[] = [
  {
    question: 'Course Creation Guide (How to structure, upload, and edit courses)',
    answer: `1. Structuring Your Course

Define Objectives: Identify target audience & learning outcomes.  
Create Outline: Divide into modules (Introduction, Core Lessons, Assessments, Conclusion).  
Choose Formats: Video lectures, PDFs, quizzes, assignments, and discussion forums.  
`
  },
  {
    question: 'Earnings & Payments (How earnings are calculated & withdrawal process)',
    answer: `1. Structuring Your Course

Define Objectives: Identify target audience & learning outcomes.  
Create Outline: Divide into modules (Introduction, Core Lessons, Assessments, Conclusion).  
Choose Formats: Video lectures, PDFs, quizzes, assignments, and discussion forums.  `
  },
  {
    question: 'Student Engagement Tips (How to improve student interaction & ratings)',
    answer: `1. Structuring Your Course

Define Objectives: Identify target audience & learning outcomes.  
Create Outline: Divide into modules (Introduction, Core Lessons, Assessments, Conclusion).  
Choose Formats: Video lectures, PDFs, quizzes, assignments, and discussion forums.  `
  },
  {
    question: ' Technical Issues (Troubleshooting course uploads, media files, etc.)',
    answer: `1. Structuring Your Course

Define Objectives: Identify target audience & learning outcomes.  
Create Outline: Divide into modules (Introduction, Core Lessons, Assessments, Conclusion).  
Choose Formats: Video lectures, PDFs, quizzes, assignments, and discussion forums.  `
  },
  {
    question: ' Blockchain Integration Help (Understanding on-chain payments & certifications)',
    answer: `1. Structuring Your Course

Define Objectives: Identify target audience & learning outcomes.  
Create Outline: Divide into modules (Introduction, Core Lessons, Assessments, Conclusion).  
Choose Formats: Video lectures, PDFs, quizzes, assignments, and discussion forums.  `
  },
];

function SponsorItems({ question, answer, isOpen, handleToggle }: SponsorItemsProps): JSX.Element {
  return (
    <div className=" border-b border-[#2D2E2D] my-2 mx-5">
      <div className="flex py-1 px-5  sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
      <div className="flex-1">
        <p className="text-[14px] text-white font-medium mt-1">
          {question}
        </p>
      </div>
      <div className="flex gap-2 align-center text-right sm:self-center">
        <button onClick={handleToggle} className="font-medium border-[1px] border-zinc-600 rounded-[48px] py-[6px] px-[12px] h-fit w-fit gap-[10px] hover:cursor-pointer">
          {isOpen ? "Collapse" : "Expand"}
        </button>
      </div>
    </div>
      {isOpen && (
        <div className="w-full mt-2 mb-2 px-6">
          <p>{answer}</p>
        </div>
      )}
    </div>
    
  );
}

function Support(): JSX.Element {
  const [open, setOpen] = useState<number | null>(null);

  function handleToggle(index: number): void {
    setOpen(open === index ? null : index);
  }

  return (
    <div>
      <h1 className="text-[#FCFCFC] text-400 font-normal p-[15px]">Support</h1>

      <div className="">
        {sponserData.map((item, i) => (
          <SponsorItems 
            key={i} 
            question={item.question} 
            answer={item.answer} 
            isOpen={open === i} 
            handleToggle={() => handleToggle(i)} 
          />
        ))}
      </div>

      <h1 className="text-[#FCFCFC] text-400 font-normal p-[20px]">Action History Table</h1>

      <div className="px-3 overflow-x-auto">
        <table className="w-full">
          <thead className="h-[48px]">
            <tr className="text-left text-sm bg-[#161716] p-10 box-border border-zinc-800 justify-between">
              <th className="font-normal px-4 py-3">SN</th>
              <th className="font-normal py-[17px] px-[9px]">
                Date & Time
              </th>
              <th className="font-normal py-[17px] px-[9px]">
                Ticket ID
              </th>
              <th className="font-normal py-[17px] px-[9px]">
                Issue category
              </th>
              <th className="font-normal py-[17px] px-[9px]">
                Status
              </th>
              <th className="font-normal py-[17px] px-[9px]">
                Last Update
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b h-[68px] border-zinc-800 justify-between">
              <td className="py-[17px] px-[9px] whitespace-nowrap">
                1
              </td>
              <td className="py-[17px] px-[9px] whitespace-nowrap">
                25th Dec, 2025
              </td>
              <td className="py-[17px] px-[9px] whitespace-nowrap">
                #12345
              </td>
              <td className="py-[17px] px-[9px] whitespace-nowrap">
                payment issue
              </td>
              <td className="py-[17px] text-zinc-500 px-[9px] whitespace-nowrap">
                resolved
              </td>
              <td className="py-[17px] px-[9px] whitespace-nowrap">
                2025-02-19
              </td>
            </tr>
            <tr className="border-b h-[68px] border-zinc-800 justify-between">
              <td className="py-[17px] px-[9px] whitespace-nowrap">
                2
              </td>
              <td className="py-[17px] px-[9px] whitespace-nowrap">
                25th Dec, 2025
              </td>
              <td className="py-[17px] px-[9px] whitespace-nowrap">
                #67890
              </td>
              <td className="py-[17px] px-[9px] whitespace-nowrap">
                Course update error
              </td>
              <td className="py-[17px] text-zinc-500 px-[9px] whitespace-nowrap">
                Pending
              </td>
              <td className="py-[17px] px-[9px] whitespace-nowrap">
                2025-02-17
              </td>
            </tr>
            <tr className="border-b h-[68px] border-zinc-800 justify-between">
              <td className="py-[17px] px-[9px] whitespace-nowrap">
                3
              </td>
              <td className="py-[17px] px-[9px] whitespace-nowrap">
                25th Dec, 2025
              </td>
              <td className="py-[17px] px-[9px] whitespace-nowrap">
                #24680
              </td>
              <td className="py-[17px] px-[9px] whitespace-nowrap">
                Student dispute
              </td>
              <td className="py-[17px] text-zinc-500 px-[9px] whitespace-nowrap">
                Completed
              </td>
              <td className="py-[17px] px-[9px] whitespace-nowrap">
                2025-02-16
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Support;