import React from 'react'
import { Button } from '@/components/ui/button'
import CourseCard from './components/course';
import Link from 'next/link';


const page = () => {
  return (
    <section className="grid gap-5 overflow-x-auto">
      <div className="capitalize grid gap-4 grid-cols-3 max-w-sm">
        <Button className="py-1 px-5 text-[#A8C789] border-[#3B3B3A] border bg-transparent hover:text-white hover:bg-transparent rounded capitalize">
          <Link href="/account/dashboard/explore"> explore</Link>
        </Button>
        <Button className="py-1 px-5 hover:text-[#A8C789] border-[#3B3B3A] border bg-transparent text-white hover:bg-transparent rounded capitalize">
          <Link href="/account/dashboard/explore/my-course"> my course</Link>
        </Button>
        <Button className="py-1 px-5 hover:text-[#A8C789] border-[#3B3B3A] border bg-transparent text-white hover:bg-transparent rounded capitalize">
          <Link href="/account/dashboard/explore/wish-list"> wish list</Link>
        </Button>
      </div>
      <div className="">
        <h2 className="font-bold text-3xl text-white">
          Explore a world of knowledge at your fingertips
        </h2>
        <h4 className="text-[#FCFCFC] font-light text-base py-1">
          From tech to creativity, access a diverse range of courses designed
          for every learner.
        </h4>
      </div>
      <Button className="uppercase w-fit font-medium text-base bg-[#D0EFB1] rounded-md text-[#0E0F0E] px-8 py-6">
        browse course
      </Button>
      <main className="relative">
        <h1 className="text-[#D9D9D9] font-semibold text-3xl mb-4">
          Recommended for you
        </h1>

        <div className="flex gap-5 overflow-x-auto max-w-full flex-wrap">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </main>
    </section>
  );
}

export default page