import { EllipsisVertical, Search } from "lucide-react";
import React from "react";

function Input({
  type,
  name,
  label,
  placeholder,
  value,
  onChange,
}: {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="flex text-[#9596A0] text-[0.875rem] mb-1">
        {label}
      </label>
      <div className="relative flex justify-between items-center border-[1px] border-[#252625] rounded-[0.5rem]">
      <Search className="absolute left-4" /> 
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-transparent outline-none border-[#252625] text-white text-[0.875rem] w-full md:w-[26rem] pl-12 pr-4 py-[0.75rem] rounded-[0.5rem]" // Add padding to make space for the icon
        />
        </div>
    </div>
  );
}

export default Input;
