"use client";
import { CheckCheck, EllipsisVertical, Search, Mic, Send, Smile, ChevronLeft } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Input from "./input-messages";
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

    // more items for demonstration

    { id: 5, name: "Satoshi Nakamoto", message: "Hi, how are you?", status: "Unread" },
    { id: 6, name: "Vitalik Buterin", message: "Let's catch up later!", status: "Favourite" },
    { id: 7, name: "Elon Musk", message: "Hey, we need to talk.", status: "Archived" },
    { id: 8, name: "Bill Gates", message: "Excited to chat!", status: "Unread" },
    { id: 9, name: "Bill Gates", message: "Excited to chat!", status: "Unread" },
    { id: 10, name: "Bill Gates", message: "Excited to chat!", status: "Unread" },
    { id: 11, name: "Bill Gates", message: "Excited to chat!", status: "Unread" }
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
    <div className="bg-[#101110] mt-0 px-4 sm:px-8 lg:px-[100px] flex w-full h-[85vh]">
      <div className="flex w-full h-full">
        {/* Side Nav containing messages */}
        <div
          className="w-full md:w-1/3 lg:w-1/3 p-1 pt-0 border-r border-[#252625] md:block hidden h-full"
          style={{
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none", 
          }}
        >
          <div className="flex flex-col space-y-6">
            <div className="sticky pr-5 top-0 left-0 bg-[#101110] h-[142px] z-10">
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-semibold mb-2">Messages</h4>
                <EllipsisVertical color="#9596A0" />
              </div>
            
              <Input
                label=""
                name="search"
                placeholder="Search..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
              />

              <div className="flex flex-wrap gap-2">
                {/* Filter Buttons */}
                {["All", "Unread", "Favourite", "Archived"].map((filter) => (
                  <div
                    key={filter}
                    className={`border border-[#252625] mt-2 px-4 py-1 text-[#ABABAB] text-base text-center cursor-pointer hover:bg-[#313130] transition-colors duration-300 rounded-[0.4rem] w-fit ${
                      selectedFilter === filter ? "bg-[#313130] text-[#a9c789]" : ""
                    }`}
                    onClick={() => setSelectedFilter(filter)}
                  >
                    {filter}
                  </div>
                ))}
              </div>
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
        <div className=" w-full md:w-2/3 lg:w-2/3 flex flex-col h-full ">
          <div className="sticky z-10 flex items-center justify-between p-4 mb-2 border-b border-[#252625]">
            <div className=" flex items-center space-x-3">
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

          <div className="relative flex flex-col h-[560px]">
              {/* Static Background */}
              <div className="absolute inset-0"></div>
              {/* Scrollable Chat Container */}
              <div 
                className="relative flex-1 overflow-y-auto scrollbar-hide"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                {/* Message Container */}
                <div className="flex flex-col justify-end min-h-full">
                  <div className="flex justify-end w-full p-4">
                    <div className="bg-[#1e1e1e] p-4 rounded-md">
                      <p className="text-base text-[#bbb] mr-20 leading-[28px] tracking-wider">
                        Gm Gm, Satoshi. I have been following your teachings and it&apos;s been really helpful to me. I do have a thing to suggest regarding one of your programs.
                      </p>
                      <div className="flex justify-end items-center space-x-2 mt-2">
                        <small className="text-[#888]">12:43 AM</small>
                        <CheckCheck color="white" size={18} />
                      </div>
                    </div>
                  </div>

                  {/* duplicated messages for demonstration */}
                  {Array(10).fill(null).map((_, i) => (
                    <div key={i} className="flex justify-end w-full p-4">
                      <div className="bg-[#1e1e1e] p-4 rounded-md">
                        <p className="text-base text-[#bbb] mr-20 leading-[28px] tracking-wider">
                        Oh that&apos;s awesome. I&apos;m glad my resources have been helpful and I&apos;m open to helpful suggestions.
                        </p>
                        <div className="flex justify-end items-center space-x-2 mt-2">
                          <small className="text-[#888]">12:43 AM</small>
                          <CheckCheck color="white" size={18} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            {/* </div> */}

            {/* Input Box */}
            <div className="relative p-4 flex items-center space-x-4 z-10">
              <div className="p-1 pl-4 pr-4 flex items-center space-x-4 border-[#252625] border rounded-[0.5em] w-full">
                <div className="flex space-x-4">
                  <Mic size={24} color="#555" className="cursor-pointer" />
                  <Smile size={24} color="#555" className="cursor-pointer" />
                </div>

                <input
                  type="text"
                  placeholder="Type a message"
                  className="flex-grow p-2 border-l border-r bg-transparent border-[#252625] text-[#555] placeholder:text-[#888] focus:outline-none focus:border-[#555]"
                />

                <Send
                  size={34}
                  color="black"
                  className="cursor-pointer bg-[#a9c789] hover:bg-[#3a3a3a] hover:text-white p-2 rounded-full transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactMessage = ({ name, message, imgSrc }: { name: string; message: string; imgSrc: string | StaticImageData }) => {
  return (
    <div className="flex pr-5 items-center justify-center space-x-4 p-0 mb-4 mt-0 w-full h-[65px] m-0">  
      <div className="min-w-[65px] h-[65px] sm:w-[60px] sm:h-[60px] overflow-hidden rounded-full bg-gray-300 flex justify-center items-center">
        <Image
          src={imgSrc}
          width={65}
          height={65}
          alt="user profile image"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex items-center w-full h-[65px] border-b border-[#252625]">
        <div className="w-full h-[65px] text-xs text-[#727272] flex flex-col items-start">
          <h4 className="text-base font-semibold text-[#fcfcfc] bg-transparent">{name}</h4>
          <div className="flex gap-2 w-full pt-1">
            <CheckCheck color="#ABABAB" size={20} />
            <p className="truncate text-sm text-[#ABABAB] w-full ">{message}</p>
          </div>
        </div>
        <div className=" flex flex-col items-center ml-4 mb-2 w-[40px]">
          <small className="text-xs text-[#727272]">Friday</small>
          <EllipsisVertical size={20} color="#ABABAB" className="mt-1 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Messages;
