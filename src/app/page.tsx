"use client";
import astronaut from "../public/img/astronaut.svg";
import Image from "next/image";
import { skillnetQualities } from "./utils/data";
import InformationCard from "@/components/InformationCard";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQ";












export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <section className="h-[806px]  pt-[150px] lg:pt-[204px] flex justify-center text-center ">
          {/* <Image
            src={hexagon}
            className="absolute lg:top-[9px] lg:right-[-28px] lg:z-[-1]"
            alt=""
          /> 

           <Image
            src={hexagon}
            className="absolute top-[389px] left-[-384px] z-[-1]"
            alt=""
          /> */}

{/* <Image
            src={hexagon}
            width={300}
            height={400}
            className="absolute lg:top-[9px] lg:right-[-28px] lg:z-[-1]"
            alt=""
          />  */}
          <div>
            <h1 className=" text-[40px]  lg:text-[100px]  leading-[40px] lg:leading-[90px] font-bold  mb-20 lg:mb-6 text-[#EAEDE7]">
              Empowering <br /> Careers, Verified on <br />
              <span className="text-[#A8C789]">Blockchain</span>
            </h1>
            <div className="flex mt-10 items-center justify-center text-center px-4">
              <p className="text-base text-pretty lg:text-2xl text-[#EAEDE7] max-w-xl">
                Upskill, certify, and connect with top employers on SkillNet a
                blockchain-powered platform for job seekers, employers, tutors,
                and institutions.
              </p>
            </div>

            <button className="mt-20 hover:text-black border border-[#A8C789] hover:bg-[#A8C789] rounded-lg text-[#A8C789] py-4 w-[196px]">
              Get started
            </button>
          </div>
        </section>
        <section className="bg-[#121312] py-20 px-12 text-[#EAEDE7] lg:pb-56">
          <div className="flex flex-col lg:flex items-center gap-6 px">
            <h4 className="text-[40px] pr-6 border-r-4 border-[#222220] leading-[48px] max-w-[555px] font-bold uppercase">
              What Makes SkillNet Effective?
            </h4>
            <p className="lg:text-2xl leading-7 text-[#80837E]">
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
        {/* <div className="h-[140px] bg-[#0e0f0e]"></div> */}
        <section className="  lg:py-[80px] px-6 lg:px-[100px] bg-[#080808]">
          <div className="flex flex-col lg:flex-row  ">
            <div>
              <Image src={astronaut} className="" alt="#" />
            </div>
            <div className=" py-10 lg:py-[113px]">
              <h3 className=" text-[23px]  lg:text-[40px]  leading-[47px] font-workSans font-bold mb-12">
                Find Top Talents With Confidence
              </h3>
              <div className="flex flex-col justify-between gap-5 text-[#EAEDE7]">
                <div className="w-[350px] lg:w-[450px] bg-[#121311] py-[12px] px-[25px] rounded-lg flex items-center gap-2">
                  <div className="bg-[#EAEDE7] w-[30px] h-[30px] rounded-full"></div>
                  <p className="text-base leading-5 font-normal ">
                    Post job listings and attract qualified candidates.
                  </p>
                </div>
                <div className="w-[350px] lg:w-[450px]  bg-[#121311] py-[12px] px-[25px] rounded-lg flex items-center gap-2">
                  <div className="bg-[#EAEDE7] w-[30px] h-[30px] rounded-full"></div>
                  <p className="text-base leading-5 font-normal">
                    Verify candidates credentials instantly.
                  </p>
                </div>
                <div className="w-[350px] lg:w-[450px]  bg-[#121311] py-[12px] px-[25px] rounded-lg flex items-center gap-2">
                  <div className="bg-[#EAEDE7] w-[30px] h-[30px] rounded-full"></div>
                  <p className="text-[14px]">
                    Host custom exams to assess applicants skills.
                  </p>
                </div>
              </div>

              <button className="bg-[#0E0F0E] border border-[#161716] rounded-lg py-3 px-6 mt-12 flex justify-center items-center gap-[10px] text-base leading-5">
                Find out more
                <span>
                  <ArrowRight />
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="lg:py-[140px] bg-[#0e0f0e]">
          <div className="py-[40px] lg:py-[80px] px-4 sm:px-6 lg:px-[100px]">
            <h3 className="font-bold text-white text-center lg:text-[40px] leading-[20px] lg:leading-[47px] font-workSans mb-6 uppercase">
              Share Knowledge, Earn Revenue
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="bg-[#121312] py-4 px-6 rounded-lg flex items-center gap-2 w-full relative">
                <div className="bg-[#D9D9D9] w-[30px] h-[30px] rounded-full relative" />
                <p className="text-sm leading-5 text-[#DBDBDB] max-w-[300px] ml-3 lg:ml-9">
                  Create and monetize engaging courses.
                </p>
              </div>

              <div className="bg-[#121312] py-4 px-6 rounded-lg flex items-center gap-2 w-full relative">
                <div className="bg-[#D9D9D9] w-[30px] h-[30px] rounded-full relative" />
                <p className="text-sm leading-5 text-[#DBDBDB] max-w-[300px] ml-3 lg:ml-9">
                  Host exams and issue blockchain-verified results.
                </p>
              </div>

              <div className="bg-[#121312] py-4 px-6 rounded-lg flex items-center gap-2 w-full relative">
                <div className="bg-[#D9D9D9] w-[30px] h-[30px] rounded-full relative" />
                <p className="text-sm leading-5 text-[#DBDBDB] max-w-[300px]  ml-3 lg:ml-9">
                  Reach a global audience of eager learners and earn revenue for
                  every enrollment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[80px] px-6 lg:px-[100px] bg-[#121312]">
          <div className="flex items-center gap-6">
            <h4 className="text-[40px] pr-6 border-r-4 border-[#222220] leading-[48px] font-bold uppercase">
              How skillnet works
            </h4>
            <p className="text-2xl leading-7 text-[#80837E]">
              Understand how Skillnet operates
            </p>
          </div>
          <div className="grid lg:grid-cols-4 items-center gap-5 mt-12 text-[#595958]">
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
                  Find job opportunities and share verified achievements.
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
                  Gain new skills, get certified, and land your dream job.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="faqs" className="lg:py-[140px] px-6 flex justify-center">
          <div className="lg:w-[892px] flex flex-col justify-center items-center">
          

            <FAQSection />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
