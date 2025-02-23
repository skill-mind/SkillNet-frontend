import "react-datepicker/dist/react-datepicker.css";
import { PlusCircle } from "lucide-react";

// Types and Interfaces
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

// Experience Form Component
const ExperienceForm: React.FC<FormProps<ExperienceData>> = ({
  onSubmit,
  initialData = {},
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: ExperienceData = {
      profile: formData.get("title") as string,
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
        <label className="block text-gray-300 mb-2">
          Profile Headline{" "}
          <span className="text-[#C04639] display-flex ">*</span>
        </label>
        <input
          name="profile"
          type="text"
          defaultValue={initialData.profile}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray placeholder-gray-500"
          placeholder="Enter the name of the company you worked for"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-2">
          Company Name <span className="text-[#C04639] display-flex ">*</span>
        </label>
        <input
          name="company"
          type="text"
          defaultValue={initialData.company}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray placeholder-gray-500"
          placeholder="Enter the name of the company you worked for"
        />
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block text-gray-300 mb-2">
            Start Date <span className="text-[#C04639] display-flex ">*</span>
          </label>
          <input
            name="startDate"
            type="date"
            defaultValue={initialData.startDate}
            className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-500"
          />
        </div>

        <div className="w-1/2">
          <label className="block text-gray-300 mb-2">
            End Date <span className="text-[#C04639] display-flex ">*</span>
          </label>
          <input
            name="endDate"
            type="date"
            defaultValue={initialData.endDate}
            className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-300 mb-2">
          Description <span className="text-[#C04639] display-flex ">*</span>
        </label>
        <textarea
          name="description"
          defaultValue={initialData.description}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray placeholder-gray-500 h-32"
          placeholder="Write your message here..."
        />
        <p className="block text-gray-500 mb-2">
          For the best help, share details, steps tried, and error screenshots.
        </p>
      </div>

      <div>
        <label className="block text-gray-400 mb-2 pt-2">
          Skills{" "}
          <span className="text-sm text-gray-500">
            (we recommend you add your top skills used in this role)
          </span>
        </label>
        <div className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 flex items-center justify-center gap-2">
          <button
            type="button"
            className="text-[#A8C789] text-xl flex items-center"
          >
            <PlusCircle />
          </button>
          <span className="text-gray-500">Add skill</span>
        </div>
      </div>

      <div>
        <label className="block text-gray-400 mb-2 pt-2">URL (optional)</label>
        <input
          name="url"
          type="text"
          defaultValue={initialData.url}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-white"
          placeholder="Add a link"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-[#1D1D1C]">
        <button
          type="submit"
          className=" w-full px-4 py-2 bg-[#D0EFB1] text-black rounded hover:bg-opacity-90"
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
        <label className="block text-gray-300 mb-2">
          Field of Study <span className="text-[#C04639] display-flex ">*</span>
        </label>
        <input
          name="study"
          type="text"
          defaultValue={initialData.study}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray placeholder-gray-500"
          placeholder="Enter your field of study"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-2">
          School Name <span className="text-[#C04639] display-flex ">*</span>
        </label>
        <input
          name="school"
          type="text"
          defaultValue={initialData.school}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray placeholder-gray-500"
          placeholder="Enter the name of the school"
        />
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block text-gray-300 mb-2">
            Start Date <span className="text-[#C04639] display-flex ">*</span>
          </label>
          <input
            name="startDate"
            type="date"
            defaultValue={initialData.startDate}
            className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-500"
          />
        </div>

        <div className="w-1/2">
          <label className="block text-gray-300 mb-2">
            End Date <span className="text-[#C04639] display-flex ">*</span>
          </label>
          <input
            name="endDate"
            type="date"
            defaultValue={initialData.endDate}
            className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-300 mb-2">Description</label>
        <textarea
          name="description"
          defaultValue={initialData.description}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-white h-32"
          placeholder="Enter certification description"
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-2">
          Grade<span className="text-[#C04639] display-flex ">*</span>
        </label>
        <input
          name="grade"
          type="text"
          defaultValue={initialData.grade}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray placeholder-gray-500"
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-2">
          URL<span className="text-[#C04639] display-flex ">*</span>{" "}
          <span className="pl-2 text-gray-500">
            (input the lnk of your NFT certification)
          </span>
        </label>
        <input
          name="school"
          type="text"
          defaultValue={initialData.school}
          className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 text-gray placeholder-gray-500"
          placeholder="Enter the name of the school"
        />
      </div>

      <div>
        <label className="block text-gray-400 mb-2 pt-2">
          Skills{" "}
          <span className="text-sm text-gray-500">
            (we recommend you add your top skills used in this role)
          </span>
        </label>
        <div className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 flex items-center justify-center gap-2">
          <button
            type="button"
            className="text-[#A8C789] text-xl flex items-center"
          >
            <PlusCircle />
          </button>
          <span className="text-gray-500">Add skill</span>
        </div>
      </div>

      <div>
        <label className="block text-gray-400 mb-2 pt-2">
          Media <span className="text-sm text-gray-500">(optional)</span>
        </label>
        <div className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 flex items-center justify-center gap-2">
          <button
            type="button"
            className="text-[#A8C789] text-xl flex items-center"
          >
            <PlusCircle />
          </button>
          <span className="text-gray-500">Add media</span>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-[#1D1D1C]">
        <button
          type="submit"
          className=" w-full px-4 py-2 bg-[#D0EFB1] text-black rounded hover:bg-opacity-90"
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
        <label className="block text-gray-300 mb-2">
          Skills<span className="text-[#C04639] display-flex ">*</span>
        </label>

        <div className="w-full bg-[#1a1b1a] border border-[#313130] rounded p-2 flex items-center justify-center gap-2">
          <button
            type="button"
            className="text-[#A8C789] text-xl flex items-center"
          >
            <PlusCircle />
          </button>
          <span className="text-gray-500">Add media</span>
        </div>
      </div>

      {/* Suggestions */}
      <div>
        <p className="text-gray-400 text-sm mb-2">
          Suggestions{" "}
          <span className="text-gray-500">based on your profile</span>
        </p>
        <div className="grid grid-cols-3 gap-2">
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
              className="flex items-center gap-2 border border-gray-600 text-white px-4 py-2 rounded"
            >
              <PlusCircle className="w-4 h-4 text-gray-400" />
              {skill}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-3 pt-4 border-t border-[#1D1D1C] ">
        <button
          type="submit"
          className=" w-full px-4 py-2 bg-[#D0EFB1] text-black rounded hover:bg-opacity-90 mt-4" 
        >
          Save
        </button>
      </div>
    </form>
  );
};

export { ExperienceForm, CertificationForm, SkillsForm };
export type { ExperienceData, CertificationData, SkillData };
