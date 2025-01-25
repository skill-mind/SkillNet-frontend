"use client";
import astronaut from "../public/img/astronaut.svg";
import hexagon from "../public/img/hexagonn.svg";
import Image from "next/image";
import { skillnetQualities } from "./utils/data";
import InformationCard from "@/components/InformationCard";
import { ChevronDown, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <section className="h-[806px] pt-[204px] flex justify-center text-center relative">
          <Image
            src={hexagon}
            className="absolute top-[9px] right-[-28px] z-[-1]"
            alt=""
          />
          <Image
            src={hexagon}
            className="absolute top-[389px] left-[-384px] z-[-1]"
            alt=""
          />
          <div>
          <h1 className="text-[100px] leading-[90px] font-bold mb-6 text-[#EAEDE7]">
            Empowering <br /> Careers, Verified on <br />
            <span className="text-[#A8C789]">Blockchain</span>
          </h1>
          <p className="text-2xl leading-8 mb-12 text-[#EAEDE7]">
            Upskill, certify, and connect with top employers on SkillNet—a
            blockchain-powered <br /> platform for job seekers, employers,
            tutors, and institutions.
          </p>
          <button className="border border-[#A8C789] rounded-lg text-[#A8C789] py-4 w-[196px]">
            Get started
          </button>
          </div>
        
        </section>
        <section className="bg-[#121312] py-20 px-[100px] text-[#EAEDE7]">
          <div className="flex items-center gap-6">
            <h4 className="text-[40px] pr-6 border-r-4 border-[#222220] leading-[48px] max-w-[455px] font-bold">
              What Makes SkillNet Effective?
            </h4>
            <p className="text-2xl leading-7 text-[#80837E]">
              Empower your career with verified skills, blockchain-backed trust,
              and seamless connections to opportunities.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap flex-row items-center justify-center gap-5">
            {skillnetQualities.map((quality) => (
              <InformationCard
                title={quality.title}
                description={quality.description}
                key={quality.id}
              />
            ))}
          </div>
        </section>
        <div className="h-[140px] bg-[#0e0f0e]"></div>
        <section className="relative flex justify-end py-[80px] px-[100px] bg-[#080808]">
          <Image
            src={astronaut}
            className="absolute top-0 left-[100px]"
            alt="#"
          />
          <div className="relative z-10 py-[113px]">
            <h3 className="text-[40px] leading-[47px] font-workSans font-bold mb-12">
              Find Top Talents With <br /> Confidence
            </h3>
            <div className="flex flex-col justify-between gap-5 text-[#EAEDE7]">
              <div className="w-[450px] bg-[#121311] py-[12px] px-[25px] rounded-lg flex items-center gap-2">
                <div className="bg-[#EAEDE7] w-[30px] h-[30px] rounded-full"></div>
                <p className="text-base leading-5 font-normal">
                  Post job listings and attract qualified candidates.
                </p>
              </div>
              <div className="w-[450px] bg-[#121311] py-[12px] px-[25px] rounded-lg flex items-center gap-2">
                <div className="bg-[#EAEDE7] w-[30px] h-[30px] rounded-full"></div>
                <p className="text-base leading-5 font-normal">
                  Verify candidates credentials instantly.
                </p>
              </div>
              <div className="w-[450px] bg-[#121311] py-[12px] px-[25px] rounded-lg flex items-center gap-2">
                <div className="bg-[#EAEDE7] w-[30px] h-[30px] rounded-full"></div>
                <p className="text-[14px]">
                  Host custom exams to assess applicants skills.
                </p>
              </div>
            </div>
            <button className="bg-[#0E0F0E] border border-[#161716] rounded-lg py-3 px-6 mt-12 flex justify-center items-center gap-[10px] text-base leading-5">
              Find out more
              <span>
                <ChevronRight />
              </span>
            </button>
          </div>
        </section>
        <section className="py-[140px] bg-[#0e0f0e]">
          <div className="py-[80px] px-[100px]">
            <h3 className="font-bold text-white text-[40px] leading-[47px] font-workSans mb-12">
              Share Knowledge, Earn Revenue
            </h3>
            <div className="grid grid-cols-3 gap-x-5">

              <div className="bg-[#121312] py-4 px-6 rounded-lg flex items-center gap-2 w-full">
                <div className="bg-[#D9D9D9] w-[30px] h-[30px] rounded-full"></div>
                <p className="text-base leading-5 text-[#DBDBDB] max-w-[300px]">
                  Create and monetize engaging courses.
                </p>
              </div>

              <div className="bg-[#121312] py-4 px-6 rounded-lg flex items-center gap-2 w-full">
                <div className="bg-[#D9D9D9] w-[30px] h-[30px] rounded-full"></div>
                <p className="text-base leading-5 text-[#DBDBDB] max-w-[300px]">
                  Host exams and issue blockchain-verified results.
                </p>
              </div>

              <div className="bg-[#121312] py-4 px-6 rounded-lg flex gap-2 items-center w-full">
                <div className="bg-[#D9D9D9] w-[30px] h-[30px] rounded-full"></div>
                <p className="text-base leading-5 text-[#DBDBDB] max-w-[300px]">
                  Reach a global audience of eager learners and earn revenue for
                  every enrollment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[80px] px-[100px] bg-[#121312]">
          <div className="flex items-center gap-6">
            <h4 className="text-[40px] pr-6 border-r-4 border-[#222220] leading-[48px] max-w-[455px] font-bold">
              How skillnet works
            </h4>
            <p className="text-2xl leading-7 text-[#80837E]">
              Understand how Skillnet operates
            </p>
          </div>
          <div className="grid grid-cols-4 items-center gap-5 mt-12 text-[#595958]">
            <div className="flex flex-col items-start gap-4">
              <span className="text-[40px] leading-[48px] text-[#ACACAC] font-bold">
                1
              </span>
              <div className="border-t border-[#595958] pt-6">
                <h5 className="mb-4 text-[18px] font-medium leading-[22px] text-[#40403E]">
                  Build your profile
                </h5>
                <p className="text-[14px] leading-[17px]">
                  Create a professional profile and showcase your skills.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <span className="text-[40px] leading-[48px] text-[#ACACAC] font-bold">
                2
              </span>
              <div className="border-t border-[#595958] pt-6">
                <h5 className="mb-4 text-[18px] font-medium leading-[22px] text-[#40403E]">
                  Upskill and Certify
                </h5>
                <p className="text-[14px] leading-[17px]">
                  Enroll in courses and earn blockchain-verified certifications.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <span className="text-[40px] leading-[48px] text-[#ACACAC] font-bold">
                3
              </span>
              <div className="border-t border-[#595958] pt-6">
                <h5 className="mb-4 text-[18px] font-medium leading-[22px] text-[#40403E]">
                  Connect with Employers
                </h5>
                <p className="text-[14px] leading-[17px]">
                  Find job opportunities and share verified <br /> achievements.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <span className="text-[40px] leading-[48px] text-[#ACACAC] font-bold">
                4
              </span>
              <div className="border-t border-[#595958] pt-6">
                <h5 className="mb-4 text-[18px] font-medium leading-[22px] text-[#40403E]">
                  Grow Professionally
                </h5>
                <p className="text-[14px] leading-[17px]">
                  Gain new skills, get certified, and land your <br /> dream
                  job.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="faqs" className="py-[140px] flex justify-center">
          <div className="w-[892px] flex flex-col justify-center items-center">
            <div className="text-center">
              <h1 className="font-bold text-[40px] leading-[47px] text-white font-workSans mb-6">
                Frequently Asked Questions
              </h1>
              <p className="font-normal text-[24px] leading-8">
                Quick answers to questions you might have about SkillNet. Can’t
                find what you are looking for?{" "}
                <span className="text-[#A8C789]">Contact Us</span>
              </p>
            </div>
            <div className="mt-12 flex flex-col gap-y-[30px] px-9">
              <div className="border border-[#595958] gap-x-5 flex p-6 rounded-md">
                <ChevronDown />
                <div className="w-full flex flex-col gap-5">
                  <h5 className="text-lg leading-[21px] font-medium">
                    What is SkillNet?
                  </h5>
                  <p className="text-[14px] text-[#898783] leading-[17px]">
                    SkillNet is a blockchain-powered platform that connects job
                    seekers with employers, and allows tutors and <br />
                    institutions to create, sell, and host certified courses and
                    exams.
                  </p>
                </div>
              </div>
              <div className="border border-[#595958] gap-x-5 flex p-6 rounded-md">
                <ChevronDown />
                <div className="w-full flex flex-col gap-5">
                  <h5 className="text-lg leading-[21px] font-medium">
                    How do I create an account?
                  </h5>
                  <p className="text-[14px] text-[#898783] leading-[17px]">
                    Use your Bravoo or Argent wallet address to securely create
                    an account on the platform. exams.
                  </p>
                </div>
              </div>
              <div className="border border-[#595958] gap-x-5 flex p-6 rounded-md">
                <ChevronDown />
                <div className="w-full flex flex-col gap-5">
                  <h5 className="text-lg leading-[21px] font-medium">
                    Are certifications verifiable?
                  </h5>
                  <p className="text-[14px] text-[#898783] leading-[17px]">
                    Yes, all certifications and exam results are stored on the
                    StarkNet blockchain, making them tamper-proof and easily
                    verifiable
                  </p>
                </div>
              </div>
              <div className="border border-[#595958] gap-x-5 flex p-6 rounded-md">
                <ChevronDown />
                <div className="w-full flex flex-col gap-5">
                  <h5 className="text-lg leading-[21px] font-medium">
                    What payment methods are supported?
                  </h5>
                  <p className="text-[14px] text-[#898783] leading-[17px]">
                    Payments for courses and certifications are processed
                    securely through StarkNet’s decentralized payment system.
                  </p>
                </div>
              </div>
              <div className="border border-[#595958] gap-x-5 flex p-6 rounded-md">
                <ChevronDown />
                <div className="w-full flex flex-col gap-5">
                  <h5 className="text-lg leading-[21px] font-medium">
                    Can institutions host their own exams?
                  </h5>
                  <p className="text-[14px] text-[#898783] leading-[17px]">
                    Yes, verified institutions can create and host their own
                    exams, with results securely stored on the blockchain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
