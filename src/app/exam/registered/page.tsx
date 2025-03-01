'use client';

import React from 'react';
import Image from 'next/image';
import Arrow from '@/public/arrow-left.svg';
import Vector from '@/public/Vector.svg';
import { MessageCircle } from 'lucide-react';
import { useChatbot } from '../components/ChatbotContext';
import ChatbotModal from '../components/ChatbotModal';
import Link from 'next/link';

const RegisteredPage = () => {
  const { isChatbotOpen, toggleChatbot, closeChatbot } = useChatbot();

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white pt-24 px-4 sm:px-8 lg:px-20">
      <div className="container mx-auto py-8">
        <div className="mb-8 flex justify-between items-center">
          <Link href="/exam/feed" className="flex items-center gap-2 text-[#ABABAB]">
            <Image src={Arrow} alt="Back" width={16} height={16} />
            <span>Back</span>
          </Link>

          <div
            className="flex items-center gap-2 text-[#ABABAB] cursor-pointer"
            onClick={toggleChatbot}
          >
            <span>Chatbot</span>
            <MessageCircle size={16} />
          </div>
        </div>

        <div className="mt-12 text-center">
          <Image
            src={Vector}
            alt="No registered exams"
            width={200}
            height={200}
            className="mx-auto mb-6"
          />
          <h2 className="text-2xl font-semibold mb-4">No Registered Exams</h2>
          <p className="text-[#ABABAB] max-w-md mx-auto">
            You haven't registered for any exams yet. Browse available exams and register to see them here.
          </p>

          <Link href="/exam/feed">
            <button className="mt-8 px-6 py-3 bg-transparent border border-[#D0EFB1] text-white rounded-md hover:bg-[#1E1E1D] transition-colors">
              BROWSE EXAMS
            </button>
          </Link>
        </div>

        {/* Chatbot Modal */}
        <ChatbotModal isOpen={isChatbotOpen} onClose={closeChatbot} />
      </div>
    </div>
  );
};

export default RegisteredPage;
