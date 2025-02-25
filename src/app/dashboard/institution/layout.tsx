"use client";
import { Logs } from "lucide-react";
import Navbar from "./components/header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  return (
    <>
      <main className="grow  h-[100vh]">
        <Navbar />
        <div className="flex h-full ">
          {sideBarIsOpen && (
            <div className="block md:hidden">
              <Sidebar />
            </div>
          )}
          <div className="hidden md:block">
            <Sidebar />
          </div>
          <div className="md:hidden block">
            <Logs
              onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
              className="m-4 text-white"
            />
          </div>
          <main className="flex-1 h-full overflow-auto">{children}</main>
        </div>
      </main>
    </>
  );
};

export default Layout;
