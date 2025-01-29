"use client";
import telegram from "../public/img/telegram.svg";
import X from "../public/img/new-twitter.svg";
import Image from "next/image";
import Link from "next/link";

interface FooterLink {
  href: string;
  label: string;
}

const footerLinks: FooterLink[] = [
  { href: "/about", label: "About" },
  { href: "/contact-us", label: "Contact" },
  { href: "/code-of-ethics", label: "Ethics" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

const socialLinks = [
  {
    href: "https://t.me/+wkTCPZzVyGU5ZDFk",
    icon: telegram,
    alt: "Telegram link",
  },
  {
    href: "https://x.com/projectSkillNet",
    icon: X,
    alt: "X social media link",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 sm:px-6 lg:px-[100px] pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 lg:pb-12">
      <div className="border border-[#595958] rounded-lg">
        {/* Main Footer Content */}
        <div
          className="w-full flex flex-col sm:flex-row justify-between gap-8 sm:gap-0 
                      pt-6 sm:pt-8 lg:pt-[56px] px-4 sm:px-6 pb-6"
        >
          {/* Logo/Brand */}
          <h5 className="text-lg sm:text-xl lg:text-[20px] leading-6 text-center sm:text-left">
            SKILLNET
          </h5>

          {/* Navigation Links */}
          <nav className="w-full sm:w-auto">
            <ul
              className="grid grid-cols-2 sm:flex sm:flex-row
                         gap-y-4 gap-x-4 sm:gap-6 lg:gap-11 
                         text-sm sm:text-base leading-5 text-[#ABABAB]
                         justify-items-center sm:justify-start"
            >
              {footerLinks.map((link) => (
                <li
                  key={link.href}
                  className="w-full sm:w-auto text-center sm:text-left"
                >
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-300 block w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div
          className="flex flex-col-reverse sm:flex-row justify-between items-center 
                      gap-4 sm:gap-0 
                      border-t border-[#595958] 
                      p-4 sm:p-6 lg:p-[24px]"
        >
          {/* Social Links */}
          <ul className="flex flex-row justify-center items-center gap-5">
            {socialLinks.map((social) => (
              <li key={social.href} className="cursor-pointer">
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-300"
                >
                  <Image
                    className="w-[16.67px] h-[14.17px]"
                    src={social.icon}
                    alt={social.alt}
                    width={16.67}
                    height={14.17}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-sm leading-4 text-center sm:text-right">
            &copy; Copyright SkillNet {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
