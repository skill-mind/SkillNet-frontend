"use server";
import ContentPage from "@/components/content-tab";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const CourseContent = () => {
  return (
    <>
      <Navbar />
      <ContentPage />;
      <Footer />
    </>
  );
};

export default CourseContent;
