'use client';

import React, { useState } from 'react';
import { ArrowLeft, Search, Send, MoreVertical, Mic, Smile } from 'lucide-react';

interface ChatbotModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const ChatbotModal: React.FC<ChatbotModalProps> = ({ isOpen, onClose }) => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Gm Gm, Satoshi. I have been following your teachings and it's been really helpful to me. I do have a thing to suggest regarding one of your programs",
            sender: 'user',
            timestamp: new Date(Date.now() - 120000), // 2 minutes ago
        },
        {
            id: '2',
            text: "Oh that's awesome. I'm glad my resources have been helpful and I'm open to helpful suggestions.",
            sender: 'bot',
            timestamp: new Date(Date.now() - 60000), // 1 minute ago
        },
    ]);

    const handleSendMessage = () => {
        if (inputValue.trim() === '') return;

        // Add user message
        const newUserMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, newUserMessage]);
        setInputValue('');

        // Simulate bot response after a short delay
        setTimeout(() => {
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: "Thank you for your message. I'm the SkillNet chatbot and I'll help you with your query.",
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 1000);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-[#101110] border border-[#313130] rounded-lg w-full max-w-lg h-[80vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-[#313130]">
                    <div className="flex items-center gap-2">
                        <button onClick={onClose} className="text-[#9596A0] items-center flex gap-2 hover:text-white">
                            <ArrowLeft className="w-5 h-5" /> Back
                        </button>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                <div className="w-4 h-4 bg-[#101110] rounded-full"></div>
                            </div>
                            <span className="text-white font-medium">Skillnet Chatbot</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="text-[#9596A0] hover:text-white">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="text-[#9596A0] hover:text-white">
                            <MoreVertical className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-[#101110]">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'
                                }`}
                        >
                            <div
                                className={`max-w-[80%] rounded-lg px-4 py-3 ${message.sender === 'user'
                                    ? 'bg-[#1E1E1D] text-white'
                                    : 'bg-[#1E1E1D] text-[#ABABAB]'
                                    }`}
                            >
                                <p className="text-sm">{message.text}</p>
                                <div className="flex items-center justify-end mt-1">
                                    <p className="text-xs text-[#9596A0]">
                                        {message.timestamp.toLocaleTimeString([], {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </p>
                                    {message.sender === 'user' && (
                                        <span className="ml-1 text-[#9596A0]">✓</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-[#313130] bg-[#101110]">
                    <div className="relative flex items-center">
                        <button className="absolute left-3 text-[#9596A0] hover:text-white">
                            <Mic className="w-5 h-5" />
                        </button>
                        <button className="absolute left-12 text-[#9596A0] hover:text-white">
                            <Smile className="w-5 h-5" />
                        </button>
                        <div className="absolute border-l h-[70%] border-black left-[74px]" />
                        <textarea
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type a message"
                            className="w-full bg-[#1E1E1D] border border-[#313130] rounded-lg py-3 pl-20 pr-12 text-white resize-none focus:outline-none focus:ring-1 focus:ring-[#40403E] h-12"
                            rows={1}
                        />
                        <button
                            onClick={handleSendMessage}
                            className="absolute right-3 p-2 bg-[#8CC84B] rounded-full hover:bg-opacity-90 transition-colors"
                            disabled={inputValue.trim() === ''}
                        >
                            <Send className="w-4 h-4 text-[#101110]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatbotModal; 