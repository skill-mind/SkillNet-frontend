import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Form from "./components/form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Learn about SkillNet, a decentralized platform for job seekers and employers.",
  keywords: [
    "SkillNet",
    "decentralized jobs",
    "blockchain certification",
    "secure exams",
  ],
};
  



const page = () => {




  return (
  <>
    <Navbar/>

   <section className="mt-20">
      <div className="w-full mx-auto flex flex-col items-center gap-6 py-14 px-7 md:py-[100px] md:px-[80px] mt-10 ">
        
      <div className="text-center ">
        <h1 className="text-[40px] text-pretty font-bold pb-4 text-[#FCFCFC]">CONTACT US</h1>
        <p className=" text-base lg:text-lg text-[#898783]">Do you have something to share with us? Reach out to us!</p>  
      </div>

      <Form/>
      
      </div>
    </section>

    <Footer />

  </>
 
  );
};

export default page;
