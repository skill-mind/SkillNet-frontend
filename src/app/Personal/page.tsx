"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function PersonalInfoForm() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="min-h-screen bg-black flex">
      {/* SVG Pattern Section */}
      <div className="hidden  md:block w-1/3 max-md:w-1/4 relative border-r border-[#1D1E2B]">
        <div className="absolute top-56 -left-28 inset-0 flex items-center justify-center">
          <Image
            src="/hexagons.svg"
            alt="Hexagons Pattern"
            width={400}
            height={400}
            className="opacity-50 text-lime-300 mr-4"
          />
        </div>
      </div>
      {/* Form Section */}
      <div className="mx-auto w-2/4 max-sm:w-full max-md:w-3/4 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full space-y-6 sm:space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold  text-[#FCFCFC] font-ubuntu">Personal Information</h1>
            <p className="text-sm sm:text-base text-[#ABABAB] font-ubuntu">Please enter the following information carefully.</p>
          </div>

          <form className="space-y-4 sm:space-y-6">
            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="name" className="text-sm sm:text-base text-[#ABABAB] font-ubuntu">
                Name
              </Label>
              <Input id="name" placeholder="Enter your name" className="bg-gray-900 outline-none  border-gray-800  text-[#FAFAFA]" />
            </div>

            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="bio" className="text-sm sm:text-base text-[#ABABAB] font-ubuntu">
                Brief Bio
              </Label>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself"
                className="bg-gray-900 border-gray-800 outline-none text-[#FAFAFA] min-h-[120px]"
              />
            </div>

            <div className="space-y-1 sm:space-y-2">
              <Label htmlFor="email" className="text-sm sm:text-base text-[#ABABAB] font-ubuntu">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 outline-none border-gray-800 text-[#FAFAFA]"
              />
            </div>

            <div className="flex items-start sm:items-center space-x-2">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="border-gray-600 mt-1 sm:mt-0"
              />
              <label
                htmlFor="terms"
                className="text-xs sm:text-sm font-thin text-[#9596A0] leading-tight sm:leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-ubuntu"
              >
                By clicking on this, you agree to the{" "}
                <a href="#" className="text-[#D0EFB1] hover:underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#D0EFB1] hover:underline">
                  Privacy Policy
                </a>{" "}
                governing Sparkiero.
              </label>
            </div>

            <Button
              className="w-full bg-[#D0EFB1] hover:bg-[#beec90] text-[#0E0F0E] font-medium text-sm sm:text-base py-2 sm:py-3"
              disabled={!agreed}
            >
              CONTINUE
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

