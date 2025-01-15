import Image from "next/image";

const featureCard = [
    {
      name: "Integrity",
      content: "Users must provide truthful and accurate information during account creation, course participation, and job applications. Institutions and tutors are expected to maintain high standards of integrity in course creation and exam hosting.",
    },
    {
      name: "Transparency",
      content: "SkillNet commits to providing a transparent system where certifications, exam results, and transactions are verifiable and tamper-proof.",
    },
    {
      name: "Accountability",
      content: "Employers, tutors, and institutions are accountable for the accuracy of their job postings, courses, and exam content. Users are responsible for adhering to platform guidelines.",
    },
    {
      name: "Respect and Professionalism",
      content: "Users must interact respectfully within the platform, avoiding inappropriate conduct or communications.",
    },
    {
      name: "Fairness",
      content: "All users are treated equally and provided equal opportunities to benefit from SkillNet’s features. Discrimination or misuse will not be tolerated.",
    },
    {
      name: "Compliance",
      content: "All platform users must comply with applicable laws, regulations, and the terms outlined by SkillNet.",
    },
  ];
  
  export default function CodeOfEthics() {
    return (
      <div className="w-full min-h-[85vh] bg-white flex flex-col items-center justify-center gap-5 px-4 my-6">
        <h1 className="text-[#020402] font-bold text-5xl text-center  ">Code of Ethics</h1>
        <p className="text-base font-light text-[#020402] text-center ">
          Guiding Principles That Define Our Values and Commitments.
        </p>
        <div className="featurecard-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 my-7 mt-9  ">
          {featureCard.map((card, index) => (
            <div
              key={index}
              className="bg-[#ffffff] border border-[#D0EFB1] px-4 py-6 rounded-[15px] max-w-[410px] h-auto   "
            > 
             <span className="flex items-center justify-start w-full gap-2 mb-3" >

                <Image src="/shield.svg" width={100} height={100} alt="shield" className=" w-[33px] h-[33px] object-contain " /> 
                 <h2 className="text-lg font-medium text-[#020402] ">{card.name}</h2> </span>



              <p className="text-base font-light text-[#000000] ">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  