import Footer from "@/components/Footer";
import NavbarJobSeeker from "@/components/Navbar-job-seeker";
import CourseOverviewPage from "./course-overview";
import { Suspense } from "react";

const CourseOverview = () => {
  return (
    <div>
      <NavbarJobSeeker />
      {/* <LearningHub /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <CourseOverviewPage />
      </Suspense>
      <Footer />
    </div>
  );
};

export default CourseOverview;
