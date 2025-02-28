"use client";

import { useState, useEffect, useContext } from "react";
import { Menu, MoreVertical, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Logo from "@/public/skillnet-white logo.png";
import pen from "@/public/paint-brush-01.png";
import Notification from "@/public/img/notification.svg";
import Avatar from "@/public/img/Avatar.png";

import { DashBoardContext } from "@/app/useContext/dashboardContext";

function Header() {
  const { activeSection, activeNotificationTab } = useContext(DashBoardContext);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dynamic navigation based on active section
   const getNavigation = () => {
    switch (activeSection) {
      case "home":
        return [
          { name: "Home", href: "/account/dashboard/employer" },
          { name: "Dashboard", href: "/account/dashboard/employer" },
          { name: "Profile", href: "/account/dashboard/employer" },
        ];
      case "job openings":
        return [{ name: "Job Openings", href: "/account/dashboard/employer" }];
      case "notifications":
        return [{ name: "Notifications", href: "/account/dashboard/employer" }];
      default:
        return [{ name: "Home", href: "/account/dashboard/employer" }];
    }
  };

  useEffect(() => {
    console.log("Updated activeSection:", activeSection);
  }, [activeSection]);

  const navigation = getNavigation();

  return (
    <header className="bg-[#101110] py-5">
      <div className="flex items-center justify-between pl-4 md:px-24 pr-8 px-3 py-3 sm:px-6 ">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center ">
            <Image
              src={Logo}
              width={100}
              height={40}
              className="w-[100px] h-[40px]"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-4">
          {navigation.map((item, index) => (
            <div key={item.name} className="flex items-center">
              {index > 0 && (
                <div className="bg-[#1D1D1C] w-[3px] h-4 rounded-lg mx-2"></div>
              )}
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium hover:text-[#FCFCFC]",
                  pathname === item.href ? "text-[#FCFCFC]" : "text-[#ABABAB]"
                )}
              >
                {item.name}
              </Link>
              {activeSection === "notifications" &&
                item.name === "Notifications" && (
                  <>
                    <div className="bg-[#1D1D1C] w-[3px] h-4 rounded-lg mx-2"></div>
                    <span className="text-white text-xs font-bold">
                      {activeNotificationTab}
                    </span>
                  </>
                )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="relative flex items-center gap-2">
            <Image
              src={Notification}
              width={20}
              height={20}
              className="text-white cursor-pointer"
              alt="Notification"
            />
          </div>

          <div className="relative max-w-sm flex items-center">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5 text-[#ABABAB] pointer-events-none" />
            <input
              type="search"
              placeholder="Search..."
              className="pl-8 py-2 bg-transparent text-[#ABABAB] border border-[#1F1F1F] outline-none placeholder:italic rounded-lg w-[200px] lg:w-[277px]"
            />
          </div>

          {/* Create Courses button - Only for Notifications Page */}
          {activeSection === "notifications" && (
            <button className="px-4 py-2 bg-transparent  text-white rounded-lg border border-[#1F1F1F] outline-none flex items-center gap-2">
              <Image src={pen} width={20} height={20} alt="pen" />
              Create Courses
            </button>
          )}

          <div className="flex items-center gap-2 hover:bg-[#FFFFFF1A]  bg-[#161716] p-2 rounded-lg">
            <Image
              src={Avatar}
              width={25}
              height={25}
              className="rounded-full"
              alt="Avatar"
            />
            <span className="text-sm text-[#F3F5FF]">kaybruv.braavos.eth</span>
            <MoreVertical className="h-5 w-5 text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
