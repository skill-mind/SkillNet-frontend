"use client";

import { Percent } from "lucide-react";

import { DateActionButton } from "../component/DateActionButton";
import { EarningStatCard } from "../component/EarningStatCard";
import { PaymentHistoryTable } from "../component/PaymentHistoryTable";

function Earnings() {
  const DateActions = [
    {
      label: "All-Time",
      onClick: () => console.log("All-Time clicked"),
    },
    {
      label: "Weekly",
      onClick: () => console.log("Weekly clicked"),
    },
    {
      label: "Monthly",
      onClick: () => console.log("Montly clicked"),
    },
  ];

  const stats = [
    {
      value: "$30,500",
      label: "Total Earnings",
      icon: <Percent className="text-blue-500" size={30} />,
      bgCol: "bg-blue-500",
    },
  ];

  const transactions = [
    {
      id: 1,
      transactionId: "0xe46d0b1039a8f97df2800...",
      amount: "$15",
      date: "12th Jan, 2025",
    },
    {
      id: 2,
      transactionId: "0xe46d0b1039a8f97df2800...",
      amount: "$15",
      date: "12th Jan, 2025",
    },
    {
      id: 3,
      transactionId: "0xe46d0b1039a8f97df2800...",
      amount: "$15",
      date: "12th Jan, 2025",
    },
  ];

  return (
    <main className="flex-1 px-8 scrollbar-hide">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        {DateActions.map((action, index) => (
          <DateActionButton key={index} {...action} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <EarningStatCard key={index} {...stat} />
        ))}
      </div>
      <section className="overflow-y-hidden mb-44">
        <h3 className="text-lg font-semibold mb-8">Payment History</h3>
        <div className="">
          <PaymentHistoryTable transactions={transactions} />
        </div>
      </section>
    </main>
  );
}

export default Earnings;
