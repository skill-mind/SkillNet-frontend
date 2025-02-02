import Footer from "@/components/Footer";
import NavbarJobSeeker from "@/components/Navbar-job-seeker";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <section>
        <NavbarJobSeeker />
        <main className="overflow-x-hidden min-h-screen px-24 pt-14">{children}</main>
         <Footer />
      </section>
    );
  };
  
  export default Layout;
  