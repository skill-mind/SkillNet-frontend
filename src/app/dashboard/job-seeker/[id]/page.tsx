import JobSeekerOverview from "./job-overview";
import Footer from "@/components/Footer";
import NavbarJobSeeker from "@/components/Navbar-job-seeker";

export default function JobPage() {
  return (
    <div>
      <NavbarJobSeeker/>
        <JobSeekerOverview/>
      <Footer/>
    </div>
  );
}
