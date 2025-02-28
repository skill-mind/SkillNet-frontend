import React from "react";
import { Edit } from "lucide-react";
import Image from "next/image";
import { ProfileData } from "@/app/dashboard/user-profile/components/Form";

interface ProfileDisplayProps {
  profileData: ProfileData;
  onEdit: () => void;
}

const ProfileDisplay: React.FC<ProfileDisplayProps> = ({ 
  profileData, 
  onEdit 
}) => {
  return (
    <div className="bg-[#121211] text-white w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center p-4 w-full max-w-6xl mx-auto relative">
        {/* Profile Image and Basic Info */}
        <div className="flex items-center gap-4 flex-grow md:ml-[110px]">
          <div className="w-[82px] h-[82px] rounded-full bg-[#1a1b1a] overflow-hidden">
            {profileData.image ? (
              <Image 
                src={profileData.image} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#2a2b2a] text-gray-500">
                No Image
              </div>
            )}
          </div>
          
          <div>
            <h1 className="text-[24px] font-semibold">{profileData.name || "Your Name"}</h1>
            <p className="text-sm text-gray-400">{profileData.title || "Your Title"}</p>
            {profileData.website && (
              <a
                href={profileData.website}
                className="text-sm font-semibold text-[#A8C789] no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profileData.website.replace(/(^\w+:|^)\/\//, '')}
              </a>
            )}
          </div>
        </div>
        
        {/* Divider */}
        <div className="hidden md:block mx-4 h-5 w-px bg-gray-500"></div>
        
        {/* Skills */}
        <p className="text-s text-[#bbbb] md:mt-0 mt-4 md:mr-[100px]">
          {profileData.skills && profileData.skills.length > 0 
            ? profileData.skills.join(' • ') 
            : "No skills added yet"}
        </p>
        
        {/* Edit Button */}
        <div className="md:flex-grow text-right md:pr-[90px] absolute top-4 right-4 md:relative md:top-auto md:right-auto">
          <button 
            onClick={onEdit}
            className="px-6 py-2 border border-gray-500 text-gray-500 text-s rounded hover:bg-gray-700 flex items-center gap-2"
          >
            <Edit size={16} />
            EDIT PROFILE
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProfileDisplay };
