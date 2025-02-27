"use client";

import { memo, useCallback, useState } from "react";
import { Percent } from "lucide-react";

import { EarningStatCard } from "@/app/dashboard/tutor/component/EarningStatCard";
import { PaymentHistoryTable } from "@/app/dashboard/tutor/component/PaymentHistoryTable";
import { isDateInThisMonth } from "@/app/utils/datetime";

import { transactionsData } from "@/app/utils/data";

type Transaction = {
    id: number;
    transactionId: string;
    amount: string;
    date: string;
};


function Monthly() {

    const [filteredTransactions, setTransactions] = useState<Transaction[]>(transactionsData.filter((transaction) => isDateInThisMonth(transaction.date)));
    // const transactions = transactionsData;

    // "useCallback" to reduce unneccessary recomputations.
    const totalEarnings = useCallback(() => filteredTransactions
        .map(t => parseFloat(t.amount.replace(/[$, ]/g, ''))) // Remove "$", ",", and spaces, then convert to number
        .reduce((sum, num) => sum + num, 0), [filteredTransactions]);

    const stats = [
        {
            value: `$${totalEarnings().toLocaleString()}` || "$0.00",
            label: "Total Earnings",
            icon: <Percent className="text-blue-500" size={30} />,
            bgCol: "bg-blue-500",
        },
    ];

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <EarningStatCard key={index} {...stat} />
                ))}
            </div>
            <section className="overflow-y-hidden mb-44">
                <h3 className="text-lg font-semibold mb-8">Payment History</h3>
                <div className="">
                    <PaymentHistoryTable transactions={filteredTransactions} />
                </div>
            </section>
        </>
    )
}

export default memo(Monthly);