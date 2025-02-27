'use client'
import React, { useState } from "react";
import IssuedCertificates from "../components/IssuedCertificates";
import VerifyCertificates from "../components/VerifyCertificates";

const Certifications = () => {
   //current tabs on the pages
   const tabs = [
    {
      name: "Issued Certificates",
      component: <IssuedCertificates />,
    },

    { 
      name: "Verified Certificates", 
      component: <VerifyCertificates /> 
    },
   
  ];

  //this set the first tab as default 
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  return (
    <div>
      {/* the two tabs on the top */}
      <div className='flex space-x-4 pb-2'>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`px-5 py-4 text-sm rounded-md font-medium ${
              activeTab === tab.name
                ? " bg-[#161716]  text-white"
                : " text-gray-300"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>

        //    <Button
        //    key={tab.name}
        //    label={tab.name}
        //    onButtonClick={() => setActiveTab(tab.name)}
        //  />
        ))}
      </div>

      {/* this tracks the selected tab and returns the content  */}
      <div className='p-4 mt-4'>
        {tabs.find((tab) => tab.name === activeTab)?.component}
      </div>
    </div>
  )
}

export default Certifications