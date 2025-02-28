// components/ChatBotButton.tsx
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import ChatbotModal from './ChatbotModal';
import robotic from '../public/img/robotic.svg'
import Image from 'next/image';


const ChatBotButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-[#FFFFFF1A] rounded-lg transition-colors w-full"
      >

        <Image className='mr-3' src={robotic} size={20} />
        <span>AI Chatbot</span>
      </button>
      <ChatbotModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ChatBotButton;