"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

type TabType = "all-time" | "weekly" | "monthly";

interface Transaction {
  id: string;
  amount: string;
  date: string;
}

interface PaymentData {
  totalPayment: string;
  balance: string;
  transactions: Transaction[];
}

export default function Payment() {
  const [activeTab, setActiveTab] = useState<TabType>("all-time");

  const tabData: Record<TabType, PaymentData> = {
    "all-time": {
      totalPayment: "$30,500",
      balance: "$130,500",
      transactions: [
        {
          id: "0xe46d0b1039a8f97df2800...",
          amount: "$15",
          date: "12th Jan, 2025",
        },
        {
          id: "0xe46d0b1039a8f97df2800...",
          amount: "$15",
          date: "12th Jan, 2025",
        },
        {
          id: "0xe46d0b1039a8f97df2800...",
          amount: "$15",
          date: "12th Jan, 2025",
        },
      ],
    },
    weekly: {
      totalPayment: "$11,500",
      balance: "$30,500",
      transactions: [
        {
          id: "0xe46d0b1039a8f97df2800...",
          amount: "$5",
          date: "10th Jan, 2025",
        },
        {
          id: "0xe46d0b1039a8f97df2800...",
          amount: "$6.5",
          date: "8th Jan, 2025",
        },
      ],
    },
    monthly: {
      totalPayment: "$44,500",
      balance: "$84,500",
      transactions: [
        {
          id: "0xe46d0b1039a8f97df2800...",
          amount: "$15",
          date: "10th Jan, 2025",
        },
        {
          id: "0xe46d0b1039a8f97df2800...",
          amount: "$12.5",
          date: "8th Jan, 2025",
        },
        {
          id: "0xe46d0b1039a8f97df2800...",
          amount: "$17",
          date: "1st Jan, 2025",
        },
      ],
    },
  };

  const tabs = [
    { id: "all-time", label: "All-Time" },
    { id: "weekly", label: "Weekly" },
    { id: "monthly", label: "Monthly" },
  ] as const;
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  const currentData = tabData[activeTab];
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
        <div className="bg-[#161716] rounded-lg p-6">
          <div className="flex items-center">
            <div className="bg-[#1E293B] w-12 h-12 rounded-full mr-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2B82CA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" x2="5" y1="5" y2="19"></line>
                <circle cx="6.5" cy="6.5" r="2.5"></circle>
                <circle cx="17.5" cy="17.5" r="2.5"></circle>
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold">{currentData.totalPayment}</p>
              <p className="text-gray-400 text-sm">Total Payment</p>
            </div>
          </div>
        </div>

        <div className="bg-[#161716] rounded-lg p-6">
          <div className="flex items-center">
            <div className="bg-[#1E293B] w-12 h-12 rounded-full mr-4 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2B82CA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" x2="5" y1="5" y2="19"></line>
                <circle cx="6.5" cy="6.5" r="2.5"></circle>
                <circle cx="17.5" cy="17.5" r="2.5"></circle>
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold">{currentData.balance}</p>
              <p className="text-gray-400 text-sm">Balance</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 px-4 md:px-8">
        <h2 className="text-xl font-semibold mb-4">Payment History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#101110] rounded-lg">
            <thead>
              <tr className="border-b border-[#1D1D1C]">
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-400">
                  SN
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-400">
                  Transaction ID
                </th>
                <th className="py-4 px-6 text-right text-sm font-medium text-gray-400">
                  Amount
                </th>
                <th className="py-4 px-6 text-right text-sm font-medium text-gray-400">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData.transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className="border-t border-[#1D1D1C] hover:bg-[#161716]"
                >
                  <td className="py-6 px-6 text-white">{index + 1}</td>
                  <td className="py-6 px-6">
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
                  <td className="py-6 px-6 text-right text-white">
                    {transaction.amount}
                  </td>
                  <td className="py-6 px-6 text-right text-white">
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
