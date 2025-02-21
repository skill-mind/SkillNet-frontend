import questionIcon from "@/public/questionsimage.svg";
import Image from "next/image";

const questionsNotifications = [
  {
    image: questionIcon,
    time: "15 mins",
    category: "Design",
    content:
      "What videos and materials can you recommend for a beginner started web design",
  },
];

const Questions = () => {
  return (
    <>
      {questionsNotifications.map((questionsNotification, index) => (
        <div
          key={index}
          className="w-full flex items-center justify-between   py-1 "
        >
          <div className="flex items-center justify-start gap-[31px]">
            <div className=" w-[41px] h-[41px] rounded-full flex items-center justify-center overflow-hidden ">
              <Image
                src={questionsNotification.image}
                alt="students"
                height={100}
                width={100}
                className="w-[41px] h-[41px] object-contain "
              />
            </div>

            <div className="flex flex-col gap-3 ">
              <h4 className="text-[#6E6E6E] text-base font-medium flex items-center">
                Asked {questionsNotification.time} mins ago
                <div className="bg-[#2F302F] w-[3px] h-4 mx-3"></div>
                <span className="text-[#3D5682]">
                  {" "}
                  {questionsNotification.category}{" "}
                </span>
              </h4>

              <p className="text-[#CCCCCC] text-base font-medium ">
                {questionsNotification.content}{" "}
              </p>
            </div>
          </div>

          <button className="  border-[1px] border-[#2D2E2D] rounded-lg py-3 px-[18px] transition duration-200 ease-in-out active:scale-95 text-white font-bold text-sm ">
            Answer Question
          </button>
        </div>
      ))}
    </>
  );
};

export default Questions;
