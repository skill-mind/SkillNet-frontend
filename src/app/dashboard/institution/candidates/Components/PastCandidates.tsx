"use client";

import React from "react";

interface Candidate {
  sn: number;
  address: string;
  date: string;
  certification: string;
  status: string;
}

const pastCandidates: Candidate[] = [
  { sn: 1, address: "Web3 Test", date: "12th Dec, 2025", certification: "View", status: "Eligible" },
  { sn: 2, address: "Web3 Test", date: "12th Dec, 2025", certification: "View", status: "Unverified" },
];

const PastCandidates: React.FC = () => {
  return (
    <div className="overflow-x-auto font-sans text-sm px-5 mt-10">
      <table className="w-full rounded-lg">
        <thead>
          <tr className="bg-[#161716] text-white text-left">
            <th className="p-4 py-6">S/N</th>
            <th className="p-4 py-6">Address</th>
            <th className="p-4 py-6">Date</th>
            <th className="p-4 py-6">Certification</th>
            <th className="p-4 py-6">Status</th>
          </tr>
        </thead>
        <tbody>
          {pastCandidates.map((item, index) => (
            <tr key={index} className="border-b-[#31283A] border-b text-left font-normal">
              <td className="p-4 py-6">{item.sn}</td>
              <td className="p-4 py-6">{item.address}</td>
              <td className="p-4 py-6">{item.date}</td>
              <td className="p-4 py-6">
                <div className="flex">
                  <button className="border rounded-full border-[#2D2E2D] w-[80px] h-[30px] flex justify-center items-center">
                    View
                  </button>
                </div>
              </td>
              <td className="p-4 py-6 font-semibold text-[#4B4B4B]">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PastCandidates;

