import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import BaseModal from './BaseModal';

// Define a proper interface for form data instead of using 'any'
interface RegistrationFormData {
  fullName: string;
  email: string;
  walletAddress: string;
}

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  examFee: string;
  onSubmit: (formData: RegistrationFormData) => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, examFee, onSubmit }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    walletAddress: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="text-center mb-8">
        <h3 className="text-white text-xl font-semibold bg-[#252625] rounded-lg max-w-fit mx-auto p-3 font-ubuntu">
          ${examFee} USD
        </h3>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-[#BBBBBB] text-sm mb-1 block">
            Full Name <span className="text-[#C04639]">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full bg-transparent border border-[#252625] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#D6DFFE]"
            required
          />
        </div>

        <div>
          <label className="text-[#BBBBBB] text-sm mb-1 block">
            Email Address <span className="text-[#C04639]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full bg-transparent border border-[#252625] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#D6DFFE]"
            required
          />
        </div>

        <div>
          <label className="text-[#BBBBBB] text-sm mb-1 block">
            Wallet Address <span className="text-[#C04639]">*</span>
          </label>
          <input
            type="text"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleChange}
            placeholder="Enter wallet address"
            className="w-full bg-transparent border border-[#252625] rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#D6DFFE]"
            required
          />
        </div>

        <Button 
          type="submit"
          className="w-full bg-[#D0EFB1] text-black hover:bg-[#D0EFB1]/90 mt-6"
        >
          PROCEED
        </Button>
      </form>
    </BaseModal>
  );
};

export default RegistrationModal;