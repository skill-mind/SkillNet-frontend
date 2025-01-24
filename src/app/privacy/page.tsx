import React from "react";

const page = () => {
  
  return (
    <section className="h-[847px]   flex  justify-center pt-10 ">
      <div className="w-full px-[100px] h-screen mx-auto flex flex-col  ">
        <div className="flex justify-center">
          <h1 className="text-[40px] text-pretty font-bold text-[#EAEDE7]">
            PRIVACY POLICY
          </h1>
        </div>
        <div className="flex flex-col mt-10 gap-[10px]">
          <div className="flex flex-col gap-[20px] border-b border-[#595958] pb-[24px] pt-[24px]">
            <h2 className="text-lg text-[#FFFFFF]">Data Collection</h2>
            <p className=" text-sm text-[#898783]">
              SkillNet collects user necessary for account creation, course
              enrollment, and exam hosting. this includes wallet addresses and
              any additional data shared during platform use.
            </p>
          </div>

          <div className="flex flex-col gap-[20px] border-b border-[#595958] pb-[24px] pt-[24px]">
            <h2 className="text-lg text-[#FFFFFF]">Data Security</h2>
            <p className=" text-sm text-[#898783]">
              All user data is securely stored and encrypted. Blockchain-based
              certification and result are publicy verifiable but do not
              disclose personal information.
            </p>
          </div>

          <div className="flex flex-col gap-[20px] border-b border-[#595958] pb-[24px] pt-[24px]">
            <h2 className="text-lg text-[#FFFFFF]">Third-Party Data Sharing</h2>
            <p className=" text-sm text-[#898783]">
              SkillNet does not share personal data with third parties unless
              required for certification verification by law
            </p>
          </div>

          <div className="flex flex-col gap-[20px] border-b border-[#595958] pb-[24px] pt-[24px]">
            <h2 className="text-lg text-[#FFFFFF]">User Consent</h2>
            <p className=" text-sm text-[#898783]">
              By using SkillNet, you consent to the Collection, storage, and
              processing of your data as outlined in this policy
            </p>
          </div>

          <div className="flex flex-col gap-[20px] border-b border-[#595958] pb-[24px] pt-[24px]">
            <h2 className="text-lg text-[#FFFFFF]">Data Retention</h2>
            <p className=" text-sm text-[#898783]">
              User data will be retained as long as necessary to fulfill the
              platform's purpose or as required by law.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
