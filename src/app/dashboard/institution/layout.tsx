import Navbar from "@/components/Navbar";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="grow pt-[100px] h-[100vh]">
        <Navbar />
        <div className="flex h-full">
          <Sidebar />
          <main className="flex-1 h-full overflow-auto">{children}</main>
        </div>
      </main>
    </>
  );
};

export default Layout;
