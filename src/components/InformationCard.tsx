import React from "react";

function InformationCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="py-[40px] px-[60px] bg-[#101110] border border-[#222220] rounded-lg min-h-[244px] w-[398px]">
      <h3 className="text-lg leading-[22px] text-[#EAEDE7] mb-[30px] font-medium">
        {title}
      </h3>
      <p className="text-sm leading-[17px] text-[#898783]">{description}</p>
    </div>
  );
}

export default InformationCard;
