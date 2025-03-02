"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

type TabType = "all-time" | "weekly" | "monthly";

interface Transaction {
  id: string;
  amount: string;
  date: string;
}

export default function Payment() {
  const [activeTab, setActiveTab] = useState<TabType>("all-time");

  // Mock data for transactions
  const transactions: Transaction[] = [
    { id: "0xe46d0b1039a8f97df2800...", amount: "$15", date: "12th Jan, 2025" },
    { id: "0xe46d0b1039a8f97df2800...", amount: "$15", date: "12th Jan, 2025" },
    { id: "0xe46d0b1039a8f97df2800...", amount: "$15", date: "12th Jan, 2025" },
  ];

  const tabs = [
    { id: "all-time", label: "All-Time" },
    { id: "weekly", label: "Weekly" },
    { id: "monthly", label: "Monthly" },
  ] as const;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen text-white">
      <div className="py-4 px-4 md:px-8">
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 transition-all rounded-lg text-sm ${
                activeTab === tab.id
                  ? "bg-[#1D1D1C] text-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 px-4 md:px-8">
        {/* Total Payment Card */}
        <div className="bg-[#161716] rounded-lg p-6">
          <div className="flex items-center">
            <div className="bg-[#1E293B] rounded-full p-3 mr-4 flex items-center justify-center">
              <span className="text-[#38BDF8] text-xl">%</span>
            </div>
            <div>
              <p className="text-2xl font-bold">$30,500</p>
              <p className="text-gray-400 text-sm">Total Payment</p>
            </div>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-[#161716] rounded-lg p-6">
          <div className="flex items-center">
            <div className="bg-[#1E293B] rounded-full p-3 mr-4 flex items-center justify-center">
              <span className="text-[#38BDF8] text-xl">%</span>
            </div>
            <div>
              <p className="text-2xl font-bold">$130,500</p>
              <p className="text-gray-400 text-sm">Balance</p>
            </div>
          </div>
        </div>
      </div>
      {/* Payment History */}
      <div className="mt-8 px-4 md:px-8">
        <h2 className="text-xl font-semibold mb-4">Payment History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#101110] rounded-lg">
            <thead>
              <tr>
                <th className="py-4 px-4 text-left text-sm font-medium text-gray-400">
                  SN
                </th>
                <th className="py-4 px-4 text-left text-sm font-medium text-gray-400">
                  Transaction ID
                </th>
                <th className="py-4 px-4 text-right text-sm font-medium text-gray-400">
                  Amount
                </th>
                <th className="py-4 px-4 text-right text-sm font-medium text-gray-400">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-t border-[#1D1D1C]">
                  <td className="py-6 px-4 text-white">{index + 1}</td>
                  <td className="py-6 px-4">
                    <div className="flex items-center">
                      <span className="text-white">{transaction.id}</span>
                      <button
                        onClick={() => copyToClipboard(transaction.id)}
                        className="ml-2 text-gray-400 hover:text-white"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </td>
                  <td className="py-6 px-4 text-right text-white">
                    {transaction.amount}
                  </td>
                  <td className="py-6 px-4 text-right text-white">
                    {transaction.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
