"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { ReactNode, useContext } from "react";
import profilePic from "@/public/img/dashboardProfile.svg";
import homeIcon from "@/public/img/tutor icon/homeDashboard.svg";
import jobIcon from "@/public/img/permanent-job.svg";
import notificationIcon from "@/public/img/tutor icon/messageDashboard.svg";
import { DashBoardContext } from "@/app/useContext/dashboardContext";
import ChatBotButton from "@/components/ChatBotButton";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, label, active = false, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${
        active ? "bg-[#FFFFFF1A]" : "hover:bg-[#FFFFFF1A]"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export function Sidebar() {
  const { activeSection, setActiveSection: onSectionChange } =
    useContext(DashBoardContext);

  return (
    <aside className="w-64 border-r min-h-[90vh] bg-[#161716] border-gray-800 overflow-y-auto">
      <div className="p-4 h-[100%] overflow-y-auto scrollbar-hide scroll-smooth">
        <div
          onClick={() => onSectionChange("profile")}
          className={`flex relative cursor-pointer items-center gap-3 mb-8 border rounded-md p-2 border-[#2F302F] hover:bg-[#FFFFFF1A] ${
            activeSection === "profile" ? "bg-[#FFFFFF1A]" : ""
          }`}
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={profilePic}
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-semibold">The Buidl</h2>
          </div>
          <ChevronDown className="absolute right-3" size={20} color="#BABABA" />
        </div>

        <nav className="space-y-2">
          <NavItem
            label="Home"
            active={activeSection === "home"}
            icon={<Image src={homeIcon} alt="Home" height={20} width={20} />}
            onClick={() => onSectionChange("home")}
          />
          <NavItem
            icon={<Image src={jobIcon} alt="Jo" height={20} width={20} />}
            label="Job Openings"
            active={activeSection === "job openings"}
            onClick={() => onSectionChange("job openings")}
          />
          <NavItem
            icon={
              <Image
                src={notificationIcon}
                alt="Notification"
                height={20}
                width={20}
              />
            }
            label="Notifications"
            active={activeSection === "notifications"}
            onClick={() => onSectionChange("notifications")}
          />

          <ChatBotButton />
        </nav>
      </div>
    </aside>
  );
}
