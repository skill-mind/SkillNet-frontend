import { Metadata } from "next";
import Footer from "@/components/Footer";
import InformationCard from "@/components/InformationCard";
import Navbar from "@/components/Navbar";
import { featureCard } from "../utils/data";


export const metadata: Metadata = {
  title: "Code of Ethics",
  description:
    "Learn about SkillNet, a decentralized platform for job seekers and employers.",
  keywords: [
    "SkillNet",
    "decentralized jobs",
    "blockchain certification",
    "secure exams",
  ],
};

export default function CodeOfEthics() {
  return (
    <>
      <Navbar />

      <div className="w-full md:w-[1256px] mx-auto flex flex-col items-center gap-6 py-14 px-7 md:py-[100px] md:px-[80px] mt-10">
        <h1 className="mt-20 text-[40px] text-center font-bold uppercase leading-tight h-12 w-full md:w-[331px] ">
          Code of Ethics
        </h1>
        <p className="text-base font-light text-[#80837E] text-center ">
          Guiding Principles That Define Our Values and Commitments.
        </p>
        <div className="featurecard-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-7 mt-9  ">
          {featureCard.map((data, index) => (
            <InformationCard
              title={data.name}
              description={data.content}
              key={index}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
