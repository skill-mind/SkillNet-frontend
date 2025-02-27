import { Bookmark, Clock4 } from "lucide-react";
import Image from "next/image";

type data  ={
  title:string,
  author:string,
  price:number,
  isBookmarked:boolean,
  duration:string,
  image:string
}

interface course {
  data:data
}
function CourseCard({data}:course){
  const {author,duration,price,title,image} = data
    return (
      <div className="border w-full lg:max-w-96 lg:w-[352px]  max-h-[452px] rounded-lg border-[#313130]">
        <Image src={image} className="w-full" alt="course logo" />
        <div className="py-6 px-2">
          <div className="grid grid-cols-[3fr_1fr]">
            <h2 className="text-base font-medium text-[#FCFCFC]">
             {title}
            </h2>
            <span className="font-normal text-base text-[#D9D9D9] text-end">
              ${price}
            </span>
          </div>
          <h3 className="text-[#BBBBBB] text-base font-medium py-1">
            {author}
          </h3>
          <div className="grid grid-cols-[1fr_1fr] mt-6">
            <div className="flex gap-2 items-center text-[#D9D9D9] font-normal text-sm">
              <Clock4 />
              <h3>{duration}</h3>
            </div>
            <Bookmark className="justify-self-end text-[#696969]" />
          </div>
        </div>
      </div>
    );
}

export default CourseCard