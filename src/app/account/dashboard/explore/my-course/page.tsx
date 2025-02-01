import { Button } from "@headlessui/react";
import Link from "next/link";
import CourseCard from "../components/course";
import { Search } from "lucide-react";

function MyCourse() {
  return (
    <>
      <section className="grid gap-5">
        <div className="capitalize grid gap-4 grid-cols-3 max-w-sm">
          <Button className="text-sm py-[6px] px-5 hover:text-[#A8C789] border-[#3B3B3A] border bg-transparent text-white hover:bg-transparent rounded capitalize">
            <Link href="/account/dashboard/explore"> explore</Link>
          </Button>
          <Button className="text-sm py-[6px] px-5 text-[#A8C789] border-[#3B3B3A] border bg-transparent hover:text-white hover:bg-transparent rounded capitalize">
            <Link href="/account/dashboard/explore/my-course"> my courses</Link>
          </Button>
          <Button className="text-sm py-[6px] px-5 hover:text-[#A8C789] border-[#3B3B3A] border bg-transparent text-white hover:bg-transparent rounded capitalize">
            <Link href="/account/dashboard/explore/wish-list"> wish list</Link>
          </Button>
        </div>
      </section>
      <div className="py-[50px]">
        <div className="relative pb-10">
          <div className="absolute top-[14px] left-3 h-fit mb-10">
            <Search size={20} color="#ABABAB" />
          </div>
          <input
            type="text"
            className="py-3 pl-10 pr-6 rounded-[8px] text-sm leading-6 italic w-[587px] bg-[#1A1B1A] border border-[#1F1F1F] placeholder:text-[#696969]"
            placeholder="Search For courses..."
          />
        </div>
        <div className="flex gap-5 overflow-x-auto max-w-full flex-wrap">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </>
  );
}
export default MyCourse;
