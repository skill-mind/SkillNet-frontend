import Header from "./component/DashboardHeader";
import { Sidebar } from "./component/TutorDashboardSidebar";
import DashBoardContextProvider from "@/app/useContext/dashboardContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashBoardContextProvider>
      <main className="bg-[#101110] h-[100vh] max-h-screen overflow-y-hidden">
        <Header />
        <div className="flex h-[100%] text-white overflow-y-auto scrollbar-hide scroll-smooth">
          <Sidebar />
          {children}
        </div>
      </main>
    </DashBoardContextProvider>
  );
};

export default Layout;
