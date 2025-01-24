"use client";
import telegram from "../public/telegram.svg";
import X from "../public/new-twitter.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-[1240px] h-[180px] mx-auto border border-[#595958] bg-[#121312] flex flex-col justify-evenly items-center rounded-md mb-10 mt-20">
      <div className="w-full flex flex-row justify-between p-[24px]">
        <h5 className="text-[20px]">SKILLNET</h5>
        <ul className="flex flex-row justify-center items-center gap-5 text-[16px]">
          <li className="cursor-pointer p-2">About</li>
          {/* <li className="cursor-pointer p-2">FAQ</li> */}
          <li className="cursor-pointer p-2">Contact</li>

          <li className="cursor-pointer p-2">
          <Link href="/pages/code-of-ethics">Ethics</Link>
            </li>
          <li className="cursor-pointer p-2">Privacy</li>
          <li className="cursor-pointer p-2">Terms</li>
        </ul>
      </div>
      <div className="w-full flex flex-row justify-between itmes-start border-t border-[#595958] p-[24px]">
        <ul className="flex flex-row justify-center items-center gap-5">
          <li className="cursor-pointer p-2">
            <Link href="https://t.me/+wkTCPZzVyGU5ZDFk">
              <Image
                className="w-[16.67px] h-[14.17px]"
                src={telegram}
                alt="git"
              />
            </Link>
          </li>
          <li className="cursor-pointer p-2">
            <Link href="https://x.com/projectSkillNet">
              <Image
                width={16.67}
                height={14.17}
                src={X}
                alt="X social media link"
              />
            </Link>
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
