import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Suspense } from "react";

const list = [
  `Learn the fundamentals of blockchain technology and its applications.`,
  `Master smart contract development using Solidity`,
  `Gain experience working with Ethereum and other popular blockchain platforms.`,
  `Build, test, and deploy your own decentralized applications (dApps).`,
  `Understand blockchain security best practices and scalability solutions.`,
];

const courseDetails = [
  "24 Videos",
  "10 Assignments",
  "5 Articles",
  "34,579 Enrollments",
  "Unlimited Access",
  "Certificate of Completion",
];

export const Overview = () => {
  return (
    <div className="">
      <h3 className="text-white text-3xl">
        Blockchain Development Bootcamp: Zero to Hero
      </h3>
      <p className="text-white font-light mt-2">By Satoshi Nakamoto</p>
      <div className="grid grid-cols-12 gap-6 xl:gap-[79px] mt-10">
        <div className="col-span-12 lg:col-span-7">
          <Suspense fallback={<p>Loading video...</p>}>
            <div className="!h-[302px] w-full border border-[#252625] rounded-lg overflow-hidden bg-[#1011107A]/45">
              <iframe
                src="https://www.youtube.com/embed/19g66ezsKAg"
                allowFullScreen
                width={"100%"}
                height={"100%"}
                className=""
              />
            </div>
          </Suspense>
          <div className="mt-12 py-6 px-5 bg-[#161716] border border-[#1D1D1C] rounded-xl">
            <h4 className="text-grayText text-lg">Welcome</h4>
            <p className="mt-4 text-[#d9d9d9] font-normal">
              Embark on your journey to becoming a blockchain expert with
              Blockchain Development: Zero to Hero. This comprehensive course is
              designed to take you from a complete beginner to a skilled
              blockchain developer, equipped to build innovative decentralized
              applications (dApps) and smart contracts. Whether you&apos;re a
              tech enthusiast, developer, or entrepreneur, this course covers
              everything you need to master blockchain development. From
              understanding foundational concepts to hands-on coding in Solidity
              and interacting with leading platforms like Ethereum and
              Hyperledger, you&apos;ll gain practical skills and real-world
              knowledge. By the end of the course, you&apos;ll have the
              confidence to design and deploy secure blockchain solutions,
              contribute to the decentralized economy, and transform industries
              with your expertise.
            </p>
            <hr className="my-8 !border-[#1D1D1C]" />
            <h4 className="text-[#767776] text-lg">
              By the end of this course, you will
            </h4>
            <ul className="list-disc pl-5 mt-4">
              {list.map((item, index) => (
                <li key={index} className="text-[#d9d9d9] font-normal">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 md:w-[400px] h-min bg-[#161716] rounded-md border border-[#1D1D1C] p-5">
          <h4 className="font-bold text-white text-xl">Free!</h4>
          <div className="mt-6">
            <h5 className="text-[#767776] text-lg">Unique Training</h5>
            <ul className="mt-4 space-y-3.5">
              {courseDetails.map((item, index) => (
                <li
                  key={index}
                  className="text-[#d9d9d9] font-normal flex items-center gap-1 text-sm"
                >
                  <Globe size={12} /> {item}
                </li>
              ))}
            </ul>
            <hr className="my-6 !border-[#1D1D1C]" />
            <div className="space-y-2">
              <Button
                variant={"ghost"}
                className="uppercase w-full h-12 border border-[#313130]"
              >
                Add to wishlist
              </Button>
              <Button className="uppercase w-full h-12 text-[#0E0F0E]">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;