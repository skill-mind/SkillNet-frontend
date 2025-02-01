"use client";
import { Button } from "@headlessui/react";
import { useState } from "react";
import TutorFacilitator from "../Course-overview/components/tutor-facilitator";
import ContentPage from "../Course-overview/components/content";

function MyCourse() {
  const [route, setRoute] = useState("overview");
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

      {route === "tutors" && <TutorFacilitator />}
      {route === "content" && <ContentPage /> }
    </section>
  )
   
}
export default MyCourse;
