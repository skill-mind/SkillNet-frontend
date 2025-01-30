import React from "react";
import JobOverview from "./job-overview";
import NavbarJobSeeker from "@/components/Navbar-job-seeker";

const page = () => {
  return (
    <div>
      <NavbarJobSeeker />
      <JobOverview />
    </div>
  );
};

export default page;
