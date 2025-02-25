import React, { useState } from "react";
import Image from "next/image";
import Ellipse from "@/public/img/Ellipse 1.png";
import { Edit } from "lucide-react";
import { ProfileForm, ProfileData } from "@/app/dashboard/user-profile/components/Form";
;


interface ProfilePageProps {
    initialProfileData?: ProfileData;
  }
  
  const ProfilePage: React.FC<ProfilePageProps> = ({ 
    initialProfileData = {
      name: "Daniel Ochoja",
      title: "Software Engineer",
      website: "https://www.danielochoja.com",
      skills: ["TypeScript", "Python", "Power BI", "JavaScript"],
      image: "", 
    }
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState<ProfileData>(initialProfileData);
  
    const handleSubmit = (data: ProfileData) => {
      setProfileData(data);
      setIsEditing(false);
      // Here you would typically send the data to your backend
      console.log("Profile data saved:", data);
    };
  
    const handleOpenEditModal = () => {
      setIsEditing(true);
    };
  
    const handleCloseEditModal = () => {
      setIsEditing(false);
    };
  
    // Format website for display (removing http:// or https://)
    const displayWebsite = profileData.website 
      ? profileData.website.replace(/(^\w+:|^)\/\//, '') 
      : "";
  
    // Format skills as a string with bullet separators
    const skillsString = profileData.skills && profileData.skills.length > 0 
      ? profileData.skills.join(' • ') 
      : "";
  
    return (
      <>
        {/* Profile Display Section */}
        <div className=" text-white w-full">
          <div className="flex items-center text-white p-4 w-full max-w-6xl mx-auto">
            <div className="flex items-center gap-4 flex-grow ml-[110px]">
              {profileData.image ? (
                <Image
                  src={Ellipse}
                  alt="Profile Picture"
                  width={82}
                  height={82}
                  className="w-[82px] h-[82px] rounded-full object-cover"
                />
              ) : (
                <div className="w-[82px] h-[82px] rounded-full bg-[#2a2b2a] flex items-center justify-center text-gray-500">
                  <span>No Image</span>
                </div>
              )}
              
              <div>
                <h1 className="text-[24px] font-semibold">{profileData.name}</h1>
                <p className="text-sm text-gray-400">{profileData.title}</p>
                {profileData.website && (
                  <a
                    href={profileData.website}
                    className="text-sm font-semibold text-[#A8C789] no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {displayWebsite}
                  </a>
                )}
              </div>
            </div>
            
            <div className="mx-4 h-5 w-px bg-gray-500 mt-12"></div>
            
            <p className="text-s text-[#bbbb] mt-12 mr-[100px]">
              {skillsString}
            </p>
            
            {/* Edit Button */}
            <div className="flex-grow text-right pr-[90px]">
              <button 
                onClick={handleOpenEditModal}
                className="px-6 py-2 border border-gray-500 text-gray-500 text-s rounded hover:bg-gray-700 flex items-center gap-2 w-full sm:w-auto"
              >
                <Edit size={16} />
                EDIT PROFILE
              </button>
            </div>
          </div>
        </div>
  
        {/* Edit Modal */}
        {isEditing && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-[#121211] rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-white">Edit Profile</h2>
                  <button 
                    onClick={handleCloseEditModal}
                    className="text-gray-400 hover:text-white text-xl"
                  >
                    ×
                  </button>
                </div>
                
                <ProfileForm 
                  initialData={profileData}
                  onSubmit={handleSubmit}
                  onClose={handleCloseEditModal}
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default ProfilePage;