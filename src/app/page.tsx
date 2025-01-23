"use client";
import bg from "../public/bg.jpeg";
import bg_2 from "../public/bg_2.jpeg";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="h-screen pt-10 flex justify-center items-center -mt-20">
        <div className="w-[1240px] mx-auto h-[400px] flex flex-col justify-between items-center">
          <h1 className="text-[60px] text-center font-bold leading-tight">
            Empowering <br /> Careers, Verified on <br />
            <span className="text-[#b8d39d]"> Blockchain</span>
          </h1>
          <p className="text-center">
            Upskill, certify, and connect with top employers on SkillNet—a
            blockchain-powered <br /> platform for job seekers, employers,
            tutors, and institutions.
          </p>
          <button className="border border-[#A8C789] rounded-md text-[#A8C789] p-3">
            Get started
          </button>
        </div>
      </section>
      <section className="h-screen bg-[#121312] flex justify-center items-center py-16">
        <div className="w-[1240px] h-screen flex flex-col justify-center">
          <div className="w-[1240px] mx-auto flex flex-row items-center justify-center gap-10 pt-16">
            <div className=" pr-8 border-r-4 border-[#222220]">
              <h4 className="text-[40px]">What Makes SkillNet Effective?</h4>
            </div>
            <div>
              <p>
                Empower your career with verified skills, blockchain-backed
                trust,
                <br />
                and seamless connections to opportunities.
              </p>
            </div>
          </div>
          <div className="w-[1240px] mx-auto pb-20 mt-10 flex flex-wrap flex-row items-center justify-center gap-5">
            <div className="w-[398px] h-[220px] bg-[#101110] border-2 border-[#222220] p-16 pt-10 rounded-md">
              <h4 className="text-[18px] mb-5">
                Blockchain Verified Certificates
              </h4>
              <p className="text-[14px]">
                Authentic, tamper-proof certifications <br /> powered by
                blockchain, ensuring they are <br /> permanent and verifiable.
              </p>
            </div>
            <div className="w-[398px] h-[220px] bg-[#101110] border-2 border-[#222220] p-16 pt-10 rounded-md">
              <h4 className="text-[18px] mb-5">Seamless Job Matching </h4>
              <p className="text-[14px]">
                Connect with top employers, showcase verified skills, and
                streamline your path to career success
              </p>
            </div>
            <div className="w-[398px] h-[220px] bg-[#101110] border-2 border-[#222220] p-16 pt-10 rounded-md">
              <h4 className="text-[18px] mb-5">Customizable Exams</h4>
              <p className="text-[14px]">
                Create blockchain-secured, customizable exams to evaluate
                candidates with accuracy and confidence.
              </p>
            </div>
            <div className="w-[398px] h-[220px] bg-[#101110] border-2 border-[#222220] p-16 pt-10 rounded-md">
              <h4 className="text-[18px] mb-5">
                Secure and Transparent Transactions
              </h4>
              <p className="text-[14px]">
                Experience low-fee, blockchain-powered payments for courses,
                exams, and certifications you can trust.
              </p>
            </div>
            <div className="w-[398px] h-[220px] bg-[#101110] border-2 border-[#222220] p-16 pt-10 rounded-md">
              <h4 className="text-[18px] mb-5">Monetize Expertise with Ease</h4>
              <p className="text-[14px]">
                Easily create and sell courses, earning revenue while making an
                impact on careers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-screen relative flex justify-center items-center">
        <div className="w-full h-[600px] relative px-[100px] py-[80px]">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(14, 15, 14, 0.9), rgba(14, 15, 14, 0.3)), url(${bg.src})`,
            }}
          />
          <div className="relative z-10 flex flex-col justify-between items-start gap-10">
            <h3 className="text-[40px] leading-10">
              Find Top Talents With <br /> Confidence
            </h3>
            <div className="flex flex-col justify-between gap-10">
              <div className="w-[435px] h-[54px] bg-[#121311] py-[12px] px-[24px] rounded-md flex items-center gap-5">
                <div className="bg-[#EAEDE7] w-10 h-10 rounded-full"></div>
                <p className="text-[14px]">
                  Post job listings and attract qualified candidates.
                </p>
              </div>
              <div className="w-[435px] h-[54px] bg-[#121311] py-[12px] px-[24px] rounded-md flex items-center gap-5">
                <div className="bg-[#EAEDE7] w-10 h-10 rounded-full"></div>
                <p className="text-[14px]">
                  Verify candidates credentials instantly.
                </p>
              </div>
              <div className="w-[435px] h-[54px] bg-[#121311] py-[12px] px-[24px] rounded-md flex items-center gap-5">
                <div className="bg-[#EAEDE7] w-10 h-10 rounded-full"></div>
                <p className="text-[14px]">
                  Host custom exams to assess applicants' skills.
                </p>
              </div>
            </div>
            <button className="bg-[#0E0F0E] border border-[#161716] rounded-md py-[12px] px-[24px] mt-5">
              Find out more
            </button>
          </div>
        </div>
      </section>

      <section className="w-full h-screen relative flex justify-center items-center">
        <div className="w-full h-[826px] relative px-[100px] py-[80px]">
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(14, 15, 14, 0.5), rgba(14, 15, 14, 0)), url(${bg_2.src})`,
            }}
          />
          <div className="relative z-10 flex flex-col justify-between items-end gap-10">
            <h3 className="text-[40px] leading-10">
              Find Top Talents With <br /> Confidence
            </h3>
            <div className="flex flex-col justify-between gap-10">
              <div className="w-[435px] h-[54px] bg-[#121311] py-[12px] px-[24px] rounded-md flex items-center gap-5">
                <div className="bg-[#EAEDE7] w-10 h-10 rounded-full"></div>
                <p className="text-[14px]">
                  Post job listings and attract qualified candidates.
                </p>
              </div>
              <div className="w-[435px] h-[54px] bg-[#121311] py-[12px] px-[24px] rounded-md flex items-center gap-5">
                <div className="bg-[#EAEDE7] w-10 h-10 rounded-full"></div>
                <p className="text-[14px]">
                  Verify candidates credentials instantly.
                </p>
              </div>
              <div className="w-[435px] h-[54px] bg-[#121311] py-[12px] px-[24px] rounded-md flex items-center gap-5">
                <div className="bg-[#EAEDE7] w-10 h-10 rounded-full"></div>
                <p className="text-[14px]">
                  Host custom exams to assess applicants' skills.
                </p>
              </div>
            </div>
            <button className="bg-[#0E0F0E] border border-[#161716] rounded-md py-[12px] px-[24px] mt-5">
              Find out more
            </button>
          </div>
        </div>
      </section>
      <section className="w-full h-[448px] bg-[#121312] py-[30px] px-[100px]">
        <div className="w-[1240px] mx-auto flex flex-row items-center justify-start gap-10 pt-16">
          <div className=" pr-8 border-r-4 border-[#222220]">
            <h4 className="text-[40px]">How skillnet works</h4>
          </div>
          <div>
            <p>Understand how Skillnet operates</p>
          </div>
        </div>
        <div className="w-[1240px] h-[176px] m-auto flex flex-row items-center gap-10">
          <div className="flex flex-col items-start justify-between gap-10 pt-16">
            <span>1</span>
            <div className="border-t border-[#595958] pt-10">
              <h5 className="mb-2 text-[18px]">Build your profile</h5>
              <p className="text-[14px]">
                Create a professional profile and showcase <br /> your skills.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-10 pt-16">
            <span>2</span>
            <div className="border-t border-[#595958] pt-10">
              <h5 className="mb-2 text-[18px]">Upskill and Certify</h5>
              <p className="text-[14px]">
                Enroll in courses and earn blockchain-verified <br />{" "}
                certifications.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-10 pt-16">
            <span>3</span>
            <div className="border-t border-[#595958] pt-10">
              <h5 className="mb-2 text-[18px]">Connect with Employers</h5>
              <p className="text-[14px]">
                Find job opportunities and share verified <br /> achievements.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-10 pt-16">
            <span>4</span>
            <div className="border-t border-[#595958] pt-10">
              <h5 className="mb-2 text-[18px]">Grow Professionally</h5>
              <p className="text-[14px]">
                Gain new skills, get certified, and land your <br /> dream job.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[448px] bg-[#121312] py-[30px] px-[100px]">
        <div className="w-[1240px] mx-auto flex flex-row items-center justify-start gap-10 pt-16">
          <div className="">
            <h4 className="text-[40px]">Share Knowledge, Earn Revenue</h4>
          </div>
        </div>
        <div className="w-[1240px] h-[176px] m-auto flex flex-row items-center gap-10">
          <div className="flex flex-row justify-between gap-10">
            <div className="w-[435px] h-[54px] bg-[#1b1b1b] py-[12px] px-[24px] rounded-md flex items-center gap-5">
              <div className="bg-[#EAEDE7] w-10 h-10 rounded-full"></div>
              <p className="text-[14px]">
                Post job listings and attract qualified candidates.
              </p>
            </div>
            <div className="w-[435px] h-[54px] bg-[#1b1b1b] py-[12px] px-[24px] rounded-md flex items-center gap-5">
              <div className="bg-[#EAEDE7] w-10 h-10 rounded-full"></div>
              <p className="text-[14px]">
                Verify candidates credentials instantly.
              </p>
            </div>
            <div className="w-[435px] h-[54px] bg-[#1b1b1b] py-[12px] px-[24px] rounded-md flex items-center gap-5">
              <div className="bg-[#EAEDE7] w-10 h-10 rounded-full"></div>
              <p className="text-[14px]">
                Host custom exams to assess applicants' skills.
              </p>
            </div>
          </div>
        </div>
        <button className="bg-[#0E0F0E] border border-[#161716] rounded-md py-[12px] px-[24px] mt-5 ml-[229px]">
          Find out more
        </button>
      </section>
    </>
  );
}
