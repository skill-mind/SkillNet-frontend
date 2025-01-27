"use client";
import telegram from "../public/img/telegram.svg";
import X from "../public/img/new-twitter.svg";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // const router = useRouter();

  return (
    <footer className="px-[100px] pt-16 pb-12">
      <div className="border border-[#595958] rounded-lg">
        <div className="w-full flex flex-row justify-between pt-[56px] px-6 pb-6">
          <h5 className="text-[20px] leading-6">SKILLNET</h5>
          <ul className="flex items-center gap-11 text-base leading-5 text-[#ABABAB]">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
            <li>
              <Link href="/code-of-ethics">Ethics</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-between border-t border-[#595958] p-[24px]">
          <ul className="flex flex-row justify-center items-center gap-5">
            <li className="cursor-pointer">
              <Link href="https://t.me/+wkTCPZzVyGU5ZDFk">
                <Image
                  className="w-[16.67px] h-[14.17px]"
                  src={telegram}
                  alt="Telegram link"
                />
              </Link>
            </li>
            <li className="cursor-pointer">
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
          <p className="text-sm leading-4">
            &copy; Copyright SkillNet {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
