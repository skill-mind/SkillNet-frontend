'use client';

import { MessageCircle } from 'lucide-react';
import { useChatbot } from '../components/ChatbotContext';
import ChatbotModal from '../components/ChatbotModal';

const Page = () => {
    const { isChatbotOpen, toggleChatbot, closeChatbot } = useChatbot();

    return (
        <div className="min-h-screen bg-[#101110] pt-24 px-4 sm:px-6 lg:px-[100px]">
            <div className="my-14 flex justify-between items-center text-white">
                <h1 className="text-3xl sm:text-4xl font-semibold text-white">
                    Exam Results
                </h1>

                <div
                    className="flex space-x-3 items-center cursor-pointer"
                    onClick={toggleChatbot}
                >
                    <div className="font-extralight text-sm">Chatbot</div>
                    <MessageCircle className="w-4 h-4 font-semibold" />
                </div>
            </div>

            <div className="text-white">
                <p>You have no exam results yet.</p>
            </div>

            {/* Chatbot Modal */}
            <ChatbotModal isOpen={isChatbotOpen} onClose={closeChatbot} />
        </div>
    );
};

export default Page;
