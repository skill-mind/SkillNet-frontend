import React from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'failure';
  examFee: string;
}

const StatusModal: React.FC<StatusModalProps> = ({ isOpen, onClose, type, examFee }) => {
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

        <div className="text-center space-y-4 mb-8">
          <h3 className="text-white text-xl font-semibold">{examFee} USD</h3>
          <div className="inline-block px-4 py-1 rounded bg-opacity-10 text-sm">
            {type === 'success' ? (
              <span className="text-[#D0EFB1]">Paid</span>
            ) : (
              <span className="text-red-500">Unpaid</span>
            )}
          </div>
          
          {type === 'success' ? (
            <>
              <div className="w-12 h-12 mx-auto bg-[#D0EFB1] rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-white">Registration Successful</p>
              <p className="text-[#9596A0] text-sm">
                HERE IS YOUR UNIQUE CODE: <span className="text-white">CrxgfHsylonlqA</span>
              </p>
            </>
          ) : (
            <>
              <div className="w-12 h-12 mx-auto bg-red-500 bg-opacity-10 rounded-full flex items-center justify-center">
                <X className="w-6 h-6 text-red-500" />
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
      </div>
    </div>
  );
};

export default StatusModal;