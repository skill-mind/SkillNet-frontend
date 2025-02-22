"use client";

import Navbar from "@/components/Navbar";
import Loading from "../Loading";
import Footer from "@/components/Footer";

function ExamPage() {
  return (
    <>
      <Navbar />

      <section className="">
        <div className="w-full md:w-[1256px] mx-auto flex flex-col items-center gap-6 py-14 px-7 md:py-[100px] md:px-[80px] mt-10 ">
          <h1 className="text-[40px] text-center font-bold uppercase leading-tight h-12 w-full md:w-[331px] mt-20 ">
            Page under construction
            <Loading />
          </h1>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ExamPage;
