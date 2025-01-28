"use client";
import SearchIcon from "@/public/img/search-01.png";
import Pic from "@/public/img/whisCourse.png";
import { ChangeEvent } from "react";
import CourseCard from "./CourseCard";
import Image from "next/image";
import { useState } from "react";



const WishList = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const coursesData = [
    {
      title: "BLOCKCHAIN DEVELOPMENT BOOTCAMP: ZERO TO HERO",
      author: "Satoshi Nakamoto",
      price: 29.99,
      duration: "3 MONTHS COURSE",
      isBookmarked: false,
      image: Pic,
    },
    {
      title: "ADVANCED DEFI PROTOCOLS & SMART CONTRACTS",
      author: "Vitalik Buterin",
      price: 49.99,
      duration: "2 MONTHS COURSE",
      isBookmarked: true,
      image: Pic,
    },
    {
      title: "CRYPTOCURRENCY TRADING FUNDAMENTALS",
      author: "Michael Saylor",
      price: 24.99,
      duration: "6 WEEKS COURSE",
      isBookmarked: false,
      image: Pic,
    },
    {
      title: "NFT CREATION & MARKETPLACE DEVELOPMENT",
      author: "Beeple Digital",
      price: 34.99,
      duration: "4 WEEKS COURSE",
      isBookmarked: false,
      image: Pic,
    },
    {
      title: "BLOCKCHAIN DEVELOPMENT BOOTCAMP: ZERO TO HERO",
      author: "Satoshi Nakamoto",
      price: 29.99,
      duration: "3 MONTHS COURSE",
      isBookmarked: false,
      image: Pic,
    },
    {
      title: "ADVANCED DEFI PROTOCOLS & SMART CONTRACTS",
      author: "Vitalik Buterin",
      price: 49.99,
      duration: "2 MONTHS COURSE",
      isBookmarked: true,
      image: Pic,
    },
    {
      title: "CRYPTOCURRENCY TRADING FUNDAMENTALS",
      author: "Michael Saylor",
      price: 24.99,
      duration: "6 WEEKS COURSE",
      isBookmarked: false,
      image: Pic,
    },
    {
      title: "NFT CREATION & MARKETPLACE DEVELOPMENT",
      author: "Beeple Digital",
      price: 34.99,
      duration: "4 WEEKS COURSE",
      isBookmarked: false,
      image: Pic,
    },
  ];

  let  filteredCourses = coursesData.filter(
    (course) =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.author.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="w-full h-full px-10 mb-10">
      {/* search section  */}
      <div className="flex flex-row items-center bg-[#1A1B1A] md:w-[587px] h-[48px] px-4">
        <Image
          src={SearchIcon}
          alt="search icon"
          width={500}
          height={500}
          className="w-6 h-6 "
        />
        <input
          type="text"
          value={search}
          placeholder="Search For courses..."
          className="outline-none ml-2 w-full px-2 bg-transparent h-full"
          onChange={(e) => handleSearch(e)}
        />
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-7 mb-5">
        {filteredCourses.length === 0 ? (
          <div className="col-span-full text-center py-10">
            No courses found matching "{search}"
          </div>
        ) : (
          filteredCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))
        )}
      </div>
    </div>
  );
};

export default WishList;
