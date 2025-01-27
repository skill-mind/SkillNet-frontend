import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { TermsContent } from "@/components/TermsContent"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <TermsContent />
      <Footer/>
    </div>
  )
}

