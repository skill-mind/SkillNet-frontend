import { Search } from "lucide-react";
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
      <label htmlFor={name} className="flex text-[#9596A0] text-[0.75rem] mb-1">
        {label}
      </label>
      <div className="relative flex justify-between items-center border-[1px] border-[#252625] rounded-[0.5rem]">
        <Search className="absolute left-4"  size={20} color="#cfd1cf"/>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-transparent outline-none border-[#252625] text-white text-[0.75rem] w-full md:w-[20rem] pl-10 pr-4 py-[0.5rem] rounded-[0.5rem]" // Reduced size for input
        />
      </div>
    </div>
  );
}

export default Input;
