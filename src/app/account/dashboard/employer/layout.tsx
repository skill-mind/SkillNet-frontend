

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <main className="grow">{children}</main>
      </>
    );
  };
  
  export default Layout;
