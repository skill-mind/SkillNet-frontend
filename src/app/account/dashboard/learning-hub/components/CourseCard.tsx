import React from "react";
import { Clock, Bookmark } from "lucide-react";
import { StaticImageData } from "next/image";
import Image from "next/image";
interface CourseCardProps {
  title: string;
  author: string;
  price: number;
  duration: string;
  isBookmarked?: boolean;
  image: string | StaticImageData;
}

const CourseCard = ({
  title,
  author,
  price,
  duration,
  isBookmarked = false,
  image,
}: CourseCardProps) => {
  return (
    <div className="w-80 rounded-lg overflow-hidden bg-gradient-to-b from-purple-950 to-black text-white shadow-xl">
      <div className="bg-blue-500 w-full h-64 rounded-lg flex items-center justify-center mb-2">
          <Image alt="image" src={image} width={500} height={500} className="w-full h-full" />
        </div>
      <div className="p-6 space-y-4">
      

        {/* Course Info */}
      
        <div className="space-y-2">
          <div className="flex flex-row justify-between items-start">
            <h2 className="text-lg font-bold leading-tight">{title}</h2>
            <span className="font-bold">${price.toFixed(2)}</span>
          </div>

          <p className="text-sm text-gray-300">{author}</p>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-300">{duration}</span>
          </div>
          <div className="flex items-center space-x-4">
            <Bookmark
              className={`w-5 h-5 ${
                isBookmarked ? "fill-current" : ""
              } text-gray-400`}
              role="button"
              aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
