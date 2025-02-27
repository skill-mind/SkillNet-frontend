import React, { useState } from "react";
import Image from "next/image";
import Ellipse from "@/public/img/Ellipse 1.png";
import { Edit, X } from "lucide-react";
import {
  ProfileForm,
  ProfileData,
} from "@/app/dashboard/user-profile/components/Form";

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
  },
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] =
    useState<ProfileData>(initialProfileData);

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
    ? profileData.website.replace(/(^\w+:|^)\/\//, "")
    : "";

  // Format skills as a string with bullet separators
  const skillsString =
    profileData.skills && profileData.skills.length > 0
      ? profileData.skills.join(" • ")
      : "";
  return (
    <>
      {/* Profile Display Section */}
      <div className="text-white w-full">
        <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center relative">
            {/* Profile Image and Basic Info */}
            <div className="flex items-center gap-4">
              {profileData.image ? (
                <Image
                  src={Ellipse}
                  alt="Profile Picture"
                  width={82}
                  height={82}
                  className="w-20 h-20 rounded-full object-cover"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-[#2a2b2a] flex items-center justify-center text-gray-500">
                  <span className="text-xs sm:text-sm">No Image</span>
                </div>
              )}

              <div>
                <h1 className="text-xl md:text-2xl font-semibold">
                  {profileData.name}
                </h1>
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

            {/* Skills Section with Divider */}
            <div className="flex items-center mt-4 md:mt-0 md:ml-6">
              <div className="hidden md:block mr-4 h-10 w-px bg-gray-500"></div>
              <p className="text-sm text-gray-300">{skillsString}</p>
            </div>

            {/* Edit Button - Now positioned absolute on mobile */}
            <div className="absolute top-0 right-0 md:relative md:ml-auto md:mt-0">
              <button
                onClick={handleOpenEditModal}
                className="px-4 py-2 border border-gray-500 text-gray-500 text-sm rounded hover:bg-gray-700 flex items-center gap-2 whitespace-nowrap"
              >
                <Edit size={16} />
                EDIT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-[#121211] rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  Edit Profile
                </h2>
                <button
                  onClick={handleCloseEditModal}
                  className="text-gray-400 hover:text-white text-xl"
                >
                  <X />
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
