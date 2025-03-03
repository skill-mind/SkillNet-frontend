'use client'
import Image from "next/image";
import { useChatbot } from './ChatbotContext';
import ChatBotImage from "../../../public/chat-bot.png";
import ChatbotModal from "@/components/ChatbotModal";

export const ChatBot = () => {
  const { toggleChatbot, isChatbotOpen, closeChatbot } = useChatbot();

  return (
    <>
      <button onClick={toggleChatbot} className="w-full flex items-end justify-end text-white hover:text-gray-300 space-x-2">
        <span className="text-md font-normal text-[#ABABAB]">Chatbox</span>
        <Image alt="chat bot" src={ChatBotImage} width={24} height={24} />
      </button>
      <ChatbotModal isOpen={isChatbotOpen} onClose={closeChatbot} />
    </>
  );
};
