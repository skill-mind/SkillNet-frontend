import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Ensure you have lucide-react installed
import { Work_Sans } from "next/font/google";

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],

});
const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is SkillNet?",
      answer:
        "SkillNet is a blockchain-powered platform that connects job seekers with employers, and allows tutors and institutions to create, sell, and host certified courses and exams.",
    },
    {
      question: "How do I create an account?",
      answer:
        "Use your Bravoo or Argent wallet address to securely create an account on the platform.",
    },
    {
      question: "Are certifications verifiable?",
      answer:
        "Yes, all certifications and exam results are stored on the StarkNet blockchain, making them tamper-proof and easily verifiable.",
    },
    {
      question: "What payment methods are supported?",
      answer:
        "Payments for courses and certifications are processed securely through StarkNet’s decentralized payment system.",
    },
    {
      question: "Can institutions host their own exams?",
      answer:
        "Yes, verified institutions can create and host their own exams, with results securely stored on the blockchain.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-[140px] px-6 flex justify-center">
      <div className="lg:w-[892px] flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className={`font-bold text-[22px] lg:text-[40px] leading-[47px] text-white font-workSans mb-6 uppercase ${work_sans.className}`}>
            Frequently Asked Questions
          </h1>
          <p className="font-normal text-[17px] lg:text-[24px] text-[#EAEDE7] leading-8">
            Quick answers to questions you might have about SkillNet. Can’t find
            what you are looking for?{" "}
            <span className="text-[#A8C789]">Contact Us</span>
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-12 flex flex-col gap-y-[20px] px-9  text-[#EAEDE7] w-[400px] lg:w-full">
          {faqs.map((faq, index:number) => (
            <div
              key={index}
              className="border border-[#595958] p-6 rounded-md cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex  gap-2 lg:gap-10 items-center">

              <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />

                <h5 className="text-base lg:text-lg leading-[21px] font-medium">
                  {faq.question}
                </h5>
            
              </div>
              {openIndex === index && (
                <p className="text-[14px] text-[#898783] leading-[17px] mt-4">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
