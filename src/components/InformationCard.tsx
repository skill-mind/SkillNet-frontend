import React from "react";

function InformationCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    // <div className="py-[40px] px-[60px] bg-[#101110] border border-[#222220] rounded-lg min-h-[244px] w-[398px]">
    //   <h3 className="text-lg leading-[22px] text-[#EAEDE7] mb-[30px] font-medium">
    //     {title}
    //   </h3>
    //   <p className="text-sm leading-[17px] text-[#898783]">{description}</p>
    // </div>
    <div
      className="p-10 min-h-[244px] bg-stone-700/5 space-y-5 w-fit max-w-[398px] rounded-lg border border-stone-600/30 "
    >
      <h1 className=" text-xl  text-white/90 font-medium">{title}</h1>

      <p className="max-w-[347px] text-[#898783]">{description}</p>
    </div>
  );
}

export default InformationCard;
