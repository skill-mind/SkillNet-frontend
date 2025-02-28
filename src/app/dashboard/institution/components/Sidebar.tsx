"use client";

import avatar from "@/public/org-avatar.svg";
import CandidatesIcon from "@/svg/CandidatesIcon";
import CertificatesIcon from "@/svg/CertificatesIcon";
import ExamIcon from "@/svg/ExamIcon";
import HomeIcon from "@/svg/HomeIcon";
import NotificationIcon from "@/svg/NotificationIcon";
import VerificationIcon from "@/svg/VerificationIcon";
import { ChevronDown, Settings, WalletIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface RouteType {
  label: string;
  to: string;
  icon: ReactNode;
  subroutes?: string[];
  defaultSubroute?: string;
}

function Sidebar() {
  const pathname = usePathname();

  const routes: RouteType[] = [
    {
      label: "Home",
      to: "",
      icon: <HomeIcon />,
    },
    {
      label: "Exams",
      to: "exams",
      icon: <ExamIcon />,
    },
    {
      label: "Candidates",
      to: "candidates",
      icon: <CandidatesIcon />,
    },
    {
      label: "Certificates",
      to: "certificates",
      icon: <CertificatesIcon />,
    },
    {
      label: "Verification",
      to: "verification",
      icon: <VerificationIcon />,
    },
    {
      label: "Notification",
      to: "notification",
      icon: <NotificationIcon />,
      subroutes: ["exams", "certification", "candidates"],
      defaultSubroute: "exams" 
    },
    {
      label: "Earnings",
      to: "earnings",
      icon: <WalletIcon />,
      subroutes: ["", "", ""],
      defaultSubroute: "exams" 
    },
  ];

  const isActiveRoute = (route: RouteType): boolean => {
    const basePath = "/dashboard/institution/";
    
    if (route.to === "") {
      return pathname === basePath || pathname === basePath.slice(0, -1);
    }
    
    if (route.to === "notification" && route.subroutes) {
      return pathname.startsWith(`${basePath}${route.to}`);
    }
    
    return pathname === `${basePath}${route.to}`;
  };

  const getRouteHref = (route: RouteType): string => {
    const basePath = "/dashboard/institution/";
    
    if (route.to === "notification" && route.defaultSubroute) {
      return `${basePath}${route.to}/${route.defaultSubroute}`;
    }
    
    return `${basePath}${route.to}`;
  };

  return (
    <div className="p-6 w-[300px] bg-zinc-900 flex flex-col h-full">
      <Link href={"institution/profile"}>
      <div className="border border-zinc-700 px-3 py-2 flex justify-between items-center rounded-lg">
        <div className="flex items-center gap-x-2">
          <Image src={avatar} className="w-8 h-8" alt="Organization Avatar" />
          <span className="text-sm text-zinc-100">SkillNet Org</span>
        </div>
        <ChevronDown className="text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer" />
      </div>
      </Link>
        

      <nav className="flex flex-1 flex-col gap-y-2 mt-4">
        {routes.map((route) => {
          const isActive = isActiveRoute(route);
          const href = getRouteHref(route);
          
          return (
            <Link
              href={href}
              className={`
                flex items-center gap-x-3 py-2 px-3 rounded-lg
                transition-all duration-300 ease-in-out
                ${isActive 
                  ? "bg-white/10 text-white" 
                  : "text-zinc-400 hover:bg-white/10 hover:text-white"
                }
              `}
              key={route.to}
            >
              <span className={`${isActive ? "text-white" : "text-zinc-400"}`}>
                {route.icon}
              </span>
              <span className="font-medium">{route.label}</span>
            </Link>
          );
        })}
      </nav>

      <button className="flex items-center gap-x-3 py-2 px-3 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 mt-4">
        <Settings />
        <span className="font-medium">Settings</span>
      </button>
    </div>
  );
}

export default Sidebar;