"use client";
import Logo from "@/public/skillnet-white logo.png";
import Image from "next/image";
import Link from "next/link";
import { EllipsisVertical, X, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const ExamPageNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <ul className="flex justify-center items-center gap-4 mx-auto">
            <Link href="#">
              <span className={`relative cursor-pointer pb-1 group text-white`}>
                Candidate Name
              </span>
            </Link>
            <li className="bg-[#1D1D1C] w-[3px] h-4 rounded-lg" />

            <Link href="/profile">
              <span
                className={`relative cursor-pointer pb-1 group text-[#ABABAB]`}
              >
                Profile
              </span>
            </Link>
          </ul>
        </div>

        <div className="flex items-center gap-">
          <div className="md:flex items-center hidden">
            <div className="bg-[#161716] w-[200px] py-4 text-white text-lg flex flex-row space-x-3 items-center justify-center rounded-lg">
              <span>Help</span>
              <EllipsisVertical size={20} />
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
            <div className="py-2 flex px-4 flex-col space-y-6">
              <Link href="#">
                <span
                  className={`relative cursor-pointer pb-1 group text-white`}
                >
                  Candidate Name
                </span>
              </Link>

              <Link href="/profile">
                <span
                  className={`relative cursor-pointer pb-1 group text-[#ABABAB]`}
                >
                  Profile
                </span>
              </Link>

              <Link href="/profile">
                <span
                  className={`relative cursor-pointer pb-1 group text-[#ABABAB]`}
                >
                  Help
                </span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default ExamPageNavbar;
