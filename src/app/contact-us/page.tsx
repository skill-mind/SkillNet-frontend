import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Form from "./components/form";


const page = () => {
  
  return (
  <>
    <Navbar/>

   <section className=" pt-5 ">
      <div className="md:p-8 flex flex-col items-center justify-center px-2 pt-0 rounded-[8px]  w-full">
        
      <div className="text-center ">
        <h1 className="text-[40px] text-pretty font-bold pb-4 text-[#FCFCFC]">CONTACT US</h1>
        <p className="text-lg pb-4 text-[#898783]">Do you have something to share with us? Reach out to us!</p>  
      </div>

      <Form/>
      
      </div>
    </section>

    <Footer />

  </>
 
  );
};

export default page;
