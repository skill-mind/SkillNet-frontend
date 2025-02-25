"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@headlessui/react";
import TutorFacilitator from "@/app/dashboard/learning-hub/Course-overview/components/tutor-facilitator";
import ContentPage from "@/app/dashboard/learning-hub/Course-overview/components/content";
import Overview from "@/app/dashboard/learning-hub/Course-overview/components/overview";
import { coursesData } from "../../wish-list/courseData";
import { Course } from "@/app/dashboard/learning-hub/types/course";

function CourseDetail() {
  const { id } = useParams();
  const [route, setRoute] = useState("overview");
  const [courseData, setCourseData] = useState<Course | null>(null);

  useEffect(() => {
    // Find the course data based on the ID
    const course = coursesData[Number(id)];
    if (course) {
      // Add the id to the course data
      setCourseData({
        ...course,
        id: Number(id)
      });
    }
  }, [id]);
  

  if (!courseData) {
    return <div>Loading course information...</div>;
  }

  return (
    <section className="grid gap-5">
      <div className="capitalize grid gap-4 grid-cols-3 max-w-lg">
        <Button
          className={`text-sm py-[6px] px-5 ${
            route === "overview"
              ? "text-[#A8C789] hover:text-white"
              : "text-white hover:text-[#A8C789]"
          } border-[#3B3B3A] border bg-transparent hover:bg-transparent rounded capitalize`}
          onClick={() => setRoute("overview")}
        >
          Overview
        </Button>
        <Button
          className={`text-sm py-[6px] px-5 ${
            route === "content"
              ? "text-[#A8C789] hover:text-white"
              : "text-white hover:text-[#A8C789]"
          } border-[#3B3B3A] border bg-transparent hover:bg-transparent rounded capitalize`}
          onClick={() => setRoute("content")}
        >
          Content
        </Button>
        <Button
          className={`text-sm py-[6px] px-5 ${
            route === "tutors"
              ? "text-[#A8C789] hover:text-white"
              : "text-white hover:text-[#A8C789]"
          } border-[#3B3B3A] border bg-transparent hover:bg-transparent rounded capitalize`}
          onClick={() => setRoute("tutors")}
        >
          Tutors/Facilitators
        </Button>
      </div>
      {route === "overview" && <Overview courseData={courseData} />}
      {route === "tutors" && <TutorFacilitator courseData={courseData} />}
      {route === "content" && <ContentPage courseData={courseData} />}
    </section>
  );
}

export default CourseDetail;