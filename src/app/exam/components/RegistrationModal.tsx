import React from 'react';
import { Button } from '@/components/ui/button';
import BaseModal from './BaseModal';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  examFee: string;
  onSubmit: (formData: any) => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, examFee, onSubmit }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="text-center mb-8">
        <h3 className="text-white text-xl font-semibold bg-[#252625] rounded-lg max-w-fit mx-auto p-3 font-ubuntu">
          ${examFee} USD
        </h3>
      </div>

      <form className="space-y-4">
        <div>
          <label className="text-[#BBBBBB] text-sm mb-1 block">
            Full Name <span className="text-[#C04639]">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full bg-transparent border border-[#252625] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#D6DFFE]"
          />
        </div>

        <div>
          <label className="text-[#BBBBBB] text-sm mb-1 block">
            Email Address <span className="text-[#C04639]">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full bg-transparent border border-[#252625] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#D6DFFE]"
          />
        </div>

        <div>
          <label className="text-[#BBBBBB] text-sm mb-1 block">
            Wallet Address <span className="text-[#C04639]">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter wallet address"
            className="w-full bg-transparent border border-[#252625] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#D6DFFE]"
          />
        </div>

        <Button 
          className="w-full bg-[#D0EFB1] text-black hover:bg-[#D0EFB1]/90 mt-6"
          onClick={onSubmit}
        >
          PROCEED
        </Button>
      </form>
    </BaseModal>
  );
};

export default RegistrationModal;