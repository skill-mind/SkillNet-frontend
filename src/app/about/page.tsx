"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
    return (
      <main className="bg-[#101110]">
        <Navbar />
        <section className="flex justify-center items-center py-10 mt-10">
          <div className="w-full md:w-[1256px] mx-auto flex flex-col items-center gap-6 py-14 px-7 md:py-[100px] md:px-[80px]">
            <h1 className="text-[40px] text-center font-bold uppercase leading-tight h-12 w-full md:w-[331px]">
                About Skillnet
            </h1>
            <p className="md:w-[934px] text-center md:text-wrap md:text-lg leading-6">
                SkillNet is designed to provide a secure, decentralised platform where job seekers can 
                connect with employers, learn new skills, and verify their qualifications through 
                blockchain-based certifications and exam results. By integrating secure exam hosting 
                for institutions and organisations. SkillNet ensures that the credentials issued on 
                the platform are trustworthy and tamper-proof, ultimately empowering users to take 
                control of their careers and learning journeys.
            </p>
            <h4 className="text-2xl font-medium text-[#FCFCFC] pt-2">objectives</h4>
            <p className="md:w-[934px] text-center md:text-wrap md:text-lg leading-6">
                To create a next-generation platform that connects job seekers with employers, while 
                offering a transparent, decentralised education and exam system, with certificates 
                and exam results verified on the blockchain.
            </p>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <div className="w-[1240px] flex flex-col justify-center gap-6">
            <div className="w-[1240px] mx-auto flex flex-row items-center justify-center">
              <div>
                <h4 className="text-2xl leading-7">Goals</h4>
              </div>
            </div>
            <div className="w-[1240px] mx-auto pb-20 flex flex-wrap flex-col md:flex-row items-center justify-center gap-5">
              <div className="w-[326px] md:w-[398px] md:h-[220px] bg-[#101110] border-2 border-[#222220] p-16 pt-10 rounded-md">
                <h4 className="text-[18px] mb-5">
                  1
                </h4>
                <p className="text-[14px]">
                    Enable job seekers to enhance their skills and find personalized career opportunities
                </p>
              </div>
              <div className="w-[326px] md:w-[398px] md:h-[220px] bg-[#101110] border-2 border-[#222220] p-16 pt-10 rounded-md">
                <h4 className="text-[18px] mb-5">
                    2 
                </h4>
                <p className="text-[14px]">
                    Enable job seekers to enhance their skills and find personalized career opportunities
                </p>
              </div>
              <div className="w-[326px] md:w-[398px] md:h-[220px] bg-[#101110] border-2 border-[#222220] p-16 pt-10 rounded-md">
                <h4 className="text-[18px] mb-5">
                    3
                </h4>
                <p className="text-[14px]">
                Facilitate secure, low-fee payments for courses, exams, and certifications through StarkNet blockchain.
                </p>
              </div>
              <div className="w-[326px] md:w-[398px] md:h-[280px] bg-[#101110] border-2 border-[#222220] p-16 pt-10 rounded-md">
                <h4 className="text-[18px] mb-5">
                  4
                </h4>
                <p className="text-[14px]">
                    Issue verifiable blockchain certificates and exam results upon completion 
                    for authenticity and trust.with employers, while offering a transparent, 
                    decentralized education and exam system, with certificates and exam results 
                    verified on the blockchain.
                </p>
              </div>
              <div className="w-[326px] md:w-[398px] md:h-[280px] bg-[#101110] border-2 border-[#222220] p-16 pt-10 rounded-md">
                <h4 className="text-[18px] mb-5">
                    5
                </h4>
                <p className="text-[14px]">
                    Empower tutors and institutions to create and monetize their courses and exams, 
                    helping students and employees gain new skills and certifications.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }