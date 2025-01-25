import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const featureCard = [
  {
    name: "Integrity",
    content:
      "Users must provide truthful and accurate information during account creation, course participation, and job applications. Institutions and tutors are expected to maintain high standards of integrity in course creation and exam hosting.",
  },
  {
    name: "Transparency",
    content:
      "SkillNet commits to providing a transparent system where certifications, exam results, and transactions are verifiable and tamper-proof.",
  },
  {
    name: "Accountability",
    content:
      "Employers, tutors, and institutions are accountable for the accuracy of their job postings, courses, and exam content. Users are responsible for adhering to platform guidelines.",
  },
  {
    name: "Respect and Professionalism",
    content:
      "Users must interact respectfully within the platform, avoiding inappropriate conduct or communications.",
  },
  {
    name: "Fairness",
    content:
      "All users are treated equally and provided equal opportunities to benefit from SkillNet’s features. Discrimination or misuse will not be tolerated.",
  },
  {
    name: "Compliance",
    content:
      "All platform users must comply with applicable laws, regulations, and the terms outlined by SkillNet.",
  },
];

export default function CodeOfEthics() {
  return (
    <>
      <Navbar />

      <div className="w-full md:w-[1256px] mx-auto flex flex-col items-center gap-6 py-14 px-7 md:py-[100px] md:px-[80px] mt-10">
        <h1 className="text-[40px] text-center font-bold uppercase leading-tight h-12 w-full md:w-[331px] ">
          Code of Ethics
        </h1>
        <p className="text-base font-light text-[#80837E] text-center ">
          Guiding Principles That Define Our Values and Commitments.
        </p>
        <div className="featurecard-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-10 my-7 mt-9  ">
          {featureCard.map((card, index) => (
            <div
              key={index}
              className="bg-[#101110] border border-[#222220] px-7 py-6 rounded-[15px] max-w-[398px] sm:h-auto lg:min-h-[244px]   "
            >
              <span className="flex items-center justify-start w-full gap-2 mb-3">
                <h2 className="text-lg font-medium text-[#EAEDE7] my-4 ">
                  {card.name}
                </h2>{" "}
              </span>

              <p className="text-base font-light text-[#898783] ">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
