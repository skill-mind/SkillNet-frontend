import React from 'react';
import { X, ArrowLeft } from 'lucide-react';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const BaseModal: React.FC<BaseModalProps> = ({ isOpen, onClose, title = 'Registration', children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#161716] border border-[#40403E] rounded-lg w-full max-w-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button onClick={onClose}>
              <ArrowLeft className="w-5 h-5 text-[#9596A0]" />
            </button>
            <h2 className="text-white text-lg">{title}</h2>
          </div>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-[#9596A0]" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default BaseModal;