"use client";
import { useState } from "react";
import { type NextPage } from "next";

import React from "react";
import NavbarJobSeeker from "@/components/Navbar-job-seeker";
import FormModal from "@/app/dashboard/user-profile/components/FormModal";
import {
  AboutForm,
  ExperienceForm,
  CertificationForm,
  SkillsForm,
} from "@/app/dashboard/user-profile/components/Form";
import type {
  AboutData,
  ExperienceData,
  CertificationData,
  SkillData,
} from "@/app/dashboard/user-profile/components/Form";
import ProfilePage from "@/app/dashboard/user-profile/components/ProfilePage";
import Footer from "@/components/Footer";
import Rectangle27 from "@/public/img/Rectangle 27.svg";
import Image from "next/image";
import { Plus, Pencil } from "lucide-react";

type ModalType = "about" | "experience" | "certification" | "skills" | null;

const Page: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [editData, setEditData] = useState<
    AboutData | ExperienceData | CertificationData | SkillData | null
  >(null);

  const handleEdit = (
    type: ModalType,
    data: AboutData | ExperienceData | CertificationData | SkillData
  ) => {
    setModalType(type);
    setEditData(data);
    setIsModalOpen(true);
  };

  const handleAboutSubmit = (data: AboutData) => {
    console.log("About data:", data);
    setIsModalOpen(false);
  };

  const handleExperienceSubmit = (data: ExperienceData) => {
    console.log("Experience data:", data);
    setIsModalOpen(false);
  };

  const handleCertificationSubmit = (data: CertificationData) => {
    console.log("Certification data:", data);
    setIsModalOpen(false);
  };

  const handleSkillsSubmit = (data: SkillData) => {
    console.log("Skill data:", data);
    setIsModalOpen(false);
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
      <div className="w-full">
        <Image
          src={Rectangle27}
          alt="Rectangle27}"
          width={1920}
          className="w-full border-bottom-8"
        />
      </div>

      {/* Profile Box */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <ProfilePage />
        <div className="min-h-screen text-gray-100 py-6 px-2 sm:px-4 flex flex-col items-center">
          <div className="w-full max-w-4xl">
            {/* About Section */}
            <section id="about" className="mb-8 mt-7">
              <div className="flex items-center justify-between mb-4 border-b-2 border-[#1d1d1c] pb-2">
                <h2 className="text-xl sm:text-2xl font-semibold pb-4 w-full">
                  About
                </h2>
                <div className="flex gap-3">
                  <button onClick={() => handleEdit("about", {} as AboutData)}>
                    <Pencil className="w-5 h-5 text-gray-400 hover:text-white" />
                  </button>
                  <button onClick={() => handleEdit("about", {} as AboutData)}>
                    <Plus className="w-5 h-5 text-gray-400 hover:text-white" />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-[#D9D9D9] text-sm sm:text-base">
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
                  <h2 className="text-xl sm:text-2xl font-semibold flex-1">
                    Experiences
                  </h2>
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
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-[#1d1d1c]">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#bbbb]">
                          AI Researcher and Data Analyst
                        </h3>
                        <p className="text-[#999999] mt-2 pb-2">CityScape</p>
                      </div>
                      <span className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-0">
                        2018 - Present
                      </span>
                    </div>
                    <p className="text-gray-300 mt-3 text-sm sm:text-base">
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

                  <div className="pb-8 sm:pb-12 border-b-2 border-[#1d1d1c]">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b border-[#1d1d1c]">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#bbbb]">
                          AI Researcher and Data Analyst
                        </h3>
                        <p className="text-[#999999] mt-2 pb-2">CityScape</p>
                      </div>
                      <span className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-0">
                        2018 - Present
                      </span>
                    </div>
                    <p className="text-gray-300 mt-3 text-sm sm:text-base">
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
                <div className="flex items-center justify-between mb-4 border-b-2 border-[#1d1d1c] pb-4 sm:pb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold flex-1 pt-3">
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
                  <div className="flex flex-col sm:flex-row items-start sm:items-center border-b border-[#1d1d1c] gap-4">
                    <div className="w-16 h-16 sm:w-25 sm:h-25 bg-gray-700 rounded-md flex-shrink-0 mx-auto sm:mx-0"></div>

                    {/* Content */}
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-[#bbbb] pt-2">
                            Blockchain Developer
                          </h3>
                          <p className="text-[#999999] mt-2 pb-2 text-sm sm:text-base">
                            Provider: SkillNet Academy
                          </p>

                          <div className="pb-2">
                            <a
                              href="#"
                              className="text-[#D0EFB1] no-underline text-sm sm:text-base break-all"
                            >
                              https://unframed.co/item/0x07....5f1/3171138
                            </a>
                          </div>
                        </div>
                        <span className="text-gray-400 text-sm sm:text-base mt-2 sm:mt-0">
                          2018 - Present
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-3 text-sm sm:text-base">
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
                  <div className="flex flex-col sm:flex-row items-start sm:items-center border-b border-[#1d1d1c] gap-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-700 rounded-md flex-shrink-0 mx-auto sm:mx-0"></div>

                    {/* Content */}
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-[#bbbb] pt-2">
                            Blockchain Developer
                          </h3>
                          <p className="text-[#999999] mt-2 pb-2 text-sm sm:text-base">
                            Provider: SkillNet Academy
                          </p>

                          <div className="pb-2">
                            <a
                              href="#"
                              className="text-[#D0EFB1] no-underline text-sm sm:text-base break-all"
                            >
                              https://unframed.co/item/0x07....5f1/3171138
                            </a>
                          </div>
                        </div>
                        <span className="text-gray-400 text-sm sm:text-base mt-2 sm:mt-0">
                          2018 - Present
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-3 text-sm sm:text-base">
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
                <div className="flex items-center justify-between mb-4 border-b-2 border-[#1d1d1c] pb-3 sm:pb-6">
                  <h2 className="text-xl sm:text-2xl font-semibold flex-1">
                    Skills
                  </h2>
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
                  <span className="px-3 py-1 bg-[#1a1b1a] border border-[#313130] rounded-sm text-xs sm:text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-[#1a1b1a] border border-[#313130] rounded-sm text-xs sm:text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-[#1a1b1a] border border-[#313130] rounded-sm text-xs sm:text-sm">
                    Power BI
                  </span>
                  <span className="px-3 py-1 bg-[#1a1b1a] border border-[#313130] rounded-sm text-xs sm:text-sm">
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
        {modalType === "about" && (
          <AboutForm
            onSubmit={handleAboutSubmit}
            initialData={editData as AboutData}
            onClose={() => setIsModalOpen(false)}
          />
        )}
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
