import { Bookmark, SendHorizonal } from "lucide-react";
import React from "react";

export default function Dropdown() {
  return (
    <div className="absolute right-0 -top-20 p-2 mt-2 w-40 bg-[#101110] text-white border border-gray-700 rounded-md shadow-lg">
      <button className="flex items-center space-x-2 px-4 py-2 w-full text-left">
        <Bookmark size={16} />
        <span>Save</span>
      </button>
      <div className="border-t border-gray-700"></div>
      <button className="flex items-center space-x-2 px-4 py-2 w-full text-left">
        <SendHorizonal size={16} />
        <span>Share</span>
      </button>
    </div>
  );
}
