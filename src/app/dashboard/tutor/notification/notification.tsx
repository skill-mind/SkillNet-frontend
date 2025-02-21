"use client";
import Image from "next/image";
import { useState } from "react";
import studentIcon from "@/public/img/tutor icon/studentsDashboard.svg";

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

  function NewStudent() {
    return (
      <>
        {studentNotifications.map((studentNotification, index) => (
          <div className="w-full flex justify-between items-center py-3 border-b-[1px] border-[#2D2E2D] ">
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
        <div></div>
      </>
    );
  }

  function Payment() {
    return <div>payment</div>;
  }

  function Announcements() {
    return <div>announcements</div>;
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
