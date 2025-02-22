import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex justify-center items-center  ">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-20 h-20 border-4 border-gray-300 border-t-blue-800 rounded-full"
      />
    </div>
  );
}
