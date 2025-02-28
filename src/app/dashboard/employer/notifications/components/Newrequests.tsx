import questionIcon from "@/public/questionsimage.svg";
import Image from "next/image";
import Link from "next/link";

const questionsNotifications = [
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
          className="w-full flex justify-between items-center p-6 bg-[#161716] rounded-lg "
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
              <h4 className="text-[#6E6E6E] text-xs sm:text-base font-medium flex flex-wrap items-center">
                Submitted {questionsNotification.time} ago
                <div className="bg-[#2F302F] w-[3px] h-3 mx-2 sm:mx-3 hidden sm:block"></div>
                <span className="text-[#3D5682] text-xs sm:text-base ml-0 sm:ml-0 mt-1 sm:mt-0">
                  {questionsNotification.category}
                </span>
              </h4>

              <p className="text-[#CCCCCC] text-sm sm:text-base font-medium max-w-full ">
                {questionsNotification.content}
              </p>
            </div>
          </div>

          <Link
            href={"/dashboard/tutor/question"}
            className="self-start sm:self-auto"
          >
            <button className="mx-4 border-[1px] border-[#2D2E2D] rounded-lg py-2 sm:py-3 px-4 sm:px-[18px] transition duration-200 ease-in-out active:scale-95 text-white font-bold text-xs sm:text-sm whitespace-nowrap mt-2 sm:mt-0">
              Reject
            </button>
            <button className="border-[1px] border-[#2D2E2D] rounded-lg py-2 sm:py-3 px-4 sm:px-[18px] transition duration-200 ease-in-out active:scale-95 text-white font-bold text-xs sm:text-sm whitespace-nowrap mt-2 sm:mt-0">
              Accept
            </button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Newrequests;
