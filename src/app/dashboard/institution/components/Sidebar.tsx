"use client";
import avatar from "@/public/org-avatar.svg";
import CandidatesIcon from "@/svg/CandidatesIcon";
import CertificatesIcon from "@/svg/CertificatesIcon";
import ExamIcon from "@/svg/ExamIcon";
import HomeIcon from "@/svg/HomeIcon";
import NotificationIcon from "@/svg/NotificationIcon";
import VerificationIcon from "@/svg/VerificationIcon";
import { ChevronDown, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const path = usePathname();
  console.log(path);
  const routes = [
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
    },
  ];
  return (
    <div className='p-6 w-[290px] bg-[#161716] flex flex-col h-full'>
      <div className='border border-[#2F302F] px-3 py-2 flex justify-between items-center rounded-lg'>
        <div className='flex items-center gap-x-[10px]'>
          <Image src={avatar} className='w-[30px] h-[30px]' alt='' />
          <span className='text-sm text-[#FCFCFC]'>SkillNet Org</span>
        </div>
        <ChevronDown />
      </div>
      <div className='flex flex-1 flex-col gap-y-[10px] w-full mt-[10px]'>
        {routes.map((route) => (
          <Link
            href={`/dashboard/institution/${route.to}`}
            className={`flex items-center gap-x-[10px] py-2 px-3 rounded-lg hover:bg-[#FFFFFF1A] ${
              route.to === path.slice(22) ? "bg-[#FFFFFF1A]" : "bg-transparent"
            } transition-all duration-300 ease-in-out`}
            key={route.to}
          >
            {route.icon}
            <span>{route.label}</span>
          </Link>
        ))}
      </div>
      <button className='flex items-center gap-x-[10px] py-2 px-3'>
        <Settings />
        Settings
      </button>
    </div>
  );
}

export default Sidebar;
