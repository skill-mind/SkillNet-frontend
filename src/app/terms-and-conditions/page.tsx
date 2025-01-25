import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import hexagon from "../../public/img/hexagonn.svg";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="pt-[150px] text-center flex flex-col items-center px-4 md:px-[60px] lg:px-[100px] relative">
        <Image
          src={hexagon}
          alt=""
          className="absolute z-[-1] left-[25px] lg:left-[59px] top-[-232px]"
        />
        <h1 className="font-bold text-[40px] leading-[48px] text-[#EAEDE7] mb-[56px]">
          Terms and Condition
        </h1>
        <div className="flex flex-col gap-y-[10px]">
          <div className="py-6 border-b border-b-[#252625] text-left">
            <h3 className="font-medium text-lg mb-5">Account Creation</h3>
            <p className="text-[#898783] text-sm leading-[17px]">
              By creating an account with SkillNet using Bravoo or Argent wallet
              addresses, you agree to provide accurate and complete information.
              You are responsible for maintaining the confidentiality of your
              wallet and any associated credentials.
            </p>
          </div>
          <div className="py-6 border-b border-b-[#252625] text-left">
            <h3 className="font-medium text-lg mb-5">Use of Platform</h3>
            <p className="text-[#898783] text-sm leading-[17px]">
              Users may only use SkillNet for its intended purposes, including
              job applications, course enrollments, and exam hosting. Any
              misuse, such as attempting to tamper with certifications or exams,
              will result in account termination.
            </p>
          </div>
          <div className="py-6 border-b border-b-[#252625] text-left">
            <h3 className="font-medium text-lg mb-5">
              Payment and Transaction
            </h3>
            <p className="text-[#898783] text-sm leading-[17px]">
              All payments made through the StarkNet blockchain are final and
              non-refundable, except in cases of proven system errors.
            </p>
          </div>
          <div className="py-6 border-b border-b-[#252625] text-left">
            <h3 className="font-medium text-lg mb-5">
              Certification and Exam Hosting
            </h3>
            <p className="text-[#898783] text-sm leading-[17px]">
              SkillNet ensures that all certifications and exam results are
              securely stored on the blockchain for verification purposes.
              However, SkillNet is not liable for misrepresentation or
              inaccuracies provided by third-party institutions or tutors.
            </p>
          </div>
          <div className="py-6 border-b border-b-[#252625] text-left">
            <h3 className="font-medium text-lg mb-5">Amendments</h3>
            <p className="text-[#898783] text-sm leading-[17px]">
              SkillNet reserves the right to update these terms and conditions
              at any time. Continued use of the platform constitutes acceptance
              of the updated terms
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
