import Footer from "@/components/Footer";
import JobSeeker from "./job-seeker";
import NavbarJobSeeker from "@/components/Navbar-job-seeker";

function page() {
  return (
    <div>
        <NavbarJobSeeker />
        <JobSeeker />
        <Footer />
    </div>
  );
}

export default page;