"use client"
import { Button } from "@headlessui/react";
import { useState } from "react";
import { ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "@/public/img/search-01.png";
import {coursesData} from "@/app/account/dashboard/explore/wish-list/courseData"
import CourseCard from "../components/course";


interface Course {
  title: string;
  author: string;
}

function WishList() {
  const [search, setSearch] = useState("");
  const filteredCourses = coursesData.filter(
    (course:Course) =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.author.toLowerCase().includes(search.toLowerCase())
  );

 
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <section className="grid gap-5">
      <div className="capitalize grid gap-4 grid-cols-3 max-w-sm">
        <Button className="text-sm py-[px] px-5 hover:text-[#A8C789] border-[#3B3B3A] border bg-transparent text-white hover:bg-transparent rounded capitalize">
          <Link href="/account/dashboard/explore"> explore</Link>
        </Button>
        <Button className="text-sm py-[6px] px-5 hover:text-[#A8C789] border-[#3B3B3A] border bg-transparent text-white hover:bg-transparent rounded capitalize w-fit">
          <Link href="/account/dashboard/explore/my-course"> my course</Link>
        </Button>
        <Button className="text-sm py-[6px] px-5 text-[#A8C789] border-[#3B3B3A] border bg-transparent hover:text-white hover:bg-transparent rounded capitalize">
          <Link href="/account/dashboard/explore/wish-list"> wish list</Link>
        </Button>
      </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 mb-5">
          {filteredCourses.length === 0 ? (
            <div className="col-span-full text-center py-10">
              No courses found matching <span>{search}</span>
            </div>
          ) : (
            filteredCourses.map((course, index) => (
              <div key={index} className="flex gap-5 overflow-x-auto max-w-full flex-wrap">
                 <CourseCard key={index} {...course} />
              </div>
              
            ))
          )}
        </div>
      </div> 
    </section>
  );
}
export default WishList;