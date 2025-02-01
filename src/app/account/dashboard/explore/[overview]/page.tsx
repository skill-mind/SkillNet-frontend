"use client";
import { useState } from "react";
import TutorFacilitator from "../Course-overview/components/tutor-facilitator";
import Overview from "../Course-overview/components/overview";
import Content from "../Course-overview/components/content";

function MyCourse() {
  const [route, setRoute] = useState("tutors");
  return (
    <section>
      {route === "overview" && <Overview />}
      {route === "content" && <Content />}
      {route === "tutors" && (
        <TutorFacilitator route={route} setRoute={setRoute} />
      )}
    </section>
  );
}
export default MyCourse;
