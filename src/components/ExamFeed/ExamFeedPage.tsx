'use client';

import Image from 'next/image';
import examImage from '@/public/img/exam-paper.png';
import { examCategories, examMockData } from './mockData';
import { ExamCard } from './ExamCard';
import { Button } from '../ui/button';
import { ArrowLeft, X } from 'lucide-react';

const ExamFeedPage = () => {
  return (
    <main className='min-h-screen bg-[#101110] pt-24 px-4 sm:px-6 lg:px-[100px]'>
      {/* Hero Section */}
      <div className='w-full h-[220px] relative rounded-lg overflow-hidden'>
        <Image
          src={examImage}
          alt='Examinations background'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/50' />
        <div className='relative h-full flex items-end px-2 sm:px-4 lg:px-16 pb-8'>
          <h1 className='text-3xl sm:text-4xl font-semibold text-white'>
            Ongoing examinations
          </h1>
        </div>
      </div>

      <div className='my-14 flex justify-between items-center text-white'>
        <Button
          variant='ghost'
          size='sm'
          className='gap-2 hover:bg-transparent hover:text-white hover:brightness-125'
        >
          <ArrowLeft className='w-4 h-4' />
          Back
        </Button>

        <div className='flex space-x-3 items-center cursor-pointer'>
          <div className='font-extralight text-sm'>ChatBox</div>
          <X className='w-4 h-4 font-semibold' />
        </div>
      </div>

      {/* Categories Section */}
      <div className='flex space-x-4 overflow-x-auto pb-4 scrollbar-hide'>
        {examCategories.map((category) => (
          <button
            key={category}
            className='flex-shrink-0 flex flex-col items-start justify-center border border-[#222220] px-6 py-2 bg-[#101110] text-[#FCFCFC] rounded-lg whitespace-nowrap hover:bg-[#313130] transition-colors'
          >
            {category}
            <span className='text-xs text-[#898783]'>6 ongoing exams</span>
          </button>
        ))}
      </div>

      {/* Exams Section */}
      <div className=' py-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
        {examMockData.map((exam, index) => (
          <ExamCard key={index} exam={exam} />
        ))}
      </div>
    </main>
  );
};

export default ExamFeedPage;
