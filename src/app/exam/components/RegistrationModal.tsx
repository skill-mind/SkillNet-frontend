import React from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  examFee: string;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, examFee }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#161716] border border-[#252625] rounded-lg w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button onClick={onClose}>
              <ArrowLeft className="w-5 h-5 text-[#9596A0]" />
            </button>
            <h2 className="text-white text-lg">Registration</h2>
          </div>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-[#9596A0]" />
          </button>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-white text-xl font-semibold">{examFee} USD</h3>
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-[#9596A0] text-sm mb-1 block">Full Name *</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-transparent border border-[#252625] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#D6DFFE]"
            />
          </div>

          <div>
            <label className="text-[#9596A0] text-sm mb-1 block">Email Address *</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full bg-transparent border border-[#252625] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#D6DFFE]"
            />
          </div>

          <div>
            <label className="text-[#9596A0] text-sm mb-1 block">Wallet Address *</label>
            <input
              type="text"
              placeholder="Enter wallet address"
              className="w-full bg-transparent border border-[#252625] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#D6DFFE]"
            />
          </div>

          <Button 
            className="w-full bg-[#D0EFB1] text-black hover:bg-[#D0EFB1]/90 mt-6"
          >
            PROCEED
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;