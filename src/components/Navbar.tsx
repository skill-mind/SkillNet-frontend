"use client";
import Logo from "../public/img/logo.svg";
import Image from "next/image";
import React, { useState, useRef, useEffect, ReactNode, Fragment } from "react";
import { WalletSelectorUI } from "./WalletConnectModal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { routes } from "@/lib/route";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

interface NavLink {
  href: string;
  label: string;
}

interface NavbarProps {
  navLinks?: NavLink[];
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <span
        className={`relative cursor-pointer pb-1 group ${
          isActive ? "text-white" : "text-[#FCFCFC]"
        }`}
      >
        {children}
        <span
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 
          ${isActive ? "scale-x-100" : "scale-x-0"} group-hover:scale-x-100`}
        />
      </span>
    </Link>
  );
};

export default function Navbar({
  navLinks = [
    { href: routes.home, label: "Home" },
    { href: routes.about, label: "About" },
    { href: routes.helpDesk, label: "Help" },
    { href: routes.faqs, label: "FAQs" },
  ],
}: NavbarProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
    // Close menu if it's open
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close modal if it's open
    if (isModalVisible) setIsModalVisible(false);
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
    <nav className="w-full flex justify-between items-center px-4 sm:px-8 lg:px-10 py-[22px] bg-[#101110] text-sm leading-6 text-[#FCFCFC] fixed top-0 left-0 z-50">
      {/* Logo */}
      <button className="flex items-center cursor-pointer">
        <Image className="w-[100px] h-[40px]" src={Logo} alt="Logo" />
      </button>

      <ul className="hidden md:flex justify-center items-center gap-4">
        {navLinks.map((link, index) => (
          <Fragment key={link.href}>
            <li className="cursor-pointer">
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
            {index < navLinks.length - 1 && (
              <li className="bg-[#1D1D1C] w-[3px] h-4 rounded-lg" />
            )}
          </Fragment>
        ))}
      </ul>

      <div className="hidden md:flex items-center flex-col relative">
        <button
          onClick={showModal}
          className="border border-[#313130] rounded-lg py-4 px-[35px] font-bold hover:bg-[#313130] transition-colors duration-300"
        >
          CONNECT WALLET
        </button>
      </div>

      <div className="flex md:hidden items-center gap-4">
        <button
          onClick={showModal}
          className="border border-[#313130] rounded-lg py-3 px-4 font-bold text-sm"
        >
          CONNECT
        </button>
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg hover:bg-[#313130] transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full right-4 mt-2 w-64 rounded-lg bg-[#101110] border border-[#313130] shadow-lg md:hidden"
        >
          <div className="px-6 py-4 border-b border-[#313130]">
            <h3 className="text-sm font-semibold text-white">SELECT PAGE</h3>
          </div>
          <div className="py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center px-6 py-3 hover:bg-[#313130] transition-colors text-[#FCFCFC] text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      {isModalVisible && (
        <div className="absolute top-full left-0 right-3 md:right-10 md:left-auto px-4 mt-2 z-10">
          <WalletSelectorUI />
        </div>
      )}
    </nav>
  );
}
