export function TermsContent() {
  const terms = [
    {
      title: "Account Creation",
      content:
        "By creating an account with SkillNet using Bravoo or Argent wallet addresses, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your wallet and any associated credentials.",
    },
    {
      title: "Use of Platform",
      content:
        "Users may only use SkillNet for its intended purposes, including job applications, course enrollments, and exam hosting. Any misuse, such as attempting to tamper with certifications or exams, will result in account termination.",
    },
    {
      title: "Payment and Transaction",
      content:
        "All payments made through the StarkNet blockchain are final and non-refundable, except in cases of proven system errors.",
    },
    {
      title: "Certification and Exam Hosting",
      content:
        "SkillNet ensures that all certifications and exam results are securely stored on the blockchain for verification purposes. However, SkillNet is not liable for misrepresentation or inaccuracies provided by third-party institutions or tutors.",
    },
    {
      title: "Limitation of Liability",
      content:
        "SkillNet will not be held responsible for any loss or damage resulting from misuse of the platform or blockchain-related issues beyond its control.",
    },
    {
      title: "Amendments",
      content:
        "SkillNet reserves the right to update these terms and conditions at any time. Continued use of the platform constitutes acceptance of the updated terms",
    },
  ];

  return (
    <main className="w-full md:w-[1256px] mx-auto flex flex-col items-center gap-6 py-14 px-7 md:py-[100px] md:px-[80px] mt-10 ">
      <h1 className="text-4xl font-bold text-white text-center mb-20">
        TERMS AND CONDITION
      </h1>
      <div className="space-y-12">
        {terms.map((term, index) => (
          <section
            key={index}
            className="border-b border-gray-800 pb-8 last:border-none"
          >
            <h2 className="text-xl font-semibold text-white mb-3 text-left">
              {term.title}
            </h2>
            <p className="text-gray-400 leading-relaxed text-left">
              {term.content}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
