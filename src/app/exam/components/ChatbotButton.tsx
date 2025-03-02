'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useChatbot } from './ChatbotContext';

const ChatbotButton: React.FC = () => {
    const { toggleChatbot } = useChatbot();

    return (
        <button
            onClick={toggleChatbot}
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            aria-label="Toggle chatbot"
        >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">Chatbot</span>
        </button>
    );
};

export default ChatbotButton; 