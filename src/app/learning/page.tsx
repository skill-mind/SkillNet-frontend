"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Tab = "explore" | "mycourses" | "wishlist";

export default function Learning() {
  const [activeTab, setActiveTab] = useState<Tab>("explore");

  return (
    <>
      <Navbar />
      {/* Main Content */}
      <main className="container mt-28 mx-auto px-[100px] py-8">
        <div className="flex flex-col gap-12 ">
          {/* Tabs */}
          <div className="flex space-x-2 ">
            <button
              onClick={() => setActiveTab("explore")}
              className={`rounded-md border py-2 px-4 text-base font-medium ${
                activeTab === "explore"
                  ? "border-[#A8C789] text-[#A8C789]"
                  : "text-[#ABABAB] border-[#1D1D1C]"
              }`}
            >
              Explore
            </button>
            <button
              onClick={() => setActiveTab("mycourses")}
              className={`rounded-md border py-2 px-4 text-base font-medium ${
                activeTab === "mycourses"
                  ? "border-[#A8C789] text-[#A8C789]"
                  : "text-[#ABABAB] border-[#1D1D1C]"
              }`}
            >
              My Courses
            </button>
            <button
              onClick={() => setActiveTab("wishlist")}
              className={`rounded-md border py-2 px-4 text-base font-medium ${
                activeTab === "wishlist"
                  ? "border-[#A8C789] text-[#A8C789]"
                  : "text-[#ABABAB] border-[#1D1D1C]"
              }`}
            >
              Wish List
            </button>
          </div>
          {/* Hero Section */}
          <div className="w-[718px]">
            <h2 className="text-3xl font-bold mb-4">
              Explore a world of knowledge at your fingertips
            </h2>
            <p className="text-[#FCFCFC] text-base font-light mb-8">
              From tech to creativity, access a diverse range of courses
              designed for every learner.
            </p>
            <button
              onClick={() => {}}
              className="rounded-md border py-4 px-8 text-base font-medium text-black bg-[#D0EFB1]"
            >
              BROWSE COURSES
            </button>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-8">Recommended for you</h3>
          </div>
        </div>
      </main>
    </>
  );
}
