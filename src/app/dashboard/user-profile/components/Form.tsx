import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { PlusCircle, Upload } from "lucide-react";
import Image from "next/image";

// Types and Interfaces
interface AboutData {
  textArea?: string;
}
interface ProfileData {
  image?: string;
  name?: string;
  title?: string;
  website?: string;
  skills?: string[];
}

interface ExperienceData {
  profile?: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  skills?: string;
  url?: string;
}

interface CertificationData {
  study?: string;
  school?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  grade?: string;
  url?: string;
  skills?: string;
  media?: string;
}

interface SkillData {
  name?: string;
}

interface FormProps<T> {
  onSubmit: (data: T) => void;
  onClose: () => void;
  initialData?: T;
}

const ProfileForm: React.FC<FormProps<ProfileData>> = ({
  onSubmit,
  initialData = {
    image: "",
    name: "",
    title: "",
    website: "",
    skills: [],
  },
}) => {
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState<string[]>(initialData.skills || []);

  const handleAddSkill = () => {
    if (skillInput.trim()) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (index: number) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: ProfileData = {
      image: formData.get("image") as string,
      name: formData.get("name") as string,
      title: formData.get("title") as string,
      website: formData.get("website") as string,
      skills: skills,
    };
    onSubmit(data);
  };

  return (
    <div className="bg-[#121211] text-white p-4 sm:p-6 rounded-lg w-full max-w-3xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
        Edit Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Profile Image */}
        <div>
          <label className="block text-gray-300 mb-2">Profile Image</label>
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-[120px] md:h-[120px] bg-[#1a1b1a] border border-[#313130] rounded-lg flex flex-col items-center justify-center cursor-pointer">
            {initialData.image ? (
              <div className="relative w-full h-full">
                <Image
                  src={initialData.image}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                  <Upload className="text-white" />
                </div>
              </div>
            ) : (
              <>
                <PlusCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#A8C789] mb-1 sm:mb-2" />
                <span className="text-gray-500 text-xs sm:text-sm">
                  Upload Image
                </span>
              </>
            )}
            <input
              type="file"
              name="image"
              className="hidden"
              accept="image/*"
            />
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-gray-300 mb-1 sm:mb-2">
            Full Name <span className="text-[#C04639]">*</span>
          </label>
          <input
            name="name"
            type="text"
            defaultValue={initialData.name}
            className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-300 placeholder-gray-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-gray-300 mb-1 sm:mb-2">
            Professional Title <span className="text-[#C04639]">*</span>
          </label>
          <input
            name="title"
            type="text"
            defaultValue={initialData.title}
            className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-300 placeholder-gray-500"
            placeholder="e.g. Software Engineer, UX Designer"
            required
          />
        </div>

        {/* Website */}
        <div>
          <label className="block text-gray-300 mb-1 sm:mb-2">Website</label>
          <input
            name="website"
            type="url"
            defaultValue={initialData.website}
            className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-300 placeholder-gray-500"
            placeholder="https://www.yourwebsite.com"
          />
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Personal website or portfolio link
          </p>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-gray-300 mb-1 sm:mb-2">
            Skills <span className="text-[#C04639]">*</span>
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              className="flex-grow bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-300 placeholder-gray-500 text-sm sm:text-base"
              placeholder="Add a skill (e.g. JavaScript, Python, UI Design)"
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="px-3 sm:px-4 py-2 bg-[#2a2b2a] text-[#A8C789] rounded hover:bg-[#2a2b2a]"
            >
              <PlusCircle className="w-5 h-5" />
            </button>
          </div>

          {/* Skills display */}
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2 sm:mt-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#2a2b2a] text-white px-2 sm:px-3 py-1 rounded-full flex items-center gap-1 text-xs sm:text-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(index)}
                    className="ml-1 sm:ml-2 text-gray-400 hover:text-white"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Suggestions */}
          <div className="mt-3 sm:mt-4">
            <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">
              Suggestions{" "}
              <span className="text-gray-500">based on your profile</span>
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "TypeScript",
                "Python",
                "Power BI",
                "JavaScript",
                "React",
                "Node.js",
              ].map((skill, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    if (!skills.includes(skill)) {
                      setSkills([...skills, skill]);
                    }
                  }}
                  className="flex items-center gap-1 sm:gap-2 border border-gray-600 text-white px-2 sm:px-3 py-1 rounded hover:bg-[#2a2b2a] text-xs sm:text-sm whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  <PlusCircle className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                  <span className="truncate">{skill}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4 border-t border-[#1D1D1C]">
          <button
            type="submit"
            className="px-3 sm:px-4 py-2 bg-[#D0EFB1] text-black rounded hover:bg-opacity-90 text-sm sm:text-base font-medium"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

// About Form component
const AboutForm: React.FC<FormProps<AboutData>> = ({
  onSubmit,
  initialData = {},
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: AboutData = {
      textArea: formData.get("textArea") as string,
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-300 mb-1 sm:mb-2">
          About Me <span className="text-[#C04639] display-flex">*</span>
        </label>
        <textarea
          name="textArea"
          defaultValue={initialData.textArea}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-300 placeholder-gray-500 h-32 sm:h-48"
          placeholder="Share a bit about yourself, your experience, and what you're passionate about..."
        />
        <p className="block text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
          This section will appear at the top of your profile and gives others a
          quick overview of your background and expertise.
        </p>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-[#1D1D1C]">
      <button
          type="submit"
          className="w-full px-3 sm:px-4 py-2 bg-[#D0EFB1] text-black rounded hover:bg-opacity-90 text-sm sm:text-base font-medium"
        >
          Save
        </button>
      </div>
    </form>
  );
};

// Experience Form Component
const ExperienceForm: React.FC<FormProps<ExperienceData>> = ({
  onSubmit,
  initialData = {},
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: ExperienceData = {
      profile: formData.get("profile") as string, 
      company: formData.get("company") as string,
      startDate: formData.get("startDate") as string,
      endDate: formData.get("endDate") as string,
      description: formData.get("description") as string,
      skills: formData.get("skills") as string,
      url: formData.get("url") as string,
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-300 mb-1 sm:mb-2">
          Profile Headline{" "}
          <span className="text-[#C04639] display-flex">*</span>
        </label>
        <input
          name="profile"
          type="text"
          defaultValue={initialData.profile}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-300 placeholder-gray-500 text-sm sm:text-base"
          placeholder="Enter your job title"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-1 sm:mb-2">
          Company Name <span className="text-[#C04639] display-flex">*</span>
        </label>
        <input
          name="company"
          type="text"
          defaultValue={initialData.company}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-300 placeholder-gray-500 text-sm sm:text-base"
          placeholder="Enter the name of the company you worked for"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <label className="block text-gray-300 mb-1 sm:mb-2">
            Start Date <span className="text-[#C04639] display-flex">*</span>
          </label>
          <input
            name="startDate"
            type="date"
            defaultValue={initialData.startDate}
            className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-500 text-sm sm:text-base"
          />
        </div>

        <div className="w-full sm:w-1/2">
          <label className="block text-gray-300 mb-1 sm:mb-2">
            End Date <span className="text-[#C04639] display-flex">*</span>
          </label>
          <input
            name="endDate"
            type="date"
            defaultValue={initialData.endDate}
            className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-500 text-sm sm:text-base"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-300 mb-1 sm:mb-2">
          Description <span className="text-[#C04639] display-flex">*</span>
        </label>
        <textarea
          name="description"
          defaultValue={initialData.description}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-300 placeholder-gray-500 h-24 sm:h-32 text-sm sm:text-base"
          placeholder="Describe your responsibilities and achievements..."
        />
        <p className="block text-gray-500 text-xs sm:text-sm mt-1">
          For the best results, include your key responsibilities and
          accomplishments.
        </p>
      </div>

      <div>
        <label className="block text-gray-400 mb-1 sm:mb-2 pt-2">
          Skills{" "}
          <span className="text-xs sm:text-sm text-gray-500">
            (we recommend you add your top skills used in this role)
          </span>
        </label>
        <div className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 flex items-center justify-center gap-2">
          <button type="button" className="text-[#A8C789] flex items-center">
            <PlusCircle className="w-5 h-5" />
          </button>
          <span className="text-gray-500 text-sm">Add skill</span>
        </div>
      </div>

      <div>
        <label className="block text-gray-400 mb-1 sm:mb-2 pt-1 sm:pt-2">
          URL (optional)
        </label>
        <input
          name="url"
          type="text"
          defaultValue={initialData.url}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-300 placeholder-gray-500 text-sm sm:text-base"
          placeholder="Add a link"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-[#1D1D1C]">
        <button
          type="submit"
          className="w-full px-3 sm:px-4 py-2 bg-[#D0EFB1] text-black rounded hover:bg-opacity-90 text-sm sm:text-base font-medium"
        >
          Save
        </button>
      </div>
    </form>
  );
};

// Certification Form Component
const CertificationForm: React.FC<FormProps<CertificationData>> = ({
  onSubmit,
  initialData = {},
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: CertificationData = {
      study: formData.get("study") as string,
      school: formData.get("school") as string,
      startDate: formData.get("startDate") as string,
      endDate: formData.get("endDate") as string,
      description: formData.get("description") as string,
      grade: formData.get("grade") as string,
      url: formData.get("url") as string,
      skills: formData.get("skills") as string,
      media: formData.get("media") as string,
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-300 mb-1 sm:mb-2">
          Field of Study <span className="text-[#C04639] display-flex">*</span>
        </label>
        <input
          name="study"
          type="text"
          defaultValue={initialData.study}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-300 placeholder-gray-500 text-sm sm:text-base"
          placeholder="Enter your field of study"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-1 sm:mb-2">
          School Name <span className="text-[#C04639] display-flex">*</span>
        </label>
        <input
          name="school"
          type="text"
          defaultValue={initialData.school}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-300 placeholder-gray-500 text-sm sm:text-base"
          placeholder="Enter the name of the school"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/2">
          <label className="block text-gray-300 mb-1 sm:mb-2">
            Start Date <span className="text-[#C04639] display-flex">*</span>
          </label>
          <input
            name="startDate"
            type="date"
            defaultValue={initialData.startDate}
            className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-500 text-sm sm:text-base"
          />
        </div>

        <div className="w-full sm:w-1/2">
          <label className="block text-gray-300 mb-1 sm:mb-2">
            End Date <span className="text-[#C04639] display-flex">*</span>
          </label>
          <input
            name="endDate"
            type="date"
            defaultValue={initialData.endDate}
            className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-500 text-sm sm:text-base"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-300 mb-1 sm:mb-2">Description</label>
        <textarea
          name="description"
          defaultValue={initialData.description}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-300 placeholder-gray-500 h-24 sm:h-32 text-sm sm:text-base"
          placeholder="Enter certification description"
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-1 sm:mb-2">
          Grade<span className="text-[#C04639] display-flex">*</span>
        </label>
        <input
          name="grade"
          type="text"
          defaultValue={initialData.grade}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-300 placeholder-gray-500 text-sm sm:text-base"
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-1 sm:mb-2">
          URL<span className="text-[#C04639] display-flex">*</span>{" "}
          <span className="text-xs sm:text-sm pl-1 sm:pl-2 text-gray-500">
            (input the link of your NFT certification)
          </span>
        </label>
        <input
          name="url"
          type="text"
          defaultValue={initialData.url}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-300 placeholder-gray-500 text-sm sm:text-base"
          placeholder="Enter certification URL"
        />
      </div>

      <div>
        <label className="block text-gray-400 mb-1 sm:mb-2 pt-1 sm:pt-2">
          Skills{" "}
          <span className="text-xs sm:text-sm text-gray-500">
            (we recommend you add your top skills used in this role)
          </span>
        </label>
        <div className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 flex items-center justify-center gap-2">
          <button type="button" className="text-[#A8C789] flex items-center">
            <PlusCircle className="w-5 h-5" />
          </button>
          <span className="text-gray-500 text-sm">Add skill</span>
        </div>
      </div>

      <div>
        <label className="block text-gray-400 mb-1 sm:mb-2 pt-1 sm:pt-2">
          Media{" "}
          <span className="text-xs sm:text-sm text-gray-500">(optional)</span>
        </label>
        <div className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 flex items-center justify-center gap-2">
          <button type="button" className="text-[#A8C789] flex items-center">
            <PlusCircle className="w-5 h-5" />
          </button>
          <span className="text-gray-500 text-sm">Add media</span>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-[#1D1D1C]">
        <button
          type="submit"
          className="w-full px-3 sm:px-4 py-2 bg-[#D0EFB1] text-black rounded hover:bg-opacity-90 text-sm sm:text-base font-medium"
        >
          Save
        </button>
      </div>
    </form>
  );
};

// Skills Form Component
const SkillsForm: React.FC<FormProps<SkillData>> = ({
  onSubmit,
  // initialData = {},
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: SkillData = {
      name: formData.get("name") as string,
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-300 mb-1 sm:mb-2">
          Skills<span className="text-[#C04639] display-flex">*</span>
        </label>

        <div className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 flex items-center justify-center gap-2">
          <button type="button" className="text-[#A8C789] flex items-center">
            <PlusCircle className="w-5 h-5" />
          </button>
          <span className="text-gray-500 text-sm">Add skill</span>
        </div>
      </div>

      {/* Suggestions */}
      <div>
        <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">
          Suggestions{" "}
          <span className="text-gray-500">based on your profile</span>
        </p>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
          {[
            "Front-End Development",
            "Front-End Development",
            "Front-End Development",
            "Front-End Development",
            "Front-End Development",
            "Front-End Development",
          ].map((skill, index) => (
            <button
              key={index}
              type="button"
              className="flex items-center gap-1 sm:gap-2 border border-gray-600 text-white px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm"
            >
              <PlusCircle className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
              <span className="truncate">{skill}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-3 pt-4 border-t border-[#1D1D1C]">
        <button
          type="submit"
          className="w-full px-3 sm:px-4 py-2 bg-[#D0EFB1] text-black rounded hover:bg-opacity-90 text-sm sm:text-base font-medium mt-4"
        >
          Save
        </button>
      </div>
    </form>
  );
};

// Add this CSS class to enable a smaller breakpoint than Tailwind's 'sm'
// You'll need to add this to your global CSS or use a utility class solution
// @media (min-width: 480px) {
//   .xs\:grid-cols-2 {
//     grid-template-columns: repeat(2, minmax(0, 1fr));
//   }
// }

export {
  ProfileForm,
  AboutForm,
  ExperienceForm,
  CertificationForm,
  SkillsForm,
};
export type {
  ProfileData,
  AboutData,
  ExperienceData,
  CertificationData,
  SkillData,
};
