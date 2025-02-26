"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import hexagon from "../../public/img/hexagonn.svg";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

export default function ErrorPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#0f0f0f] text-center p-6 overflow-hidden">
        <div className="hidden md:block">
          <Image
            src={hexagon}
            alt="Decorative hexagon"
            width={700}
            height={700}
            className="absolute top-[50px] right-[50px] z-0 opacity-40"
          />

          <Image
            src={hexagon}
            alt="Decorative hexagon"
            width={800}
            height={800}
            className="absolute bottom-[-250px] left-[-300px] z-0 opacity-40"
          />
        </div>
        
        <div className={`relative z-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-[80px] leading-[80px] font-bold mb-6 text-[#EAEDE7]">
            404 <span className="text-[#A8C789]">Error</span>
          </h1>
          
          <p className="text-2xl leading-8 mb-12 text-[#EAEDE7]">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          
          <Link
            href="/"
            className="hover:text-black border border-[#A8C789] hover:bg-[#A8C789] rounded-lg text-[#A8C789] py-4 px-6 inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}