// import { useEffect } from "react";
// import Link from "next/link";
"use client";

import React from "react";
import NavbarJobSeeker from "@/components/Navbar-job-seeker";
import Footer from "@/components/Footer";
import { Plus, Pencil } from "lucide-react";
import Image from "next/image";
import Ellipse from "@/public/img/Ellipse 1.png";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const page = () => {
  return (
    <>
      <NavbarJobSeeker />

      {/* Profile Box */}
      <div className="px-4 sm:px-3 max-w-screen-xl mx-auto">
        <div className="flex items-center p-10 ml-20 mt-4">
          <Image
            src={Ellipse}
            alt="Ellipse"
            width={84}
            height={84}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h1 className="text-[32px] font-semibold text-white">
              Daniel Ochoja
            </h1>
            <h1 className="text-xl text-white">Software Engineer</h1>
            <a
              href="mailto:daniel@example.com"
              className="text-sm"
              style={{ color: "#A8C789" }} // Inline styling for the required color
            >
              www.danielochoja.com
            </a>
          </div>
        </div>

        <div className="min-h-screen text-gray-100 p-6 flex justify-center gap-4">
          {/* Side Navigation */}
          <div className="w-[400px] h-[292px] bg-[#161716] border border-[#1D1D1C] rounded-lg">
            <nav className="space-y-5 p-[20px] border">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-[#A8C789]"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block text-gray-300 hover:text-[#A8C789]"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="block text-gray-300 hover:text-[#A8C789]"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("certifications")}
                className="block text-gray-300 hover:text-[#A8C789]"
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection("languages")}
                className="block text-gray-300 hover:text-[#A8C789]"
              >
                Spoken Languages
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block text-gray-300 hover:text-[#A8C789]"
              >
                Skills
              </button>
            </nav>
          </div>

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
                    <button>
                      <Pencil className="w-5 h-5 text-gray-400 hover:text-white" />
                    </button>
                    <button>
                      <Plus className="w-5 h-5 text-gray-400 hover:text-white" />
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Experience Item */}
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
                    <button>
                      <Pencil className="w-5 h-5 text-gray-400 hover:text-white" />
                    </button>
                    <button>
                      <Plus className="w-5 h-5 text-gray-400 hover:text-white" />
                    </button>
                  </div>
                </div>

                <div className="pb-4 border-[#1d1d1c]">
                  <div className="flex justify-between items-start border-b border-[#1d1d1c]">
                    <div>
                      <h3 className="text-xl font-semibold text-[#bbbb] pt-2">
                        Blockchain Developer
                      </h3>
                      <p className="text-[#999999] mt-2 pb-2">
                        Provider: SkillNet Academy
                      </p>
                    </div>
                    <span className="text-gray-400">2018 - Present</span>
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

                <div className="pb-4 border-b-2 border-[#1d1d1c]">
                  <div className="flex justify-between items-start border-b border-[#1d1d1c]">
                    <div>
                      <h3 className="text-xl font-semibold text-[#bbbb]">
                        Blockchain Developer
                      </h3>
                      <p className="text-[#999999] mt-2 pb-2">
                        Provider: SkillNet Academy
                      </p>
                    </div>
                    <span className="text-gray-400">2018 - Present</span>
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
                    <button>
                      <Pencil className="w-5 h-5 text-gray-400 hover:text-white" />
                    </button>
                    <button>
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
    </>
  );
};

export default page;
