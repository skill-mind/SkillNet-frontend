import Messages from "@/app/account/dashboard/messages/components/messages";
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