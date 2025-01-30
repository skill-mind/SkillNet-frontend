import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Messages from "./messages";

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