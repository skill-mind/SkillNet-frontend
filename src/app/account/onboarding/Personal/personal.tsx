"use client";

import Button from "@/components/Forms/Button";
import Checkbox from "@/components/Forms/Checkbox";
import Input from "@/components/Forms/Input";
import Textarea from "@/components/Forms/TextArea";

export default function Personal() {
  const handleContinue = () => {};

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 h-screen bg-black">
      {/* SVG Pattern Section */}
      <div className="hidden md:block hexagon-img border-r-2 border-[#1D1E2B] md:col-span-2 h-screen"></div>

      {/* Form Section */}
      <div className="col-span-1 md:col-span-3 h-screen overflow-y-auto py-10 md:py-20 px-5 md:px-8">
        <div className="flex flex-col justify-center items-center px-3 md:px-0">
          <div className="header-details text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#FCFCFC] font-ubuntu">
              Personal Information
            </h1>
            <p className="text-sm sm:text-base text-[#ABABAB]">
              Please enter the following information carefully.
            </p>
          </div>

          <form className="flex flex-col gap-6 w-full max-w-md">
            <div className="space-y-1 sm:space-y-2">
              <p className="text-sm sm:text-base text-[#ABABAB] font-ubuntu">Name</p>
              <Input
                id="name"
                placeholder="Enter your name"
                className="bg-gray-900 outline-none font-work-sans border-gray-800 text-[#FAFAFA]"
              />
            </div>

            <div className="space-y-1 sm:space-y-2">
              <p className="text-sm sm:text-base text-[#ABABAB] font-ubuntu">Brief Bio</p>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself"
                className="bg-gray-900 border-gray-800 font-work-sans outline-none text-[#FAFAFA] min-h-[120px]"
              />
            </div>

            <div className="space-y-1 sm:space-y-2">
              <p className="text-sm sm:text-base text-[#ABABAB] font-ubuntu">Email</p>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 outline-none font-work-sans border-gray-800 text-[#FAFAFA]"
              />
            </div>

            <div className="my-2">
              <Checkbox isAgreement={true} privacyUrl="" termsUrl="" />
            </div>

            <div className="my-2 w-full">
              <Button label="CONTINUE" onButtonClick={handleContinue} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
