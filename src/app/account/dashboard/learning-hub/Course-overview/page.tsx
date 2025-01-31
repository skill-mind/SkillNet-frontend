import Footer from "@/components/Footer";
import NavbarJobSeeker from "@/components/Navbar-job-seeker";
import CourseOverviewPage from "./course-overview";

const CourseOverview = () => {
  return (
    <div>
      <NavbarJobSeeker />
      {/* <LearningHub /> */}
      <CourseOverviewPage />
      <Footer />
    </div>
  );
};

export default CourseOverview;
