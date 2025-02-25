import Navbar from "./components/header";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="grow  h-[100vh]">
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
