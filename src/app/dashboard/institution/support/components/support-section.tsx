"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface SupportItem {
  id: string;
  title?: string;
  description: string;
  content?: string;
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
    <div className="w-full rounded-lg  text-white">
      <h2 className=" pb-6 text-sm font-semibold ">Support</h2>
      <div className="flex flex-col ">
        {items.map((item, index) => (
          <div key={item.id} className="flex flex-col">
            <div className="flex items-center justify-between px-4 md:px-6 py-4">
              <div className="flex flex-col">
                {/* <h3 className="text-base font-medium">{item.title}</h3> */}
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="ml-4  px-3 py-1.5 w-20 rounded-full border-zinc-800 bg-transparent p-0 text-white hover:bg-zinc-950 hover:text-white"
                onClick={() => toggleItem(item.id)}
              >
                {expandedItems[item.id] ? (
                  <span className="flex text-xs">
                    Collapse
                    {/* <ChevronUp className="h-4 w-4" /> */}
                  </span>
                ) : (
                  <span className="flex text-xs">
                    Expand
                    {/* <ChevronDown className="h-4 w-4" /> */}
                  </span>
                )}
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
                  <div className=" px-4 md:px-6 pb-4">
                    <div className="rounded-md bg-zinc-800 p-4">
                      <p className="text-sm">
                        {item.content ||
                          "Detailed information will be displayed here."}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {index < items.length && <div className=" h-px bg-zinc-800" />}
          </div>
        ))}
      </div>
    </div>
  );
}
