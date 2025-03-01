"use client";

import { useCallback, useState } from "react";
import { Percent } from "lucide-react";

import { EarningStatCard } from "@/app/dashboard/tutor/component/EarningStatCard";
import { PaymentHistoryTable } from "@/app/dashboard/tutor/component/PaymentHistoryTable";

import { transactionsData } from "@/app/utils/data";



type Transaction = {
    id: number;
    transactionId: string;
    amount: string;
    date: string;
};


function AllTime() {

    const [transactions] = useState<Transaction[]>(transactionsData);
    // const transactions = transactionsData;

    // "useCallback" to reduce unneccessary recomputations.
    const totalEarnings = useCallback(() => transactions
        .map(t => parseFloat(t.amount.replace(/[$, ]/g, ''))) // Remove "$", ",", and spaces, then convert to number
        .reduce((sum, num) => sum + num, 0), [transactions]);

    const stats = [
        {
            value: `$${totalEarnings().toLocaleString()}`,
            label: "Total Earnings",
            icon: <Percent className="text-blue-500" size={30} />,
            bgCol: "bg-blue-500",
        },
    ];

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-white">
                {stats.map((stat, index) => (
                    <EarningStatCard key={index} {...stat} />
                ))}
            </div>
            <section className="overflow-y-hidden mb-44 text-white">
                <h3 className="text-lg font-semibold mb-8">Payment History</h3>
                <div className="">
                    <PaymentHistoryTable transactions={transactions} />
                </div>
            </section>
        </>
    )
}

export default AllTime;