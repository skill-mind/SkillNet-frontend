"use client";
import Logo from "../public/img/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-[100px] py-[22px] bg-[#101110] text-sm leading-6 text-[#FCFCFC] fixed top-0 left-0 z-[5]">
      <button className="flex items-center cursor-pointer">
        <Image className="w-[100px] h-[40px]" src={Logo} alt="Logo" />
      </button>
      <ul className="flex justify-center items-center gap-4">
        <li className="cursor-pointer">Home</li>
        <li className="bg-[#1D1D1C] w-[3px] h-4 rounded-lg"></li>
        <li className="cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="bg-[#1D1D1C] w-[3px] h-4 rounded-lg"></li>
        <li className="cursor-pointer">Help</li>
        <li className="bg-[#1D1D1C] w-[3px] h-4 rounded-lg"></li>
        <li className="cursor-pointer">FAQs</li>
      </ul>
      <button className="border border-[#313130] rounded-lg py-4 px-[35px] font-bold">
        CONNECT WALLET
      </button>
    </nav>
  );
}
