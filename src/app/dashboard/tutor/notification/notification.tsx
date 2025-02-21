"use client";
import Image from "next/image";
import { useState } from "react";
import studentIcon from "@/public/img/tutor icon/studentsDashboard.svg";
import walletIcon from "@/public/img/tutor icon/walletDashboard.svg";
import speakerIcon from "@/public/megaphone-02.svg";
import questionIcon from "@/public/questionsimage.svg"

function Notification() {
  const [displayedNotification, setDisplayedNotification] =
    useState("New student");

  const buttons = ["New student", "Questions", "Payment", "Announcements"];

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

  const questionsNotifications = [
    {
      image: questionIcon,
      time: "15 mins",
      category: "Design",
      content:
        "What videos and materials can you recommend for a beginner started web design",
    },
  ];

  const paymentNotifications = [
    {
      message: "$15 was paid to your account by 0x411ad3c6abf11",
      time: "15 hours ago"
    },
    {
      message: "$150 was paid to your account by 0x411ad3c6abf11",
      time: "1 week ago"
    }
  ];
  const announcementNotifications = [
    {
      heading: "Upcoming Student Assessments",
      message: "Don’t forget to prepare your students for the Quarterly Assessment starting Feb 10th, 2025.",
    },
    {
      heading: "Policy Update",
      message: "Starting March 1st, 2025, all session reports must be submitted within 24 hours of the session.",
    }
  ]

  function NewStudent() {
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
  }

  function Questions() {
    return (
      <>
        {questionsNotifications.map((questionsNotification, index) => (
          <div className="w-full flex items-center justify-between   py-1 ">
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
  }

  function Payment() {
    return (
      <>
        {paymentNotifications.map((paymentNotification, index) => (
          <div
            key={index}
            className="w-full flex justify-between items-center py-3 border-b-[1px] border-[#2D2E2D] "
          >
            <div className="flex items-center gap-[18px] ">
              <span className=" h-12 w-12 rounded-full bg-[#2D2E2D] flex items-center justify-center ">
                <Image
                  src={walletIcon}
                  alt="students"
                  height={100}
                  width={100}
                  className="w-6 h-6 object-contain "
                />
              </span>
              <div>
                <h1 className="text-[#CCCCCC] text-base font-medium ">
                  {" "}
                  {paymentNotification.message}{" "}
                </h1>
              </div>
            </div>

            <p className="text-[#6E6E6E] text-base font-medium ">
              {paymentNotification.time}
            </p>
          </div>
        ))}
      </>
    );
  }

  function Announcements() {
    return       <>
    {announcementNotifications.map((announcementNotification, index) => (
      <div
        key={index}
        className="w-full flex justify-between items-center p-6 bg-[#161716] rounded-lg "
      >
        <div className="flex items-center gap-[18px] ">
          <span className=" h-12 w-12 rounded-full bg-[#2D2E2D] flex items-center justify-center ">
            <Image
              src={speakerIcon}
              alt="students"
              height={100}
              width={100}
              className="w-6 h-6 object-contain "
            />
          </span>
          <div>
            <h1 className="text-[#CCCCCC] text-base font-medium mb-1 ">
              {" "}
              {announcementNotification.heading}{" "}
            </h1>
            <p className="text-[#6E6E6E] text-base font-medium ">
              {" "}
              {announcementNotification.message}{" "}
            </p>
          </div>
        </div>

      </div>
    ))}
  </>
    
    ;
  }

  const renderComponent = () => {
    switch (displayedNotification) {
      case "New student":
        return <NewStudent />;
      case "Questions":
        return <Questions />;
      case "Payment":
        return <Payment />;
      case "Announcements":
        return <Announcements />;

      default:
        return null;
    }
  };

  return (
    <div className="w-[1000px] h-full ">
      <header className=" w-full max-w-[429px)] min-h-[32px] flex items-center justify-start gap-[17px] ">
        {buttons.map((button, index) => (
          <button
            onClick={() => setDisplayedNotification(button)}
            className={`py-1 px-[14px] h-8 mx-[5px] min-w-[77px]  rounded-[48px]  text-xs font-medium ${
              displayedNotification === button
                ? "bg-[#2D2E2D] "
                : "bg-[#161716]"
            } `}
          >
            {button}{" "}
          </button>
        ))}
      </header>

      <div className="text-white flex flex-col gap-3 py-5 px-4 ">
        {renderComponent()}
      </div>
    </div>
  );
}

export default Notification;
