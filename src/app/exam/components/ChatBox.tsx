import Image from "next/image";
import ChatBotImage from "../../../public/chat-bot.png";
export const ChatBot = () => {
  return (
    <>
      <div className="w-full flex items-end justify-end space-x-2">
        <span className="text-md font-normal text-[#ABABAB]">Chatbox</span>
        <Image alt="chat bot" src={ChatBotImage} width={24} height={24} />
      </div>
    </>
  );
};
