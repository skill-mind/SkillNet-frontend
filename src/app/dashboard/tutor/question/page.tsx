import React from "react";
import Chats from "./components/Chats";
import Replies from "./components/Replies";

const page = () => {
   return (
      <div className="px-8 flex flex-row gap-4 items-start">
         <Chats />
         <Replies/>
      </div>
   );
};

export default page;
