import Messages from "@/app/dashboard/messages/components/messages";
// import Footer from "@/components/Footer";
import NavbarJobSeeker from "@/components/Navbar-job-seeker";

function page(){
    return(
        <div>
           <NavbarJobSeeker />
                <Messages />
           {/* <Footer /> */}
        </div>
    );
}

export default page;