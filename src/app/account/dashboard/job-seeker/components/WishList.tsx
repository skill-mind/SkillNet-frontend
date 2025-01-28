"use client";
import SearchIcon from "@/public/img/search-01.png";

import { ChangeEvent } from "react";
import {coursesData} from "@/./app/account/dashboard/job-seeker/components/courses"
import CourseCard from "./CourseCard";
import Image from "next/image";
import { useState } from "react";



const WishList = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

 

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
