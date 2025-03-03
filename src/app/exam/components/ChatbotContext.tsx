'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ChatbotContextType {
    isChatbotOpen: boolean;
    openChatbot: () => void;
    closeChatbot: () => void;
    toggleChatbot: () => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const ChatbotProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    const openChatbot = () => setIsChatbotOpen(true);
    const closeChatbot = () => setIsChatbotOpen(false);
    const toggleChatbot = () => setIsChatbotOpen(prev => !prev);

    return (
        <ChatbotContext.Provider value={{ isChatbotOpen, openChatbot, closeChatbot, toggleChatbot }}>
            {children}
        </ChatbotContext.Provider>
    );
};

export const useChatbot = (): ChatbotContextType => {
    const context = useContext(ChatbotContext);
    if (context === undefined) {
        throw new Error('useChatbot must be used within a ChatbotProvider');
    }
    return context;
}; 