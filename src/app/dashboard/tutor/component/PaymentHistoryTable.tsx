import React from 'react'
import {  Copy } from "lucide-react";

interface PaymentHistoryTableProps {
    transactions: {
      id: number;
      transactionId: string;
      amount: string;
      date: string;
    }[];
  }

export function PaymentHistoryTable({ transactions }: PaymentHistoryTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg mb-6">
    <table className="w-full text-center border-collapse">
      <thead >
        <tr className=" text-gray-400 bg-[#1E1E1E] ">
          <th className="py-4">SN</th>
          <th className="py-4">Transaction ID</th>
          <th className="py-4">Amount</th>
          <th className="py-4">Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx) => (
          <tr key={tx.id} className="border-b border-gray-700 ">
            <td className="py-6">{tx.id}</td>
            <td className="py-6 flex items-center justify-center gap-3 text-center">
              {tx.transactionId}
              <button
                onClick={() => navigator.clipboard.writeText(tx.transactionId)}
                className="text-gray-400 hover:text-white"
                title="Copy Transaction ID"
              >
                <Copy size={20}/>
              </button>
            </td>
            <td className="py-6">{tx.amount}</td>
            <td className="py-6">{tx.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}
