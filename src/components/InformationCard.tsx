import React from "react";

function InformationCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-10 min-h-[244px] bg-stone-700/5 space-y-5 w-fit max-w-[398px] rounded-lg border border-stone-600/30 ">
      <h1 className=" text-xl  text-white/90 font-medium">{title}</h1>

      <p className="max-w-[347px] text-[#898783]">{description}</p>
    </div>
  );
}

export default InformationCard;
