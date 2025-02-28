import React, { ReactNode, useEffect } from "react";
import { X, ArrowLeft } from "lucide-react";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-[#161716] border border-[#1D1D1C] rounded-lg w-full max-w-2xl h-[90vh] sm:h-[80vh] p-4 sm:p-6 md:p-8 relative overflow-y-auto">
        <div className="top-0 bg-[#161716] z-10 flex justify-between items-center mb-4 sm:mb-6 border-b border-[#1D1D1C] pb-3 sm:pb-4">
          <span className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <h2 className="text-lg sm:text-xl font-semibold text-white truncate">
              {title}
            </h2>
          </span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
        <div className="pb-2 sm:pb-0">{children}</div>
      </div>
    </div>
  );
};

export default FormModal;
