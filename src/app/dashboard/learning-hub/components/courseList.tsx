import { Search } from "lucide-react";
import CourseCard from "./course";
import { coursesData } from "../wish-list/courseData";

function CourseList() {
  return (
    <div className="py-[30px]">
      <div className="relative pb-10">
        <div className="absolute top-[14px] left-3 h-fit mb-10">
          <Search size={20} color="#ABABAB" />
        </div>
        <input
          type="text"
          className="py-3 pl-10 pr-6 rounded-[8px] text-sm leading-6 italic w-full lg:w-[587px] bg-[#1A1B1A] border border-[#1F1F1F] placeholder:text-[#696969] outline-none"
          placeholder="Search For courses..."
        />
      </div>
      <div className="flex gap-5 overflow-x-auto max-w-full flex-wrap">
        {coursesData.map((data, index) => {
          return <CourseCard data={data} key={index} index={index} />;
        })}
      </div>
    </div>
  );
}
export default CourseList;