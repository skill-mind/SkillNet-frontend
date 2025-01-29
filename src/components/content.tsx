import Image from "next/image";
import globe from "@/public/img/globe.svg";
import jobcard from "@/public/img/Job card.png";

interface Feature {
  icon: string;
  text: string;
}

interface CourseObjective {
  text: string;
}

 const ContentComponent = () => {
  const courseObjectives: CourseObjective[] = [
    {
      text: "Learn the fundamentals of blockchain technology and its applications.",
    },
    { text: "Master smart contract development using Solidity." },
    {
      text: "Gain experience working with Ethereum and other popular blockchain platforms.",
    },
    {
      text: "Build, test, and deploy your own decentralized applications (dApps).",
    },
    {
      text: "Understand blockchain security best practices and scalability solutions.",
    },
  ];
  const features: Feature[] = [
    { icon: globe, text: "24 Videos" },
    { icon: globe, text: "10 Assessments" },
    { icon: globe, text: "5 Tracks" },
    { icon: globe, text: "34,529 Enrollees" },
    { icon: globe, text: "Certificate of Completion" },
    { icon: globe, text: "Unlimited Access" },
  ];
  return (
    <div className="overflow-hidden">
      <div className=" relative z-10">
        <h1 className="text-3xl font-bold mb-4">
          Blockchain Development Bootcamp: Zero to Hero
        </h1>
        <p className="text-gray-400 text-sm mb-4">By Satoshi Nakamoto</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 md:max-w-5xl">
            <div className=" w-full rounded-lg mb-8">
              <Image
                src={jobcard}
                alt="Job card"
                width={800}
                className="rounded-lg w-full"
              />{" "}
            </div>

            <div className="space-y-6 bg-[#121312] p-6 pb-10 rounded">
              <section className="border-b border-[#252625] pb-6">
                <h2 className="text-xl font-semibold mb-4 text-[#696969]">
                  Welcome
                </h2>
                <div className="text-gray-300 leading-7">
                  <p>
                    Embark on your journey to becoming a blockchain expert with
                    Blockchain Development: Zero to Hero. This comprehensive
                    course is designed to take you from a complete beginner to a
                    skilled blockchain developer, equipped to build innovative
                    decentralized applications (dApps) and smart contracts.
                  </p>
                  <p>
                    Whether you're a tech enthusiast, developer, or
                    entrepreneur, this course covers everything you need to
                    master blockchain development. From understanding
                    foundational concepts to hands-on coding in Solidity and
                    interacting with leading platforms like Ethereum and
                    Hyperledger, you'll gain practical skills and real-world
                    knowledge. By the end of the course, you'll have the
                    confidence to design and deploy secure blockchain solutions,
                    contribute to the decentralized economy, and transform
                    industries with your expertise.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 mt-3 text-[#696969]">
                  By the end of this course, you will
                </h2>
                <ul className="space-y-2 text-gray-300">
                  {courseObjectives.map((objective, index) => (
                    <div className="flex gap-3">
                      <span>• </span>
                      <li key={index}>{objective.text}</li>
                    </div>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#121312] flex flex-col items-start justify-start rounded-lg p-6">
              <div className="mb-4 flex flex-col  gap-2">
                <span className="font-extrabold text-xl py-1 flex items-start justify-start text-white rounded-full ">
                  Free!
                </span>
                <span className="text-[#696969] text-sm">Unique Training</span>
              </div>

              <div className="space-y-4 mb-6 border-b border-[#252625] pb-6 w-full">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-[#696969]"
                  >
                    <Image src={feature.icon} alt="" width={24} height={24} />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <span className="text-[#696969] ">
                <hr className="text-[#696969]" />
              </span>
              <div className="space-y-3 w-full font-sans font-medium">
                <button className="flex justify-center w-full items-center gap-x-2 border-[#252625] border py-[11px] rounded-lg">
                  ADD TO WISHLIST
                </button>

                <button className="bg-[#D0EFB1] w-full py-[15px] text-[#0E0F0E] text-base leading-5 rounded-lg capitalize ub">
                  ENROLL NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContentComponent
