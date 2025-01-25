import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Form from "./components/form";

const page = () => {
  
  return (
  <>
    <Navbar/>

   <section className="h-[847px] items-center justify-center pt-10 ">
      <div className="md:p-8 py-8 px-2 pt-0 rounded-[8px]  max-w-4xl w-full">
        
      <div className=" items-center justify-center">
        <h1 className="text-[40px] text-pretty font-bold text-[#FCFCFC]">Contact Us</h1>
        <p className=" text-lg text-[#898783]">Do you have something to share with us? Reach out to us!</p>  
      </div>

      <Form/>
      
      </div>
    </section>

    <Footer />

  </>
 
  );
};

export default page;
