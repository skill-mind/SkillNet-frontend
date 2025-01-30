"use client"
import Input from "@/components/Forms/Input";


function Messages() {
    return (
      <div className="my-[10em] px-4 sm:px-8 lg:px-[100px] ">
        <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="flex flex-col">
                <h4 className="text-3xl mb-2">Messages</h4>
                <Input label="" name="search" placeholder="Search" type="text" value="" onChange={()=>{}} />
            </div>
        </div>
      </div>
    );
  }
  
  export default Messages;