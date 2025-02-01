import { Bookmark, Clock4 } from "lucide-react";
import Image from "next/image";

interface ICourseContent {
  title: string;
  price: string;
  author: string;
  duration: string;
  courseImg: string;
  className?: string;
}

function ContentCourseCard({
  title,
  price,
  author,
  duration,
  courseImg,
  className,
}: ICourseContent) {
  return (
    <div
      className={`border w-[352px] rounded-lg border-[#313130] ${className}`}
    >
      <Image src={courseImg} alt="course logo" className="w-full" />
      <div className="py-6 px-2">
        <div className="grid grid-cols-[3fr_1fr]">
          <h2 className="text-xl font-medium text-[#FCFCFC]">{title}</h2>
          <span className="font-normal text-base text-[#D9D9D9] text-end">
            {`$${price}`}
          </span>
        </div>
        <h3 className="text-[#BBBBBB] text-base font-medium py-1">
         {author}
        </h3>
        <div className="grid grid-cols-[1fr_1fr] mt-6">
          <div className="flex gap-2 items-center text-[#D9D9D9] font-normal text-sm">
            <Clock4 />
            <h3>{duration} months course</h3>
          </div>
          <Bookmark className="justify-self-end text-[#696969]" />
        </div>
      </div>
    </div>
  );
}

export default ContentCourseCard;
