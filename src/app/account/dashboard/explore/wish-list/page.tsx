import { Button } from "@headlessui/react";
import Link from "next/link";

function WishList(){
     return (
       <section className="grid gap-5">
         <div className="capitalize grid gap-4 grid-cols-3 max-w-sm">
           <Button className="text-sm py-[px] px-5 hover:text-[#A8C789] border-[#3B3B3A] border bg-transparent text-white hover:bg-transparent rounded capitalize">
             <Link href="/account/dashboard/explore"> explore</Link>
           </Button>
           <Button className="text-sm py-[6px] px-5 hover:text-[#A8C789] border-[#3B3B3A] border bg-transparent text-white hover:bg-transparent rounded capitalize w-fit">
             <Link href="/account/dashboard/explore/my-course"> my course</Link>
           </Button>
           <Button className="text-sm py-[6px] px-5 text-[#A8C789] border-[#3B3B3A] border bg-transparent hover:text-white hover:bg-transparent rounded capitalize">
             <Link href="/account/dashboard/explore/wish-list"> wish list</Link>
           </Button>
         </div>
       </section>
     );
}
export default WishList