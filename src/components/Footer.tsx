"use client";
import git from "../public/Vector.svg";
import X from "../public/new-twitter.svg";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-[1240px] h-[180px] mx-auto border border-[#595958] bg-[#121312] flex flex-col justify-evenly items-center rounded-md mb-10 mt-20">
      <div className="w-full flex flex-row justify-between p-[24px]">
        <h5 className="text-[20px]">SKILLNET</h5>
        <ul className="flex flex-row justify-center items-center gap-5 text-[16px]">
          <li className="cursor-pointer p-2">About</li>
          <li className="cursor-pointer p-2">FAQ</li>
          <li className="cursor-pointer p-2">Contact</li>
          <li className="cursor-pointer p-2">Privacy</li>
          <li className="cursor-pointer p-2">Terms</li>
        </ul>
      </div>
      <div className="w-full flex flex-row justify-between itmes-start border-t border-[#595958] p-[24px]">
        <ul className="flex flex-row justify-center items-center gap-5">
          <li className="cursor-pointer p-2">
            <Image className="w-[16.67px] h-[14.17px]" src={git} alt="git" />
          </li>
          <li className="cursor-pointer p-2">
            <Image className="w-[16.67px] h-[14.17px]" src={X} alt="x" />
          </li>
        </ul>
        <p className="text-[14px]">
          <span>© </span>
          Copyright SkillNet {currentYear}
        </p>
      </div>
    </footer>
  );
}
