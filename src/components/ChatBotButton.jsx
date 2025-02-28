// components/ChatBotButton.tsx
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import ChatbotModal from './ChatbotModal';

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
        <MessageSquare className="mr-3" size={20} />
        <span>Chat Bot</span>
      </button>
      <ChatbotModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ChatBotButton;