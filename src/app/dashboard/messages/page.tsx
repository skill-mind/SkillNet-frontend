import Messages from "@/app/dashboard/messages/components/messages";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function page(){
    return(
        <div>
           <Navbar />
                <Messages />
           <Footer />
        </div>
    );
}

export default page;