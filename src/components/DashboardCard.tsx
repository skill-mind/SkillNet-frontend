import React from "react";

function DashboardCard({
  background,
  color,
  icon,
  value,
  item,
}: {
  background: string;
  color: string;
  icon: React.ReactNode;
  value: string;
  item: string;
}) {
  return (
    <div className=" w-full py-[10px] md:py-[30px] px-3 md:px-7 bg-[#161716] rounded-lg flex items-center gap-x-6">
      <div
        className={`md:h-[64px] md:w-[64px] h-[40px] w-[40px] p-2 md:p-0 rounded-full flex justify-center items-center`}
        style={{ color, backgroundColor: background }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-y-1 text-white">
        <h3 className="text-[30px] leading-10 font-medium">{value}</h3>
        <h5 className="text-sm leading-6 text-[#FFFFFFCC]">{item}</h5>
      </div>
    </div>
  );
}

export default DashboardCard;
