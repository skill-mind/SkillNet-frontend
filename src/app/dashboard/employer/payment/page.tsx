"use client";

import Payment from "./payment";
import { useContext, useEffect } from "react";
import { DashBoardContext } from "@/app/useContext/dashboardContext";

export default function PaymentPage() {
  const { setActiveSection } = useContext(DashBoardContext);

  useEffect(() => {
    setActiveSection("payments");
  }, [setActiveSection]);

  return <Payment />;
}
