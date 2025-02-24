"use client";
import Logo from "@/public/skillnet-white logo.png";
import Avatar from "@/public/img/avatar.svg"
import Image from "next/image";
import Link from "next/link";
import { Bell, Search, MoreVertical } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/exam", label: "Exams" },
  { href: "/registered", label: "Registered" },
  { href: "/results", label: "Results" },
];

const NavLink = ({ href, label }: NavLink) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <span
        className={`relative cursor-pointer pb-1 group ${
          isActive ? "text-white" : "text-[#FCFCFC]"
        }`}
      >
        {label}
        <span
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 
          ${isActive ? "scale-x-100" : "scale-x-0"} group-hover:scale-x-100`}
        />
      </span>
    </Link>
  );
};

const ExamFeedNavbar = () => {
    return (
      <nav className="w-full flex justify-between items-center px-4 sm:px-8 lg:px-16 py-[22px] bg-[#101110] text-sm leading-6 text-[#FCFCFC] fixed top-0 left-0 z-50">
        {/* Left Section - Logo */}
        <button className="flex items-center cursor-pointer">
          <Image className="w-[100px] h-[40px]" src={Logo} alt="Logo" />
        </button>
  
        {/* Middle Section - Nav Links + Notification + Search */}
        <div className="hidden md:flex flex-1 items-center w-full justify-between">
          {/* Navigation Links */}
          <ul className="flex justify-center items-center gap-4 mx-auto">
            {navLinks.map((link, index) => (
              <Fragment key={link.href}>
                <li className="cursor-pointer">
                  <NavLink {...link} />
                </li>
                {index < navLinks.length - 1 && (
                  <li className="bg-[#1D1D1C] w-[3px] h-4 rounded-lg" />
                )}
              </Fragment>
            ))}
          </ul>
            
        <div className="flex items-center gap-2 mx-auto">
          {/* Notification Bell */}
          <button className="p-2 hover:bg-[#313130] rounded-full transition-colors">
            <Bell size={20} />
          </button>
  
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-3 py-1.5 w-[280px] rounded-lg bg-transparent border border-[#313130] focus:outline-none focus:ring-1 focus:ring-[#313130]"
            />
          </div>
            </div>
        </div>
  
        {/* Right Section - User Profile */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-2 bg-[#161716] py-2 px-3 rounded-lg">
            <Image 
              className="w-8 h-8 rounded-full" 
              src={Avatar}
              alt="User Avatar"
              width={32}
              height={32}
            />
            <span className="text-[#F3F5FF]">osatuyipikin.brawos.eth</span>
            <button className="p-1 hover:bg-[#313130] rounded-full transition-colors">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>
      </nav>
    );
  };
  
  

export default ExamFeedNavbar;