import Image from "next/image";
import ProfileImg from "../../../../../public/img/profile-avatar.png";
import Separator from "./Separator";
import { cn } from "@/lib/utils";

interface ProfileHeaderProps {
  isUser: boolean;
}

export default function ProfileHeader({ isUser }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center">
      <div className="flex items-center w-full md:w-fit space-x-4 py-4">
        <Image
          src={ProfileImg}
          alt="Profile Image"
          width={100}
          height={100}
          className="rounded-full object-cover object-top"
        />
        <div className="space-y-1">
          <p className="font-semibold text-2xl">TheBuidl</p>
          <p className="text-sm text-[#FCFCFC]">
            Research and development of problem solving products
          </p>
          <p className="*:text-sm *:text-[#BBBBBB] flex items-center space-x-2">
            <span>Blockchain Services</span>
            <Separator />
            <span>42 followers</span>
            <Separator />
            <span>2-10 Employees</span>
          </p>
        </div>
      </div>
      <div className={cn(!isUser && "hidden")}>
        <button className="border border-[#696969] py-3 px-10 text-grayText rounded-md">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
