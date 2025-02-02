import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { privacy } from "../utils/data";

const page = () => {
  return (
    <>
      <Navbar />

      <section className="">
        <div className="w-full md:w-[1256px] mx-auto flex flex-col items-center gap-6 py-14 px-7 md:py-[100px] md:px-[80px] mt-10 ">
          <h1 className="text-[40px] text-center font-bold uppercase leading-tight h-12 w-full md:w-[331px] mt-20 ">
            PRIVACY POLICY
          </h1>

          <div className="flex flex-col mt-10 gap-[10px]">
            {privacy.map((term, index) => (
              <section
                key={index}
                className="flex flex-col gap-[20px] border-b border-[#595958] pb-[24px] pt-[24px]"
              >
                <h2 className="text-lg text-[#FFFFFF]">{term.title}</h2>
                <p className=" text-sm text-[#898783]">{term.content}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default page;
