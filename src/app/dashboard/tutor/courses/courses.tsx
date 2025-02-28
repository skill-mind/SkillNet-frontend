import { useState } from "react";
import CourseCard from "../component/CourseCard";
import { PlusIcon } from "lucide-react";
import CreateCourseModel from "../component/Create-Course-Modal";

type courseProps = {
  id: number;
  banner: string;
  title: string;
  enrollment: number;
  rating: number;
  published: boolean;
  videosAvailable: boolean;
};

function Courses() {
  const [isCreating,setIsCreating] = useState(false)
  const courses: courseProps[] = [
    {
      id: 1,
      banner: ``,
      title: "Become a web3 Developer:A beginners approach",
      enrollment: 20,
      rating: 4.5,
      published: true,
      videosAvailable: true,
    },
    {
      id: 2,
      banner: ``,
      title: "Become a web3 Developer:A beginners approach",
      enrollment: 15,
      rating: 0,
      published: false,
      videosAvailable: true,
    },
  ];
  return (
    <>
      {!isCreating && (
        <div className=" px-8 h-auto pb-40 ">
          <section className="flex flex-col gap-[15px]">
            {courses.map((course) => {
              return <CourseCard courses={course} key={course.id} />;
            })}
          </section>
          <div className="w-full flex justify-end">
            <button className=" my-4">View More</button>
          </div>
          <div className="w-full flex justify-start">
            <button className=" my-4 capitalize">create a new course</button>
          </div>
          {/* <Addcourse /> */}
          <div className="h-[240px] bg-[#161716] p-[24px] rounded-[8px] flex flex-col gap-[20px] justify-between items-center  relative overflow-x-auto">
            <h4 className="text-center font-[400] text-[14px]">
              Create a new course, publish for new learners, and earn an income.
            </h4>
            <div className="h-[72px] w-[72px] bg-[#2D2E2D] flex items-center justify-center rounded-full">
              <PlusIcon className="w-[24px] h-[24px]" />
            </div>
            <button
              className="flex justify-center items-center gap-4 font-[400] text-[16px] w-fit h-[48px] bg-[#2D2E2D] py-[12px] px-[12px] rounded-[8px]"
              onClick={() => setIsCreating(true)} // Open modal on click
            >
              <PlusIcon className="w-[16px] h-[16px]" /> CREATE NEW COURSE
            </button>
          </div>
        </div>
      )}
      {isCreating && (
        <CreateCourseModel
          isOpen={isCreating}
          onClose={() => setIsCreating(false)}
        />
      )}
    </>
  );
}

export default Courses;
