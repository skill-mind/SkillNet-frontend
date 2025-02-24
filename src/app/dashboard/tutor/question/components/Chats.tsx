import React from "react";
import more from "@/public/more.svg";
import tick from "@/public/tick.svg";
import Image from "next/image";
const Chats = () => {
   const chats = [
      {
         image: "",
         time: "friday",
         from: "Josh",
         content: "What videos and materials can you recommend for a beginner started web design",
      },
     //  {
     //     image: "",
     //     time: "friday",
     //     from: "Josh",
     //     content: "What videos and materials can you recommend for a beginner started web design",
     //  },
   ];
   return (
      <div className="w-[351px] h-auto flex flex-col gap-[32px] border-r-[#222220] border-r-[1px] border-r-solid">
         <p className="font-[400] text-[14px]">Questions</p>
         <div className="flex flex-row gap-4 justify-start">
            <button className=" h-[31px] w-[74px] border-[1px] border-solid border-[#3b3b3a] text-[16px] text-[500] text-[#A8C789] rounded-[4px]">New</button>
            <button className=" h-[31px] w-[74px]  text-[16px] text-[500]">Archieved</button>
         </div>
         <ul className="flex flex-col gap-4">
            {chats.map((items, index) => {
               return (
                  <li className="flex flex-row gap-2 items-center cursor-pointer " key={index}>
                     <div className="w-[60px] h-[60px] rounded-full border"></div>
                     <div className="w-[79%] border-b-[#222220] border-b-[1px] border-b-solid py-2">
                        <section className="flex justify-between ">
                           <p className="font-[500] text-[14px] text-[#fcfcfc]">{items.from}</p>
                           <p className="font-[400] text-[12px] text-[#696969] capitalize">{items.time}</p>
                        </section>
                        <section className="flex justify-between items-center">
                           <p className="font-[400] text-[12px] text-[#fcfcfc] flex flex-row justify-start items-center gap-1">
                              <span>
                                 <Image src={tick} alt="tick" />
                              </span>
                              {items.content.slice(0, 25)}...
                           </p>
                           <button>
                              <Image src={more} alt="more" />
                           </button>
                        </section>
                     </div>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default Chats;
