"use client"

import Image from "next/image";
import { useState } from "react"; 
import profileLogo from "../../../../public/institutionLogo.svg"
import copy from "../../../../public/img/copy.png"
import edit from "../../../../public/edit.svg"
import ProfileEditModal from "./profile-edit-modal";
import { Copy } from "lucide-react";

interface Exam {
  id: number;
  status: string;
}

const Profile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = () => setIsModalOpen(true); 
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-black min-h-screen p-6 md:mr-20 text-white flex flex-col relative">
        <div className=" w-full">
        <div className="relative w-[111px] h-[111px] rounded-full overflow-hidden">
          <Image
            src={profileLogo}
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center gap-3 md:flex-col">
          <div className="w-full flex justify-between">

            <div className="flex mt-1 flex-col gap-1">
              <h2 className="font-[600] text-gray-100">SkillNet Org</h2>
              <p className="text-sm font-Ubuntu Sans font-[400]  text-gray-300">
              Design Company
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <ProfileEditModal />
              
              <div className="border-[1px] flex-row flex w-fit h-fit py-2 px-4 gap-4 rounded-[48px] text-gray-300 leading-[19.2px]">
                <p>0X12345...</p>
                <Copy width={20} height={20} className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1E1E1E] w-full h-auto p-[24px] rounded-[16px] mt-8">
        <p className="font-[400] text-gray-300 leading-[19.2px] sm:leading-[24px] text-base ">
        SkillNet Org is a forward-thinking design agency specializing in UI/UX, branding, and product design.
         We craft seamless, intuitive, and visually stunning experiences that captivate users and drive business growth. 
         Our team of creative strategists, designers, and developers collaborate to transform ideas into reality—whether
          it's building digital products, designing brand identities, or optimizing user experiences. At Innovate Designs,
           we believe in blending creativity with cutting-edge technology to deliver impactful solutions 
           that stand out in today's competitive market. Let’s design the future, together.
        </p>
      </div>
    
    </div>
  );
};

export default Profile;
