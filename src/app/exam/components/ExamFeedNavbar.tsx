"use client";
import Logo from "@/public/skillnet-white logo.png";
import Avatar from "@/public/img/profile-avatar.png";
import Image from "next/image";
import Link from "next/link";
import { Bell, Search, MoreVertical, X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import { ExamNavLinkProps } from "@/interfaces/exam.interface";
import { navLinks } from "./mockData";
import { ChatBot } from "./ChatBox";

const ExamFeedNavbar = () => {
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (showSearch) setShowSearch(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="w-full flex justify-between items-center px-4 sm:px-8 lg:px-16 py-[22px] bg-[#101110] text-sm leading-6 text-[#FCFCFC] fixed top-0 left-0 z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image
            className="w-[50px] h-[30px] mobile:w-[80px] mobile:h-[40px]"
            src={Logo}
            alt="Logo"
          />
        </Link>

        <div className="hidden md:flex flex-1 items-center w-full justify-between">
          {/* Navigation Links */}
          <ul className="flex justify-center items-center gap-4 mx-auto">
            {navLinks.map((link: ExamNavLinkProps, index) => {
              const isActive = pathname === link.href;
              return (
                <Fragment key={link.href}>
                  <Link href={link.href}>
                    <span
                      className={`relative cursor-pointer pb-1 group ${
                        isActive ? "text-white" : "text-[#ABABAB]"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                  {index < navLinks.length - 1 && (
                    <li className="bg-[#1D1D1C] w-[3px] h-4 rounded-lg" />
                  )}
                </Fragment>
              );
            })}
          </ul>

          <div className="flex items-center gap-2 lgTablet:mx-auto">
            <button className="p-2 hover:bg-[#313130] rounded-full transition-colors">
              <Bell size={20} />
            </button>

            {/* Search Bar - Show full bar on large screens, icon on smaller */}
            <div className="relative">
              <div className="hidden lgTablet:block">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-9 pr-3 py-1.5 w-[280px] rounded-lg bg-transparent border border-[#696969] focus:outline-none focus:ring-1 focus:ring-[#313130]"
                />
              </div>
              <button
                className="lgTablet:hidden p-2 hover:bg-[#313130] rounded-full transition-colors"
                onClick={() => setShowSearch(!showSearch)}
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* User Profile */}

          <div className="flex items-center">
            <div className="flex items-center gap-1 mobile:gap-2 bg-[#161716] py-1 mobile:py-2 px-3 rounded-lg">
              <Image
                className="w-8 h-8 rounded-full"
                src={Avatar}
                alt="User Avatar"
                width={32}
                height={32}
              />
              <span className="hidden mobile:block text-white">
                osatuyipikin.brawos.eth
              </span>
              <button className="p-1 hover:bg-[#313130] rounded-full transition-colors">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden flex p-2 rounded-lg hover:bg-[#313130] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full right-4 mt-1 w-64 z-50 rounded-lg bg-[#101110] border border-[#313130] shadow-lg md:hidden"
          >
            <div className="px-6 py-4 border-b border-[#313130]">
              <h3 className="text-sm font-semibold text-white">SELECT PAGE</h3>
            </div>
            <div className="py-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center px-6 py-3 hover:bg-[#313130] transition-colors text-sm ${
                      isActive ? "text-white" : "text-[#ABABAB]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <ChatBot />
            </div>
          </div>
        )}
      </nav>

      {/* Floating Search Bar */}
      {showSearch && (
        <div className="fixed top-[80px] left-0 w-full px-4 sm:px-8 lg:px-16 z-50 lgTablet:hidden">
          <div className="relative w-full bg-[#101110] rounded-lg shadow-lg p-4">
            <Search
              className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-3 py-1.5 w-full rounded-lg bg-transparent border border-[#696969] focus:outline-none focus:ring-1 focus:ring-[#313130]"
              autoFocus
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ExamFeedNavbar;
