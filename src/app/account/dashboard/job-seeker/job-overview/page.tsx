import NavbarJobSeeker from "@/components/Navbar-job-seeker";
import JobSeekerOverview from "./job-overview";
import Footer from "@/components/Footer";

function page() {
  return (
    <div className="bg-[#101110] min-h-screen text-white">
      <NavbarJobSeeker />
      <JobSeekerOverview />
      <Footer />
    </div>
  );
}

export default page;
