"use client";
import { CheckCheck, EllipsisVertical, Search, Mic, Send, Smile, ChevronLeft } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Input from "./input";
import { useState } from "react";
import userProfile from "@/public/img/Avatar.png"
// import userProfile from "@/public/img/userProfile.png" // image file returns error (file is corrupted)

function Messages() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All"); // Track the selected filter
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Sample messages (this can be replaced with actual dynamic data)
  const messages = [
    { id: 1, name: "Satoshi Nakamoto", message: "Hi, how are you?", status: "Unread" },
    { id: 2, name: "Vitalik Buterin", message: "Let's catch up later!", status: "Favourite" },
    { id: 3, name: "Elon Musk", message: "Hey, we need to talk.", status: "Archived" },
    { id: 4, name: "Bill Gates", message: "Excited to chat!", status: "Unread" },
  ];

  // Filter messages based on the selected filter
  const filteredMessages = messages.filter((msg) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Unread") return msg.status === "Unread";
    if (selectedFilter === "Favourite") return msg.status === "Favourite";
    if (selectedFilter === "Archived") return msg.status === "Archived";
    return false;
  });

  // Filter messages based on the search query
  const filteredBySearch = filteredMessages.filter((msg) =>
    msg.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="my-[10em] px-4 sm:px-8 lg:px-[100px] flex w-full h-screen">
      <div className="flex w-full h-full">
        {/* Side Nav containing messages */}
        <div className="w-full md:w-1/3 lg:w-1/3 p-4 border-r border-[#252625] overflow-hidden md:block hidden">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-2xl">Messages</h4>
              <EllipsisVertical color="#9596A0" />
            </div>
            <Input
              label=""
              name="search"
              placeholder="Search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Handle search query change
            />

            <div className="flex flex-wrap gap-2">
              {/* Filter Buttons */}
              {["All", "Unread", "Favourite", "Archived"].map((filter) => (
                <div
                  key={filter}
                  className={`border border-[#252625] p-1 text-xs text-center cursor-pointer hover:bg-[#313130] transition-colors duration-300 rounded-[0.4rem] flex-1 min-w-[60px] ${
                    selectedFilter === filter ? "bg-[#313130]" : ""
                  }`}
                  onClick={() => setSelectedFilter(filter)} // Update selected filter on click
                >
                  {filter}
                </div>
              ))}
            </div>

            {/* Display Filtered Messages */}
            {filteredBySearch.map((msg) => (
              <ContactMessage
                key={msg.id}
                imgSrc={userProfile}
                name={msg.name}
                message={msg.message}
              />
            ))}
          </div>
        </div>

        {/* Chat editor screen */}
        <div className="w-full md:w-2/3 lg:w-2/3 flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-[#252625]">
            <div className="flex items-center space-x-3">
              {/* back button */}
              <ChevronLeft className="block md:hidden" />
              <Image
                src={userProfile}
                alt="user profile image"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h4 className="font-semibold text-lg text-[#b9b9b9]">Satoshi Nakamoto</h4>
            </div>

            <div className="flex items-center space-x-4">
              <Search size={20} color="#b9b9b9" />
              <EllipsisVertical size={20} color="#b9b9b9" />
            </div>
          </div>

          <div className="flex-grow p-4 overflow-auto">
            {/* Add chat messages here */}
          </div>
          <div className="flex justify-end p-4">
            <div className="bg-[#1e1e1e] p-4 rounded-md">
              <p className="text-[14px] text-[#bbb]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni, totam ipsum perferendis libero iusto porro expedita deleniti officiis delectus?
              </p>
              <div className="flex justify-end items-center space-x-2 mt-2">
                <small className="text-[#888]">12:43 AM</small>
                <CheckCheck color="white" size={18} />
              </div>
            </div>
          </div>

          <div className="flex justify-end p-4">
            <div className="bg-[#1e1e1e] p-4 rounded-md">
              <p className="text-[14px] text-[#bbb]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni, totam ipsum perferendis libero iusto porro expedita deleniti officiis delectus?
              </p>
              <div className="flex justify-end items-center space-x-2 mt-2">
                <small className="text-[#888]">12:43 AM</small>
                <CheckCheck color="white" size={18} />
              </div>
            </div>
          </div>

          <div className="p-4 flex items-center space-x-4">
            <div className="p-1 pl-4 pr-4 flex items-center space-x-4 border-[#252625] border rounded-[0.5em] w-full">
              <div className="flex space-x-4">
                <Mic size={24} color="#555" className="cursor-pointer" />
                <Smile size={24} color="#555" className="cursor-pointer" />
              </div>

              <input
                type="text"
                placeholder="Type a message..."
                className="flex-grow p-2 border-l border-r bg-transparent border-[#252625] text-[#555] placeholder:text-[#888] placeholder:italic focus:outline-none focus:border-[#555]"
              />

              <Send
                size={34}
                color="#555"
                className="cursor-pointer  bg-white hover:bg-[#3a3a3a] hover:text-white p-2 rounded-full transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactMessage = ({ name, message, imgSrc }: { name: string; message: string; imgSrc: string | StaticImageData }) => {
  return (
    <div className="flex items-center justify-center space-x-4 p-4 pt-0 mt-0 w-full m-0">
      <div className="min-w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] overflow-hidden rounded-full bg-gray-300 flex justify-center items-center">
        <Image
          src={imgSrc}
          width={60}
          height={60}
          alt="user profile image"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col w-full pr-4 pb-2 border-b border-[#252625]">
        <div className="flex items-center space-x-2">
          <h4 className="text-xs font-semibold text-[#b9b9b9]">{name}</h4>
        </div>

        <div className="text-xs text-[#727272] flex items-center space-x-3">
          <CheckCheck color="white" size={18} />
          <p className="truncate text sm w-full">{message}</p>

          <div className="flex flex-col items-end ml-4">
            <small className="text-[#bbb]">Friday</small>
            <EllipsisVertical size={20} color="#555" className="mt-1 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
