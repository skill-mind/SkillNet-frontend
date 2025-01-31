"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";


interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
    const [coverLetter, setCoverLetter] = useState("");
    const [fortune500, setFortune500] = useState("");
    const router = useRouter(); 


    const handleSubmit = () => {
        if (!coverLetter.trim() || !fortune500) {
            toast.error("All fields must be filled before submitting.");
            return;
        }


        if (coverLetter.length > 2000) {
            toast.error("Cover letter must not exceed 2000 characters.");
            return;
        }


        toast.success("Application submitted successfully!");


        setTimeout(() => {
            router.push("/account/dashboard/job-seeker"); 
        }, 1500);
    };


    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
            <div className="bg-[#121312] text-white p-6 rounded-lg w-[800px] h-[585px] max-w-full max-h-full flex flex-col items-center" style={{ padding: '24px 20px' }}>
                <Toaster position="top-center" reverseOrder={false} /> 
                <div className="w-full flex flex-col items-center mb-6 relative">
                    <button
                        onClick={onClose}
                        className="absolute right-0 w-[48px] h-[48px] text-[#D9D9D9] flex justify-center items-center bg-transparent border-none text-4xl"
                    >
                        ×
                    </button>
                    <h2 className="text-[28px] font-bold text-center text-[#FCFCFC]">Your Application</h2>
                </div>
                <p className="mb-6 text-center text-[14px] text-[#80837E]">Please carefully fill out this application form.</p>
            
                <label className="block text-[14px] mb-2 text-[#9596A0] w-full text-left">Cover Letter</label>
                <textarea
                    className="w-[760px] max-w-full p-2 bg-[#0e0f0e] border border-[#252625] rounded-md h-[240px] text-[14px] text-[#9596A0]"
                    placeholder="Write your cover letter"
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                ></textarea>
        
                <label className="block text-[14px] mt-4 mb-2 text-[#9596A0] w-full text-left">Have you worked with a Fortune 500 company?</label>
                <select
                    className="w-[760px] max-w-full p-2 bg-[#0e0f0e] border border-[#252625] rounded-md h-[40px] text-[14px] text-[#FAFAFA]"
                    value={fortune500}
                    onChange={(e) => setFortune500(e.target.value)}
                >
                    <option value="">Select an option</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
        
                <button
                    onClick={handleSubmit}
                    className="w-[760px] max-w-full bg-[#D0EFB1] text-[#0E0F0E] py-[12px] mt-6 rounded-md font-semibold text-[16px] hover:bg-[#b8da9f] h-[48px]"
                >
                    SUBMIT APPLICATION
                </button>
            </div>
        </div>
    );
}


