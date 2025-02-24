"use client";
import { useState } from "react";
import { type NextPage } from "next";

import React from "react";
import NavbarJobSeeker from "@/components/Navbar-job-seeker";
import FormModal from "@/app/dashboard/user-profile/components/FormModal";
import {
  ExperienceForm,
  CertificationForm,
  SkillsForm,
} from "@/app/dashboard/user-profile/components/Form";
import type {
  ExperienceData,
  CertificationData,
  SkillData,
} from "@/app/dashboard/user-profile/components/Form";
import Footer from "@/components/Footer";
import { Plus, Pencil } from "lucide-react";
import Image from "next/image";
import Ellipse from "@/public/img/Ellipse 1.png";
import Rectangle27 from "@/public/img/Rectangle 27.svg";

type ModalType = "experience" | "certification" | "skills" | null;

const Page: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [editData, setEditData] = useState<
    ExperienceData | CertificationData | SkillData | null
  >(null);

  // const handleAdd = (type: ModalType) => {
  //   setModalType(type);
  //   setEditData(null);
  //   setIsModalOpen(true);
  // };

  const handleEdit = (
    type: ModalType,
    data: ExperienceData | CertificationData | SkillData
  ) => {
    setModalType(type);
    setEditData(data);
    setIsModalOpen(true);
  };

  const handleExperienceSubmit = (data: ExperienceData) => {
    console.log("Experience data:", data);
    setIsModalOpen(false);
    // Add your submission logic here
  };

  const handleCertificationSubmit = (data: CertificationData) => {
    console.log("Certification data:", data);
    setIsModalOpen(false);
    // Add your submission logic here
  };

  const handleSkillsSubmit = (data: SkillData) => {
    console.log("Skill data:", data);
    setIsModalOpen(false);
    // Add your submission logic here
  };

  const getModalTitle = () => {
    return modalType
      ? `${editData ? "Edit" : "Add"} ${
          modalType.charAt(0).toUpperCase() + modalType.slice(1)
        }`
      : "";
  };

  return (
    <>
      <NavbarJobSeeker />

      <Image
        src={Rectangle27}
        alt="Rectangle27}"
        width={1920}
        className="border-bottom-8"
      />

      {/* Profile Box */}
      <div className="px-4 sm:px-3 max-w-screen-xl mx-auto">
        <div className="flex items-center text-white p-4 w-full max-w-6xl mx-auto">
          <div className="flex items-center gap-4 flex-grow ml-[110px]">
            <Image
              src={Ellipse}
              alt="Profile Picture"
              className="w-[82px] h-[82px] rounded-full"
            />

            <div>
              <h1 className="text-[24px] font-semibold">Daniel Ochoja</h1>
              <p className="text-sm text-gray-400">Software Engineer</p>
              <a
                href="https://www.danielochoja.com"
                className="text-sm font-semibold text-[#A8C789] no-underline"
              >
                www.danielochoja.com
              </a>
            </div>
          </div>
          <div className="mx-4 h-5 w-px bg-gray-500 mt-12 "></div>
          <p className="text-s text-[#bbbb] mt-12 mr-[150px]">
            TypeScript • Python • Power BI • JavaScript
          </p>

          {/* Button Stretched to End */}
          <div className="flex-grow text-right pr-[90px]">
            <button className="px-6 py-2 border border-gray-500 text-gray-500 text-s rounded hover:bg-gray-700 w-fullx sm:w-auto">
              SEND A MESSAGE
            </button>
          </div>
        </div>

        <div className="min-h-screen text-gray-100 p-6 flex justify-center gap-4">
          {/* Main Content */}

          <div className="max-w-4xl ml-7">
            {/* About Section */}
            <section id="about" className="mb-8 mt-7">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold border-b border-[#1d1d1c] pb-4 w-full">
                  About
                </h2>
              </div>
              <div>
                <p className="text-[#D9D9D9]">
                  We are seeking a highly skilled and detail-oriented Quality
                  Assurance Manager to lead and manage our QA team. In this
                  role, you will be responsible for ensuring that our products
                  and services meet the highest standards of quality and
                  reliability. You will develop and implement quality assurance
                  strategies, oversee testing processes, and collaborate with
                  cross-functional teams to drive continuous improvement. As the
                  Quality Assurance Manager, you will play a critical role in
                  maintaining customer satisfaction and upholding the
                  company&apos;s reputation for excellence. This position
                  requires strong leadership, analytical, and problem-solving
                  skills, as well as a deep understanding of QA methodologies
                  and best practices.
                </p>
              </div>
            </section>

            <section className="mb-8 p-4 bg-[#161716] border border-[#1D1D1C] rounded-lg">
              {/* Experiences */}
              <section id="experience" className="mb-8">
                <div className="flex items-center justify-between mb-4 border-b-2 border-[#1d1d1c] pb-2">
                  <h2 className="text-2xl font-semibold flex-1">Experiences</h2>
                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        handleEdit("experience", {} as ExperienceData)
                      }
                    >
                      <Pencil className="w-5 h-5 text-gray-400 hover:text-white" />
                    </button>
                    <button
                      onClick={() =>
                        handleEdit("experience", {} as ExperienceData)
                      }
                    >
                      <Plus className="w-5 h-5 text-gray-400 hover:text-white" />
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="pb-4 border-[#1d1d1c]">
                    <div className="flex justify-between items-start border-b border-[#1d1d1c]">
                      <div>
                        <h3 className="text-xl font-semibold text-[#bbbb]">
                          AI Researcher and Data Analyst
                        </h3>
                        <p className="text-[#999999] mt-2 pb-2">CityScape</p>
                      </div>
                      <span className="text-gray-400">2018 - Present</span>
                    </div>
                    <p className="text-gray-300 mt-3">
                      I design experiments that could rival a sci-fi plot,
                      pushing machines to understand everything from Shakespeare
                      to cat memes. Translating complex AI jargon into something
                      humans can actually understand? That&apos;s me
                      too—essentially an interpreter for our soon-to-be
                      overlords. And let&apos;s not forget about writing papers
                      that make it sound like I have everything under control,
                      while secretly wondering if my latest model is sentient or
                      just being sarcastic.
                    </p>
                  </div>

                  <div className="pb-12 border-b-2 border-[#1d1d1c]">
                    <div className="flex justify-between items-start border-b border-[#1d1d1c]">
                      <div>
                        <h3 className="text-xl font-semibold text-[#bbbb]">
                          AI Researcher and Data Analyst
                        </h3>
                        <p className="text-[#999999] mt-2 pb-2">CityScape</p>
                      </div>
                      <span className="text-gray-400">2018 - Present</span>
                    </div>
                    <p className="text-gray-300 mt-3">
                      I design experiments that could rival a sci-fi plot,
                      pushing machines to understand everything from Shakespeare
                      to cat memes. Translating complex AI jargon into something
                      humans can actually understand? That&apos;s me
                      too—essentially an interpreter for our soon-to-be
                      overlords. And let&apos;s not forget about writing papers
                      that make it sound like I have everything under control,
                      while secretly wondering if my latest model is sentient or
                      just being sarcastic.
                    </p>
                  </div>
                </div>
              </section>

              {/* Certifications */}
              <section id="certifications" className="mb-8">
                <div className="flex items-center justify-between mb-4 border-b-2 border-[#1d1d1c] pb-8">
                  <h2 className="text-2xl font-semibold flex-1 pt-3">
                    Certifications
                  </h2>
                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        handleEdit("certification", {} as CertificationData)
                      }
                    >
                      <Pencil className="w-5 h-5 text-gray-400 hover:text-white" />
                    </button>

                    <button
                      onClick={() =>
                        handleEdit("certification", {} as CertificationData)
                      }
                    >
                      <Plus className="w-5 h-5 text-gray-400 hover:text-white" />
                    </button>
                  </div>
                </div>

                <div className="pb-4 border-[#1d1d1c]">
                  <div className="flex items-center border-b border-[#1d1d1c] gap-4">
                    <div className="w-20 h-20 bg-gray-700 rounded-md flex-shrink-0"></div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-[#bbbb] pt-2">
                            Blockchain Developer
                          </h3>
                          <p className="text-[#999999] mt-2 pb-2">
                            Provider: SkillNet Academy
                          </p>

                          <div className="pb-2">
                            <a href="#" className="text-[#D0EFB1] no-underline">
                              https://unframed.co/item/0x07....5f1/3171138
                            </a>
                          </div>
                        </div>
                        <span className="text-gray-400">2018 - Present</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-3">
                    I design experiments that could rival a sci-fi plot, pushing
                    machines to understand everything from Shakespeare to cat
                    memes. Translating complex AI jargon into something humans
                    can actually understand? That&apos;s me too—essentially an
                    interpreter for our soon-to-be overlords. And let&apos;s not
                    forget about writing papers that make it sound like I have
                    everything under control, while secretly wondering if my
                    latest model is sentient or just being sarcastic.
                  </p>
                </div>

                <div className="pb-4 border-[#1d1d1c]">
                  <div className="flex items-center border-b border-[#1d1d1c] gap-4">
                    <div className="w-20 h-20 bg-gray-700 rounded-md flex-shrink-0"></div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-[#bbbb] pt-2">
                            Blockchain Developer
                          </h3>
                          <p className="text-[#999999] mt-2 pb-2">
                            Provider: SkillNet Academy
                          </p>

                          <div className="pb-2">
                            <a href="#" className="text-[#D0EFB1] no-underline">
                              https://unframed.co/item/0x07....5f1/3171138
                            </a>
                          </div>
                        </div>
                        <span className="text-gray-400">2018 - Present</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-3">
                    I design experiments that could rival a sci-fi plot, pushing
                    machines to understand everything from Shakespeare to cat
                    memes. Translating complex AI jargon into something humans
                    can actually understand? That&apos;s me too—essentially an
                    interpreter for our soon-to-be overlords. And let&apos;s not
                    forget about writing papers that make it sound like I have
                    everything under control, while secretly wondering if my
                    latest model is sentient or just being sarcastic.
                  </p>
                </div>
              </section>

              {/* Skills Section */}
              <section id="skills">
                <div className="flex items-center justify-between mb-4 border-b-2 border-[#1d1d1c] pb-6">
                  <h2 className="text-2xl font-semibold flex-1">Skills</h2>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEdit("skills", {} as SkillData)}
                    >
                      <Pencil className="w-5 h-5 text-gray-400 hover:text-white" />
                    </button>
                    <button
                      onClick={() => handleEdit("skills", {} as SkillData)}
                    >
                      <Plus className="w-5 h-5 text-gray-400 hover:text-white" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="px-3 py-1 bg-[#1a1b1a] border border-[#313130] rounded-sm text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-[#1a1b1a] border border-[#313130] rounded-sm text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-[#1a1b1a] border border-[#313130] rounded-sm text-sm">
                    Power BI
                  </span>
                  <span className="px-3 py-1 bg-[#1a1b1a] border border-[#313130] rounded-sm text-sm">
                    JavaScript
                  </span>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
      <Footer />

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={getModalTitle()}
      >
        {modalType === "experience" && (
          <ExperienceForm
            onSubmit={handleExperienceSubmit}
            initialData={editData as ExperienceData}
            onClose={() => setIsModalOpen(false)}
          />
        )}
        {modalType === "certification" && (
          <CertificationForm
            onSubmit={handleCertificationSubmit}
            initialData={editData as CertificationData}
            onClose={() => setIsModalOpen(false)}
          />
        )}
        {modalType === "skills" && (
          <SkillsForm
            onSubmit={handleSkillsSubmit}
            initialData={editData as SkillData}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </FormModal>
    </>
  );
};

export default Page;
