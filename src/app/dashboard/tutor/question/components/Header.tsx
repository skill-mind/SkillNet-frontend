import Image from "next/image";
import React from "react";
import more from "@/public/more.svg";
import {SearchIcon} from "lucide-react";
const Header = () => {
   return (
      <div className="sticky z-50 top-0 h-[44px] left-0 right-0 flex justify-between items-center border-b-[#222220] border-b-[1px] border-b-solid pb-1 ">
         <div className="flex flex-row justify-start items-center gap-4">
            <div className="w-[32px] h-[32px] rounded-full border"></div>
            Josh
         </div>
         <div className="flex flex-row justify-start items-center gap-4">
            <SearchIcon className="w-[16px] h-[16px]" />
            <Image src={more} alt="more" />
         </div>
      </div>
   );
};

export default Header;
