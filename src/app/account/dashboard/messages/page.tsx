import Messages from "@/app/messages/messages";
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