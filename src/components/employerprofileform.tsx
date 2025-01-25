"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { HexagonPattern } from "./HexagonPattern"

export default function EmployerProfileForm() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      
      <div className="hidden lg:block bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent"></div>
        <div className="absolute bottom-0 left-1/1.5 transform -translate-x-1/2.5 translate-y-1/1 opacity-30">
          <HexagonPattern />
        </div>
      </div>

    {/* form section */}
      <div className="bg-black p-8 lg:p-12 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold text-white">Build your profile as employer</h1>
            <p className="text-zinc-400">Enter your professional details</p>
          </div>

          <form className="space-y-6 text-center">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-zinc-200 block text-left">
                Name of company
              </Label>
              <Input
                id="company"
                placeholder="Enter your company name"
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-zinc-200 block text-left">
                Brief description of company
              </Label>
              <Textarea
                id="description"
                placeholder="Description......"
                className="min-h-[120px] bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-200 block text-left">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Company email"
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
              />
            </div>

            <div className="flex items-start space-x-2 justify-center text-left">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="mt-1"
              />
              <Label
                htmlFor="terms"
                className="text-sm text-zinc-400 font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                By clicking on this, you agree to the{" "}
                <a href="#" className="text-white hover:underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-white hover:underline">
                  Privacy Policy
                </a>{" "}
                governing Skillnet.
              </Label>
            </div>

            <Button className="w-full bg-[#D0EFB1] hover:bg-[#a9e3ae] text-black font-medium" disabled={!agreed}>
              CONTINUE
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

