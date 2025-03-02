import { SupportSection } from "./support-section";
import { ActionHistoryTable } from "./action-history-table";

// content data for support items
const supportItems = [
  {
    id: "course-creation",
    description: "Course Creation Guide (How to structure, upload, and edit courses)",
    content: `1. Structuring Your Course
• Define Objectives: Identify target audience & learning outcomes.
• Create Outline: Divide into modules (Introduction, Core Lessons, Assessments, Conclusion).
• Choose Formats: Video lectures, PDFs, quizzes, assignments, and discussion forums.

2. Uploading Your Course
• Upload Content: Ensure high-quality videos, structured lessons, and interactive elements.
• Set Pricing: Free, one-time payment, or subscription model.

3. Editing & Managing
• Update Content: Keep lessons relevant, improve UX, and add new resources.
• Track Progress: Use analytics to monitor engagement, respond to questions.
• Enhance Accessibility: Optimize video quality, add captions.

4. Launch & Promotion
• Pre-Launch: Build an email list, offer early access, create a landing page.
• Marketing: Use social media ads, SEO, influencers, and webinars.
• Optimize: Gather feedback, offer bonuses, and build a learner community.`,
  },
  {
    id: "earnings-payments",
    description: "Earnings & Payments (How earnings are calculated & withdrawal process)",
    content: `1. How Earnings are Calculated
• Revenue Model: You receive 70% of the course price for direct sales.
• Promotional Sales: Varying percentages based on promotion type (platform-wide sales: 60%, affiliate sales: 50%).
• Bundle Earnings: Prorated based on your course's contribution to the bundle.

2. Payment Schedule
• Processing Period: Payments are calculated at the end of each month.
• Holding Period: 30-day holding period for all transactions to account for refunds.
• Release Dates: Funds become available for withdrawal on the 15th of each month.

3. Withdrawal Process
• Minimum Threshold: $50 minimum withdrawal amount.
• Payment Methods: Direct bank transfer, PayPal, or cryptocurrency options.
• Setup Requirements: Complete tax forms and verify your identity before withdrawal.
• Processing Time: 3-5 business days for standard transfers, 1-2 days for expedited options.

4. Tax Considerations
• 1099 Forms: Provided annually for earnings over $600.
• International Creators: May be subject to withholding based on tax treaties.
• Documentation: Keep records of all course-related expenses for tax deductions.`,
  },
  {
    id: "student-engagement",
    description: "Student Engagement Tips (How to improve student interaction & ratings)",
    content: `1. Creating Interactive Content
• Discussion Prompts: Add thought-provoking questions at the end of each section.
• Assignments: Include practical exercises that apply learned concepts.
• Live Sessions: Schedule monthly Q&A or workshop sessions.

2. Responsive Communication
• Response Time: Aim to answer questions within 24 hours.
• Welcome Message: Send a personalized message to new students.
• Announcement Updates: Share news, additional resources, and industry updates.

3. Building Community
• Student Forums: Create a dedicated space for peer-to-peer interaction.
• Study Groups: Facilitate collaborative learning opportunities.
• Success Spotlights: Showcase student achievements and case studies.

4. Gathering and Implementing Feedback
• Mid-Course Surveys: Collect feedback while students are actively engaged.
• Completion Follow-ups: Send requests for reviews after course milestones.
• Iterative Improvement: Update content based on common questions and suggestions.
• Personal Touch: Add video responses to address common questions.`,
  },
  {
    id: "technical-issues",
    description: "Technical Issues (Troubleshooting course uploads, media files, etc.)",
    content: `1. Video Upload Problems
• Supported Formats: MP4, MOV, and AVI with H.264 encoding.
• Size Limitations: Maximum file size of 4GB per video.
• Resolution Requirements: Minimum 720p (1280x720) resolution.
• Compression Tips: Use HandBrake or Adobe Media Encoder to optimize file size.

2. Audio Quality Issues
• Format Requirements: MP3 or AAC at 128kbps or higher.
• Background Noise: Use noise reduction software before uploading.
• Volume Levels: Maintain consistent -12dB to -6dB levels throughout.

3. Document and Supplement Materials
• Supported File Types: PDF, DOCX, XLSX, PPTX up to 100MB.
• Accessibility Tips: Ensure documents are formatted with proper headings and alt text.
• Template Usage: Utilize our branded templates for consistent appearance.

4. Platform Compatibility
• Browser Support: Chrome, Firefox, Safari, and Edge (latest versions).
• Mobile Optimization: Test content on iOS and Android devices.
• Connection Issues: Minimum 5Mbps upload speed recommended for reliable uploads.

5. Getting Help
• Priority Support: Available Monday-Friday, 9am-5pm EST.
• Ticket System: Submit detailed tickets with screenshots and device information.
• Live Assistance: Schedule a 15-minute troubleshooting call with our tech team.`,
  },
  {
    id: "blockchain-integration",
    description: "Blockchain Integration Help (Understanding on-chain payments & certifications)",
    content: `1. Setting Up Cryptocurrency Payments
• Supported Currencies: ETH, BTC, USDC, and platform-native tokens.
• Wallet Connection: Connect your MetaMask, Coinbase Wallet, or WalletConnect.
• Fee Structure: 2% platform fee + network gas fees (paid by students).
• Payout Options: Automatic conversion to fiat or keep in cryptocurrency.

2. Blockchain Certifications
• Certificate Types: Course Completion, Skill Verification, and Achievement NFTs.
• Creation Process: Enable certifications in course settings and define requirements.
• Metadata Standards: Customize certificate appearance and embedded credentials.
• Verification System: Students receive a verifiable link and on-chain proof.

3. Smart Contract Integration
• Royalty Mechanisms: Set up secondary market royalties for resold certificates.
• Revenue Splitting: Configure automatic revenue distribution for collaborative courses.
• Conditional Access: Create token-gated content for premium or community members.

4. Technical Requirements
• Gas Optimization: Certificates are batch minted to reduce costs.
• Network Options: Ethereum mainnet, Polygon, Arbitrum, or Optimism.
• Resource Links: Developer documentation and API reference for custom integrations.

5. Compliance Considerations
• KYC Requirements: Verification needed for payments above $3,000.
• Tax Reporting: Automatic 1099-K generation for crypto earnings.
• Jurisdictional Limitations: Available in supported countries only.`,
  },
];

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
];

export function SupportDashboard() {
  return (
    <div className="flex w-full flex-col space-y-8 bg-[#101110] px-5 py-5">
      <SupportSection items={supportItems} />
      <ActionHistoryTable items={actionHistoryItems} />
    </div>
  );
}