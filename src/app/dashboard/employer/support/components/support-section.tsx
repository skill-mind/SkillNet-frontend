"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface SupportItem {
  id: string;
  description: string;
  content: string;
}

interface SupportSectionProps {
  items: SupportItem[];
}

export function SupportSection({ items }: SupportSectionProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full rounded-lg text-white">
      <h2 className="pb-6 text-sm font-semibold">Support</h2>
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div key={item.id} className="flex flex-col">
            <div className="flex items-center justify-between px-4 md:px-6 py-4  transition-colors duration-200">
              <div className="flex flex-col">
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="ml-4 px-3 py-1.5 w-20 rounded-full border-zinc-700 bg-zinc-800 p-0 text-white hover:bg-zinc-700 hover:text-white"
                onClick={() => toggleItem(item.id)}
              >
                <span className="flex text-xs">
                  {expandedItems[item.id] ? "Collapse" : "Expand"}
                </span>
              </Button>
            </div>
            <AnimatePresence>
              {expandedItems[item.id] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 md:px-6 pb-4">
                    <div className="rounded-md bg-zinc-800 p-4">
                      <p className="text-sm text-gray-300 whitespace-pre-line leading-8">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {index < items.length - 1 && <div className="h-px bg-zinc-800" />}
          </div>
        ))}
      </div>
    </div>
  );
}