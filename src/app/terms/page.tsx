import { Metadata } from "next";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { TermsContent } from "@/components/TermsContent"


export const metadata: Metadata = {
  title: "Terms And Conditions",
  description:
    "Learn about SkillNet, a decentralized platform for job seekers and employers.",
  keywords: [
    "SkillNet",
    "decentralized jobs",
    "blockchain certification",
    "secure exams",
  ],
};


export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <TermsContent />
      <Footer/>
    </div>
  )
}

