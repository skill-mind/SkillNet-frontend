import questionIcon from "@/public/questionsimage.svg";
import Image from "next/image";
import Link from "next/link";

// Helper function to truncate text
interface Notification {
  image: string;
  time: string;
  category: string;
  content: string;
}

const truncateText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const questionsNotifications: Notification[] = [
  {
    image: questionIcon,
    time: "15 mins",
    category: "Design",
    content:
      "What videos and materials can you recommend for a beginner started web design",
  },
  {
    image: questionIcon,
    time: "15 mins",
    category: "Design",
    content:
      "What videos and materials can you recommend for a beginner started web design",
  },
  {
    image: questionIcon,
    time: "15 mins",
    category: "Design",
    content:
      "What videos and materials can you recommend for a beginner started web design",
  },
  {
    image: questionIcon,
    time: "15 mins",
    category: "Design",
    content:
      "What videos and materials can you recommend for a beginner started web design",
  },
  {
    image: questionIcon,
    time: "15 mins",
    category: "Design",
    content:
      "What videos and materials can you recommend for a beginner started web design",
  },
];

const Newrequests = () => {
  return (
    <>
      {questionsNotifications.map((questionsNotification, index) => (
        <div
          key={index}
          className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-[#161716] rounded-lg mb-4"
        >
          <div className="flex items-start sm:items-center justify-start gap-2 sm:gap-[31px]">
            <div className="w-9 h-9 sm:w-[41px] sm:h-[41px] rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
              <Image
                src={questionsNotification.image}
                alt="questions"
                height={100}
                width={100}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="text-[#6E6E6E] text-xs sm:text-base font-medium flex flex-wrap items-center">
                Submitted {questionsNotification.time} ago
                <div className="bg-[#2F302F] w-[3px] h-3 mx-2 sm:mx-3 hidden sm:block"></div>
                <span className="text-[#3D5682] text-xs sm:text-base ml-1">
                  {questionsNotification.category}
                </span>
              </div>

              <p className="text-[#CCCCCC] text-sm sm:text-base font-medium max-w-full">
                {truncateText(questionsNotification.content, 60)}
              </p>
            </div>
          </div>
          <div className="flex gap-x-2 mt-4 sm:mt-0">
            <Link href={"/dashboard/tutor/question"} className="self-start sm:self-auto">
              <button className="border-[1px] border-[#2D2E2D] rounded-lg w-[8.75rem] h-[3rem] flex justify-center items-center transition duration-200 ease-in-out active:scale-95 text-white font-bold text-xs sm:text-sm whitespace-nowrap">
                Reject
              </button>
            </Link>
            <Link href={"/dashboard/tutor/question"} className="self-start sm:self-auto">
              <button className="border-[1px] border-[#2D2E2D] rounded-lg w-[8.75rem] h-[3rem] flex justify-center items-center transition duration-200 ease-in-out active:scale-95 text-white font-bold text-xs sm:text-sm whitespace-nowrap">
                Accept
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Newrequests;