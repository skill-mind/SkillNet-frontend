"use client"

import { useState } from "react"
import {  Check, X } from "lucide-react"
import { JetBrains_Mono } from "next/font/google"

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] })

interface VerificationResult {
  verified: boolean
}

export default function VerificationPage() {
  const [code, setCode] = useState("")
  const [result, setResult] = useState<VerificationResult | null>(null)
  const [loading, setLoading] = useState(false)

  const verifyCertificate = () => {
    if (!code.trim()) return

    setLoading(true)
    setResult(null)

    // Simulate verification process
    setTimeout(() => {
      setResult({ verified: true })
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#121212] flex items-start justify-start pt-16 px-8">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <div className="mb-6 w-2/5 rounded-lg bg-[#1a1a1a] px-4 py-3">
          <h2 className="text-lg font-normal text-gray-200">Certificate Lookup</h2>
        </div>

        {/* Input Field */}
        <div className="space-y-2">
          <label className="text-sm font-normal text-gray-200">Enter Unique Code</label>
          <input
            type="text"
            placeholder="# + 12453ynuffjfp889wdfjnkknsk"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={`${jetBrainsMono.className} w-full rounded-md border border-[#2a2a2a] bg-[#0d0d0d] px-3 py-2 text-sm text-gray-200 placeholder-gray-600 focus:border-[#3a3a3a] focus:outline-none`}
          />
        </div>

        {/* Verify Button - Centered */}
        {!result?.verified && (
          <div className="flex justify-center mt-10">
            <button
              onClick={verifyCertificate}
              disabled={loading || !code.trim()}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D0EFB1] text-gray-200 hover:bg-[#B5D99C] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                "..."
              ) : (
                <X className="h-6 w-6 text-gray-400" />
              )}
            </button>
          </div>
        )}

        {/* Verification Result */}
        {result?.verified && (
          <div className="mt-6 flex flex-col items-center space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D0EFB1]">
              <Check className="h-6 w-6 text-white" />
            </div>
            <p className="text-base font-normal text-gray-200">This Certificate is Verified</p>
            <button className="rounded-md bg-[#D0EFB1] px-6 py-1.5 text-sm font-normal text-[#121212] hover:bg-[#B5D99C]">
              VIEW
            </button>
          </div>
        )}
      </div>
    </div>
  )
}