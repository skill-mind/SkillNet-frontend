import JobSeeker from "./job-seeker";
import NavbarJobSeeker from "@/components/Navbar-job-seeker";

function page() {
  return (
    <div>
        <NavbarJobSeeker />
        <JobSeeker />
    </div>
  );
}

export default page;