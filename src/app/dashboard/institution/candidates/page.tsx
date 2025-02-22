"use client"

import React, { useState } from "react";

const Candidates = () => {
  const [selectedTab, setSelectedTab] = useState("past");
  const [verifyAddress, setVerifyAddress] = useState("#");

  const pastCandidates = [
    { sn: 1, address: "Web3 Test", date: "12th Dec, 2025", certification: "View", status: "Eligible" },
    { sn: 2, address: "Web3 Test", date: "12th Dec, 2025", certification: "View", status: "Unverified" },
  ];

  return (
    <section>
      {/* Buttons for switching between sections */}
      <div className="flex justify-start gap-8 mt-10 px-5">
        <button 
          className={`border-[#161716] border-2 rounded-xl px-6 font-medium leading-6 h-[8vh] py-3 transition-all ${
            selectedTab === "new" ? "bg-[#161716] text-white" : "bg-transparent"
          }`}
          onClick={() => setSelectedTab("new")}
        >
          New Candidates
        </button>

        <button 
          className={`border-[#161716] border-2 rounded-xl px-6 font-medium leading-6 h-[8vh] py-3 transition-all ${
            selectedTab === "past" ? "bg-[#161716] text-white" : "bg-transparent"
          }`}
          onClick={() => setSelectedTab("past")}
        >
          Past Candidates
        </button>

        <button 
          className={`border-[#161716] border-2 rounded-xl px-6 font-medium leading-6 h-[8vh] py-3 transition-all ${
            selectedTab === "verify" ? "bg-[#161716] text-white" : "bg-transparent"
          }`}
          onClick={() => setSelectedTab("verify")}
        >
          Verify Candidates
        </button>
      </div>

      {/* New Candidates*/}
      {/* {selectedTab === "new" && (
      // {Add new candidate form right here}
      )} */}

      {/* Verify Candidates Form */}
      {selectedTab === "verify" && (
        <div className="mt-10 px-5">
          <label className="block font-medium text-[#9596A0]">Enter Address</label>
          <input
            type="text"
            value={verifyAddress}
            onChange={(e) => setVerifyAddress(e.target.value)}
            placeholder="#"
            className="w-full mt-2 p-3 border-[#252625] border-2 rounded-xl  bg-transparent outline-none"
          />
        </div>
      )}

      {/* Past Candidates Table */}
      {selectedTab === "past" && (
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
                        view
                      </button>
                    </div>
                  </td>
                  <td className="p-4 py-6 font-semibold text-[#4B4B4B]">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Candidates;



