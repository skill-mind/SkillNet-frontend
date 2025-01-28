"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { X, Send, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatInput } from "./ChatInput";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; content: string }[]
  >([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesEndRef]); // Updated dependency

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: { role: "user" | "bot"; content: string } = {
      role: "user",
      content: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("http://localhost:8000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: input }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      const botMessage: { role: "user" | "bot"; content: string } = {
        role: "bot",
        content: data.text,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: { role: "user" | "bot"; content: string } = {
        role: "bot",
        content: "Sorry, I encountered an error.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="rounded-full w-12 h-12 shadow-lg bg-[#A8C789] from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 transition-all duration-300"
            >
              <Lightbulb className="w-8 h-8 text-green-900" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-[480px] h-[640px] flex flex-col shadow-2xl border-2 border-blue-300">
              <CardHeader className="flex flex-row items-center justify-between bg-[#A8C789] from-blue-500 to-teal-400 text-white rounded-t-lg">
                <CardTitle className="text-2xl text-slate-800 font-bold">
                  SkillNet Assistant
                </CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-6 w-6" />
                </Button>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto p-6 bg-gradient-to-b from-blue-50 to-teal-50">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`mb-6 ${
                      message.role === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <div
                      className={`inline-block p-4 rounded-lg ${
                        message.role === "user"
                          ? "bg-[#A8C789] from-blue-500 to-teal-400 text-black"
                          : "bg-white text-gray-800 shadow"
                      } max-w-[85%] text-base`}
                    >
                      {message.content}
                    </div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </CardContent>
              <CardFooter className="p-4 bg-white border-t border-blue-100">
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full gap-3 items-center"
                >
                  <ChatInput
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about skills or networking..."
                    className="flex-grow text-base"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="rounded-full w-14 h-14 bg-[#A8C789] from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 transition-all duration-300"
                  >
                    <Send className="h-6 w-6 text-white" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
