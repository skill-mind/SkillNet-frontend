"use client";

import { Percent } from "lucide-react";

import { DateActionButton } from "../component/DateActionButton";
import { EarningStatCard } from "../component/EarningStatCard";
import { PaymentHistoryTable } from "../component/PaymentHistoryTable";
import { useEffect, useState } from "react";
import { isDateInThisMonth, isDateInThisWeek } from "@/app/utils/datetime";


// "transactionsData" might be coming from API / external store, eg. redux, zustand etc.
const transactionsData = [
  {
    id: 1,
    transactionId: "0xe46d0b1039a8f97df2800...",
    amount: "$20,000",
    date: "12th Jan, 2025",
  },
  {
    id: 2,
    transactionId: "0xe46d0b1039a8f97df2800...",
    amount: "$88",
    date: "12th Jan, 2025",
  },
  {
    id: 3,
    transactionId: "0xe46d0b1039a8f97df2800...",
    amount: "$275",
    date: "1st Feb, 2025",
  },
  {
    id: 4,
    transactionId: "0xe46d0b1039a8f97df2800...",
    amount: "$300",
    date: "2nd Feb, 2025",
  },
  {
    id: 5,
    transactionId: "0xe46d0b1039a8f97df2800...",
    amount: "$2500",
    date: "20th Feb, 2025",
  },
  {
    id: 6,
    transactionId: "0xe46d0b1039a8f97df2800...",
    amount: "$1200",
    date: "24th Feb, 2025",
  },
  {
    id: 7,
    transactionId: "0xe46d0b1039a8f97df2800...",
    amount: "$300",
    date: "26th Feb, 2025",
  },
];


type Transaction = {
  id: number;
  transactionId: string;
  amount: string;
  date: string;
};

type DateLabel = "All-Time" | "Monthly" | "Weekly";


function Earnings() {

  // we set default date label view to "All-Time"
  const [activeDateLabel, setActiveDateLabel] = useState<DateLabel>("All-Time");

  const [totalEarnings, setTotalEarnings] = useState("$0.00");

  // const [transactions, setTransactions] = useState(transactionsData);

  // Will hold trasactions filtered based on a date label view ("weekly", "monthly", "All-Time" etc.).
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>(transactionsData);


  const DateActions = [
    {
      label: "All-Time",
      isActive: activeDateLabel === "All-Time",
      onClick: () => DateActionButtonClickHander("All-Time"),
    },
    {
      label: "Monthly",
      isActive: activeDateLabel === "Monthly",
      onClick: () => DateActionButtonClickHander("Monthly"),
    },
    {
      label: "Weekly",
      isActive: activeDateLabel === "Weekly",
      onClick: () => DateActionButtonClickHander("Weekly"),
    },
  ];

  const stats = [
    {
      value: totalEarnings,
      label: "Total Earnings",
      icon: <Percent className="text-blue-500" size={30} />,
      bgCol: "bg-blue-500",
    },
  ];


  // We run this effect on page load since "All-Time" is default date label)
  useEffect(() => {
    if (activeDateLabel !== "All-Time") return;
    const tempTotal = transactionsData
      .map(t => parseFloat(t.amount.replace(/[$, ]/g, ''))) // Remove "$", ",", and spaces, then convert to number
      .reduce((sum, num) => sum + num, 0);
    setTotalEarnings(`$${tempTotal.toLocaleString()}`);
  }, [activeDateLabel]);


  function DateActionButtonClickHander(label: DateLabel) {
    // This function filters transaction data based on date label ("Monthly", "Weekly" etc.)
    // And We always filter starting from original dataset because 
    // "filteredTransactions" variable might contain already filtered data.

    console.log(label, "clicked");
    setActiveDateLabel(label);  // we update the currently active date label.

    // We should also just calculate the DateLabels ("weekly", "monthly") "total earnings" here,
    // during filtering, instead of doing it seperately (saves compute time).
    let tempTotalEarnings = 0;

    if (label === "Monthly") {
      const filtered = transactionsData.filter((transaction) => {
        if (isDateInThisMonth(transaction.date)) {
          tempTotalEarnings += parseFloat(transaction.amount.replace(/[$, ]/g, ''));
          return true;
        };
        return false;
      });
      console.log("[Monthly Total Earnings]:", tempTotalEarnings);
      setFilteredTransactions(filtered);
    }

    else if (label === "Weekly") {
      const filtered = filteredTransactions.filter((transaction) => {
        if (isDateInThisWeek(transaction.date)) {
          tempTotalEarnings += parseFloat(transaction.amount.replace(/[$, ]/g, ''));
          return true;
        };
        return false;
      });
      setFilteredTransactions(filtered);
      console.log("[Weekly Total Earnings]:", tempTotalEarnings);
    }

    else if (label === "All-Time") {
      // we return the original unfiltered dataset.
      setFilteredTransactions(transactionsData);
    }

    else {
      // No-op, we do nothing
      console.log("[x] Unknown Earnings Date-Label [x]: ", label);
    }

    setTotalEarnings(`$${tempTotalEarnings.toLocaleString()}`);
  }

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
          <PaymentHistoryTable transactions={filteredTransactions} />
        </div>
      </section>
    </main>
  );
}

export default Earnings;
