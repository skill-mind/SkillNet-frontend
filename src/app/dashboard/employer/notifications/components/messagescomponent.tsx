"use client";
import {
  CheckCheck,
  EllipsisVertical,
  Search,
  Mic,
  Send,
  Smile,
  ChevronLeft,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useRef } from "react";
import userProfile2 from "@/public/img/astronaut.svg";

function Messages() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [isMobileView, setIsMobileView] = useState<boolean>(true);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [inputMessage, setInputMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const sidebarMessages = [
    {
      id: 1,
      name: "Satoshi Nakamoto",
      message: "Hi, how are you?",
      status: "Unread",
    },
    {
      id: 2,
      name: "Elon Musk",
      message: "Hey, we need to talk.",
      status: "Archived",
    },
  ];

  const chatMessages = [
    {
      id: 1,
      text: "What videos and materials can you recommend for a beginner started web design",
      timestamp: "12:43 AM",
      isUser: true,
      isRead: true,
    },
    {
      id: 2,
      text: "You could start with introduction to design by Flora Osatuyi",
      timestamp: "12:45 AM",
      isUser: false,
      isRead: true,
    },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileView(isMobile);
      setShowSidebar(!isMobile);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const filteredMessages = sidebarMessages.filter((msg) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Unread") return msg.status === "Unread";
    return msg.status === selectedFilter;
  });

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const toggleSidebar = () => {
    if (isMobileView) {
      setShowSidebar(!showSidebar);
    }
  };

  const handleChatSelect = () => {
    if (isMobileView) {
      setShowSidebar(false);
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  return (
    <div className="flex w-full h-[75vh]">
      <div className="flex w-full h-full relative">
        <div className={`${
          isMobileView ? (showSidebar ? 'block absolute z-10 w-full bg-inherit' : 'hidden') : 'block'
        } md:w-1/3 lg:w-1/3 p-4 h-full overflow-y-auto`}>
          <div className="flex flex-col space-y-6 border border-[#222220] p-2 h-full">
            <div className="flex flex-wrap gap-2 ">
              {["All", "Unread", "Archived"].map((filter) => (
                <div
                  key={filter}
                  className={`border border-[#1D1D1C] px-[1.25rem] py-[0.375rem] text-base font-medium text-[#ABABAB] text-center cursor-pointer hover:bg-[#313130] transition-colors duration-300 rounded-[0.4rem] ${
                    selectedFilter === filter ? "bg-[#161716]  border-[#3B3B3A] text-[#ABC789]" : ""
                  }`}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </div>
              ))}
              <div className="w-[90%] border-t border-[#222220] mx-auto" />
            </div>

            <div>
              {filteredMessages.map((msg) => (
                <div key={msg.id} onClick={handleChatSelect} className="cursor-pointer">
                  <ContactMessage
                    imgSrc={userProfile2}
                    name={msg.name}
                    message={msg.message}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${
          isMobileView && showSidebar ? 'hidden' : 'flex'
        } w-full md:w-2/3 lg:w-2/3 flex-col h-full bg-[#121212]`}>
          <div className="flex items-center justify-between p-4 ">
            <div className="flex items-center space-x-3">
              {isMobileView && (
                <ChevronLeft 
                  className="cursor-pointer" 
                  onClick={toggleSidebar}
                />
              )}
              <Image
                src={userProfile2}
                alt="user profile image"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h4 className="font-semibold text-lg text-[#b9b9b9]">
                Satoshi Nakamoto
              </h4>
            </div>

            <div className="flex items-center space-x-4">
              <Search size={20} color="#b9b9b9" />
              <EllipsisVertical size={20} color="#b9b9b9" />
            </div>
          </div>

              <div className="border-b border-[#252625] w-[90%] mx-auto"/>
          <div ref={messagesContainerRef} className="flex-grow   p-4 overflow-auto flex flex-col space-y-4 justify-end">
            {chatMessages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-3 rounded-lg text- ${
                  msg.isUser ? 'bg-[#202120] text-gray-200' : 'bg-[#161716] '
                }`}>
                  <p className="text-sm">{msg.text}</p>
                  <div className="flex items-center justify-end mt-1 space-x-1">
                    <span className="text-xs text-gray-400">{msg.timestamp}</span>
                    {msg.isRead && <CheckCheck size={12} className="text-gray-400" />}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4">
            <div className="p-1 pl-4 pr-4 flex items-center space-x-4 border-[#252625] border rounded-[0.5em] w-full">
              <div className="flex space-x-4">
                <Mic size={24} color="#555" className="cursor-pointer" />
                <Smile size={24} color="#555" className="cursor-pointer" />
              </div>
              <input
                type="text"
                value={inputMessage}
                onChange={handleMessageChange}
                placeholder="Type a message..."
                className="flex-grow p-2 border-r bg-transparent border-[#252625] text-[#555] placeholder:text-[#888] placeholder:italic focus:outline-none focus:border-[#555]"
              />
              <Send
                size={34}
                color="#555"
                className="cursor-pointer bg-[#A8C789] hover:bg-[#3a3a3a] hover:text-white p-2 rounded-full transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactMessage = ({
  name,
  message,
  imgSrc,
}: {
  name: string;
  message: string;
  imgSrc: string | StaticImageData;
}) => {
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
          <h4 className="text-sm font-meduim text-[#FCFCFC]">{name}</h4>
        </div>
        <div className="text-xs text-[#ABABAB] flex items-center space-x-3">
          <CheckCheck color="white" size={18} />
          <p className="truncate text sm w-full">{message}</p>
          <div className="flex flex-col items-end ml-4">
            <small className="text-[#696969] text-xs">Friday</small>
            <EllipsisVertical
              size={20}
              color="#555"
              className="mt-1 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;