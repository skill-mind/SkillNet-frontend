"use client"
import { createContext, Dispatch, SetStateAction, useState } from "react";

export const DashBoardContext= createContext<{
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
}>({
    activeSection:"home",
    setActiveSection:()=>{},
})


export default function DashBoardContextProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <DashBoardContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </DashBoardContext.Provider>
  );
}