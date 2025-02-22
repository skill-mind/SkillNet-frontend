
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { skillNetGoals } from "../utils/data";
import InformationCard from "@/components/InformationCard";


export const metadata: Metadata = {
  title: "About",
  description: "Learn about SkillNet, a decentralized platform for job seekers and employers.",
  keywords: ["SkillNet", "decentralized jobs", "blockchain certification", "secure exams"],
};


export default function About() {

 
  return (
    <main className="bg-[#101110]">
      <Navbar />
      <section className="flex justify-center items-center py-10 mt-10 px-4">
        <div className="w-full max-w-[1256px] mx-auto flex flex-col items-center gap-6 py-10 md:py-[100px] px-4 md:px-[80px]">
          <h1 className="text-[28px] md:text-[40px] text-center font-bold uppercase leading-tight w-full md:w-[331px]">
            About Skillnet
          </h1>
          <p className="w-full max-w-[600px] pt-5 sm:max-w-[934px] mx-auto text-left sm:text-justify lg:text-center text-sm md:text-lg leading-8 md:leading-10 text-[#ABABAB] px-4">

            SkillNet is designed to provide a secure, decentralised platform
            where job seekers can connect with employers, learn new skills, and
            verify their qualifications through blockchain-based certifications
            and exam results. By integrating secure exam hosting for
            institutions and organisations, SkillNet ensures that the
            credentials issued on the platform are trustworthy and tamper-proof,
            ultimately empowering users to take control of their careers and
            learning journeys.
          </p>

          <h4 className="text-xl md:text-2xl font-medium text-[#FCFCFC] pt-2">
            Objectives
          </h4>
          <p className="w-full max-w-[934px] text-center text-sm md:text-lg leading-6 text-[#ABABAB]">
            To create a next-generation platform that connects job seekers with
            employer&s, while offering a transparent, decentralised education and
            exam system, with certificates and exam results verified on the
            blockchain.
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center px-4">
        <div className="w-full max-w-[1240px] flex flex-col justify-center gap-6">
          <div className="w-full mx-auto flex flex-row items-center justify-center">
            <h4 className="text-xl md:text-2xl leading-7">Goals</h4>
          </div>
          <div className="w-full max-w-[1240px] mx-auto pb-20 flex flex-wrap flex-col md:flex-row justify-center gap-5">
            {skillNetGoals.map((quality, index) => (
              <InformationCard
                title={`${index + 1}`}
                description={quality.description}
                key={quality.description}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
