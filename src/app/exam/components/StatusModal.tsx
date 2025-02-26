import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BaseModal from './BaseModal';

interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'failure';
  examFee: string;
}

const StatusModal: React.FC<StatusModalProps> = ({ isOpen, onClose, type, examFee }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="text-center space-y-4 mb-8">
        <h3 className="text-white text-xl font-semibold bg-[#252625] rounded-lg max-w-fit mx-auto p-3 font-ubuntu">
          ${examFee} USD
        </h3>
        <div className="inline-block px-4 py-1 border border-[#3B3B3A] rounded bg-o[#161716] text-sm">
          {type === 'success' ? (
            <span className="text-[#A8C789] text-xs">Paid</span>
          ) : (
            <span className="text-[#C78989]">Unpaid</span>
          )}
        </div>
        
        {type === 'success' ? (
          <>
            <div className="w-12 h-12 mx-auto bg-[#D0EFB1] rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-white">Registration Successful</p>
            <p className="text-[#6E6E6E] text-sm">
              HERE IS YOUR UNIQUE CODE: <span className="text-white">CrxgfHsylonlqA</span>
            </p>
          </>
        ) : (
          <>
            <div className="w-12 h-12 mx-auto bg-[#2D2E2D] bg-opacity-10 rounded-full flex items-center justify-center">
              <X className="w-6 h-6 text-[#565656]" />
            </div>
            <p className="text-white">Registration Failed</p>
            <p className="text-[#9596A0] text-sm">PAYMENT AMOUNT NOT MET</p>
          </>
        )}
      </div>

      <Button 
        onClick={onClose}
        className="w-full bg-[#D0EFB1] text-black hover:bg-[#D0EFB1]/90"
      >
        {type === 'success' ? 'PROCEED' : 'CLOSE'}
      </Button>
    </BaseModal>
  );
};

export default StatusModal;