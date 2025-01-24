"use client";

import React from "react";
import AccountTypeSelector from "@/components/select-account-type";
import selectImgBg from "../../public/DESIGN.svg";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-2 justify-evenly items-center bg-gray-950 p-6">
      <div className="relative">
        <Image
          src={selectImgBg}
          className="absolute left-10 -top-16"
          alt="background"
          priority
        />
      </div>

      <div className="flex items-center justify-center">
        <AccountTypeSelector />
      </div>
    </div>
  );
};

export default page;
