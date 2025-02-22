import React from "react";
import Header from "./Header";
import Image from "next/image";
import vn from "@/public/vn.svg";
import send from "@/public/send.svg";
import smile from "@/public/smile.svg";
import tick from "@/public/tick.svg";
import {MessageIn, Messageout} from "./MessageContainer";

const Replies = () => {
   return (
      <div className=" flex-grow h-[619px] px-[24px] relative flex flex-col justify-between">
         <Header />
         <div className="h-[471px] flex flex-col justify-end">
            <section className="flex flex-col gap-6 mx-auto mb-4">
               <Messageout>
                  hello how are you doing{" "}
                  <span className="flex flex-row justify-end gap-2">
                     <Image src={tick} alt="tick" />
                     <p>12:43 AM</p>
                  </span>
               </Messageout>
               <MessageIn>
                  hello
                  <span className="flex flex-row justify-end gap-2">
                     <Image src={tick} alt="tick" />
                     <p>12:43 AM</p>
                  </span>
               </MessageIn>
            </section>
            <div className="relative mx-auto">
               <input
                  type="text"
                  className="border-[#40403E] border-[1px] border-solid w-[614px] h-[60px] bg-transparent py-[12px] px-[16px] rounded-[8px] pl-32 italic text-[12px] font-[400]"
                  placeholder="type a message"
               />
               <div className="absolute w-[95px] left-3 top-0 bottom-0 flex items-center gap-6 my-3 border-r-[#222220] border-r-[1px] border-r-solid">
                  <button>
                     <Image src={vn} alt="voice-note-icon" />
                  </button>
                  <button>
                     <Image src={smile} alt="smile-icon" />
                  </button>
               </div>
               <div className="w-[40px] my-3 absolute right-6 top-0 bottom-0 items-center gap-4 flex flex-row justify-end border-l-[#222220] border-l-[1px] border-l-solid">
                  <button className="">
                     <Image src={send} alt="send-icon" />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Replies;
