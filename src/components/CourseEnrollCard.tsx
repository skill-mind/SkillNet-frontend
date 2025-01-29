import GlobeIcon from "@/public/img/globe.svg";
import Image from "next/image";

export default function CourseEnrollCard() {
  return (
    <div className="bg-[#222220] py-10 px-5 rounded-md w-[400px] h-[465px] space-y-3">
      <p className="text-xl font-bold">Free!</p>
      <p className="text-[#767776] font-medium text-lg">Unique Tranining</p>
      <div className="space-y-2 *:flex *:items-center *:space-x-1 *:font-light">
        <p>
          <span>
            <Image src={GlobeIcon} alt="globe" width={15} height={15} />
          </span>
          <span>24 Videos</span>
        </p>
        <p>
          <span>
            <Image src={GlobeIcon} alt="globe" width={15} height={15} />
          </span>
          <span>10 Assessments</span>
        </p>
        <p>
          <span>
            <Image src={GlobeIcon} alt="globe" width={15} height={15} />
          </span>
          <span>5 Articles</span>
        </p>
        <p>
          <span>
            <Image src={GlobeIcon} alt="globe" width={15} height={15} />
          </span>
          <span>34,529 Enrollments</span>
        </p>
        <p>
          <span>
            <Image src={GlobeIcon} alt="globe" width={15} height={15} />
          </span>
          <span>Unlimited Access</span>
        </p>
        <p>
          <span>
            <Image src={GlobeIcon} alt="globe" width={15} height={15} />
          </span>
          <span>Certificate Of Completion</span>
        </p>
      </div>
      <div className="bg-[#282827] h-[0.2rem]"></div>
      <div className="space-y-4">
        <button className="w-full uppercase border border-[#313130] rounded-md px-5 py-3 font-medium transition-all duration-300 hover:scale-110">
          Add To Wishlist
        </button>
        <button className="w-full bg-primary uppercase text-black rounded-md px-5 py-3 font-medium transition-all duration-300 hover:scale-110">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
