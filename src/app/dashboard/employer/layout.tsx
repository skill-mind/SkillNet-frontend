import Sidebar from "../employer/component/Sidebar";



const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <div className="flex h-screen">
        <Sidebar />
        <main className="grow p-4">{children}</main>
      </div>
      </>
    );
  };
  
  export default Layout;
