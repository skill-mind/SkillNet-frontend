import Image from "next/image";
import studentIcon from "@/public/img/tutor icon/studentsDashboard.svg";

const studentNotifications = [
  {
    heading: "Josh joined your design class",
    content: "Welcome them by sending them a warm message",
    time: "3hrs ago",
  },
  {
    heading: "Faith joined your design class",
    content: "Welcome them by sending them a warm message",
    time: "1 day ago",
  },
];

const NewStudent = () => {
  return (
    <>
      {studentNotifications.map((studentNotification, index) => (
        <div
          key={index}
          className="w-full flex justify-between items-center py-3 border-b-[1px] border-[#2D2E2D] "
        >
          <div className="flex items-center gap-[18px] ">
            <span className=" h-12 w-12 rounded-full bg-[#2D2E2D] flex items-center justify-center ">
              <Image
                src={studentIcon}
                alt="students"
                height={100}
                width={100}
                className="w-6 h-6 object-contain "
              />
            </span>
            <div>
              <h1 className="text-[#CCCCCC] text-base font-medium ">
                {" "}
                {studentNotification.heading}{" "}
              </h1>
              <p className="text-[#6E6E6E] text-base font-medium ">
                {" "}
                {studentNotification.content}{" "}
              </p>
            </div>
          </div>

          <p className="text-[#6E6E6E] text-base font-medium ">
            {studentNotification.time}
          </p>
        </div>
      ))}
    </>
  );
};

export default NewStudent;
