"use client";
import React from "react";

interface CandidateData {
  sn: number;
  address: string;
  date: string;
  certification: string;
  status: "Eligible" | "Unverified";
}

const pastCandidates = () => {
  const data: CandidateData[] = [
    {
      sn: 1,
      address: "Web3 Test",
      date: "12th Dec, 2025",
      certification: "N/A",
      status: "Eligible",
    },
    {
      sn: 2,
      address: "Web3 Test",
      date: "12th Dec, 2025",
      certification: "N/A",
      status: "Unverified",
    },
  ];

  return (
    <div className="text-gray-300 pr-16">
      <div className="grid grid-cols-5 gap-y-5">
        <div className="text-sm font-medium bg-[#161716] p-3">SN</div>
        <div className="text-sm font-medium bg-[#161716] p-3">Address</div>
        <div className="text-sm font-medium bg-[#161716] p-3">Date</div>
        <div className="text-sm font-medium bg-[#161716] p-3">
          Certification
        </div>
        <div className="text-sm font-medium bg-[#161716] p-3">Status</div>

        {data.map((row) => (
          <React.Fragment key={row.sn}>
            <div className="text-gray-400 border-b border-[#31283A] p-3">
              {row.sn}
            </div>
            <div className="text-gray-400 border-b border-[#31283A] p-3">
              {row.address}
            </div>
            <div className="text-gray-400 border-b border-[#31283A] p-3">
              {row.date}
            </div>
            <div className="text-gray-400 border-b border-[#31283A] p-3">
              {row.certification}
            </div>
            <div
              className={`${
                row.status === "Eligible"
                  ? "text-gray-400 border-b border-[#31283A] p-3"
                  : "text-gray-600 border-b border-[#31283A] p-3"
              }`}
            >
              {row.status}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default pastCandidates;
