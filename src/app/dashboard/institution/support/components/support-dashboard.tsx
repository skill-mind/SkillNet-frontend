import { SupportSection } from "./support-section"
import { ActionHistoryTable } from "./action-history-table"

// Sample data for support items
const supportItems = [
  {
    id: "course-creation",
    // title: "Course Creation Guide",
    description: "How to structure, upload, and edit courses",
    content:
      "This guide provides detailed instructions on how to create effective courses. Start by planning your curriculum, then record high-quality videos with good lighting and audio. Upload your content through the creator dashboard and organize it into sections and lectures. You can edit your course at any time by accessing the course management page.",
  },
  {
    id: "earnings-payments",
    // title: "Earnings & Payments",
    description: "How earnings are calculated & withdrawal process",
    content:
      "Earnings are calculated based on student enrollments, course price, and platform fees. You'll receive 70% of the course price for direct sales and varying percentages for promotional sales. Payments are processed monthly with a 30-day holding period. To withdraw funds, set up your preferred payment method in the payments dashboard and request a withdrawal once you reach the minimum threshold.",
  },
  {
    id: "student-engagement",
    // title: "Student Engagement Tips",
    description: "How to improve student interaction & ratings",
    content:
      "Engage with your students by responding to questions promptly, creating discussion prompts, and offering additional resources. Consider hosting live Q&A sessions and updating your course regularly with fresh content. Encourage students to leave reviews by sending follow-up messages after they complete significant portions of your course.",
  },
  {
    id: "technical-issues",
    // title: "Technical Issues",
    description: "Troubleshooting course uploads, media files, etc.",
    content:
      "If you're experiencing upload issues, check that your files meet our format requirements (MP4 for video, MP3 for audio, PDF for documents). Large files may need to be compressed. For playback issues, ensure your browser is updated. If problems persist, clear your cache or try a different browser. Contact our technical support team for assistance with persistent issues.",
  },
  {
    id: "blockchain-integration",
    // title: "Blockchain Integration Help",
    description: "Understanding on-chain payments & certifications",
    content:
      "Our platform supports blockchain-based payments and course certifications. To enable cryptocurrency payments, connect your wallet in the payment settings. For issuing blockchain certificates, you'll need to enable this feature in your course settings. Each certificate is minted as an NFT when a student completes your course, providing verifiable proof of their achievement.",
  },
]

// Sample data for action history
const actionHistoryItems = [
  {
    id: 1,
    date: "12th Dec, 2025",
    ticketId: "#12345",
    issueCategory: "Payment Issue",
    status: "Resolved" as const,
    lastUpdate: "2025-02-19",
  },
  {
    id: 2,
    date: "12th Dec, 2025",
    ticketId: "#67890",
    issueCategory: "Course Upload Error",
    status: "Pending" as const,
    lastUpdate: "2025-02-17",
  },
  {
    id: 3,
    date: "12th Dec, 2025",
    ticketId: "#24680",
    issueCategory: "Student Dispute",
    status: "Completed" as const,
    lastUpdate: "2025-02-16",
  },
]

export function SupportDashboard() {
  return (
    <div className="flex w-full flex-col space-y-8 bg-[#101110] px-5 py-5">
      <SupportSection items={supportItems} />
      <ActionHistoryTable items={actionHistoryItems} />
    </div>
  )
}

