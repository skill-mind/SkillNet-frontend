import { ArrowUpRightIcon, MapPin } from 'lucide-react';
import { NextPage } from 'next';
import Link from 'next/link';

const Post: NextPage = () => {
  

  const jobs = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Skillset Incorporated',
      location: 'Lagos, Nigeria',
      applicants: 25,
      postedTime: '12 hours ago'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Skillset Incorporated',
      location: 'Lagos, Nigeria',
      applicants: 25,
      postedTime: '12 hours ago'
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'Skillset Incorporated',
      location: 'Lagos, Nigeria',
      applicants: 25,
      postedTime: '12 hours ago'
    }
  ];

  return (
    <div className="mb-10 text-white lg:mr-10">
        
        {/* Job listings */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-[#161716] hover:border-[#A8C789] rounded-lg p-4 md:p-5">
              <p className="text-gray-500 text-xs md:text-sm mb-2">Posted {job.postedTime}</p>
              
              <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-2">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-[24px] text-white font-semibold">{job.title}</h3>
                  <p className="text-[#BBBBBB] text-sm md:text-[16px]">{job.company}</p>
                </div>
                <div className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-4 sm:px-6 py-2 border border-[#A8C789] rounded text-xs hover:bg-gray-700 transition">
                    VIEW APPLICATIONS
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-gray-300 text-xs md:text-sm mb-3">
                <div className="flex items-center text-[#BBBBBB] mr-4">
                  <MapPin className='w-3 h-3 md:w-4 md:h-4 mr-1'/>
                  {job.location}
                </div>
                <div className='text-[#BBBBBB] border border-[#BBBBBB] rounded-sm px-3 md:px-4 py-1 md:py-2'>{job.applicants} applicants</div>
              </div>
              
              <Link href={`/job-listings/${job.id}`} className="text-[#BBBBBB] hover:text-white text-xs md:text-[13px] inline-flex items-center gap-1">
                <ArrowUpRightIcon className="w-3 h-3 md:w-4 md:h-4" />View Job Listing
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-right mt-4">
          <button className="text-gray-400 hover:text-white text-xs md:text-sm">
            View More
          </button>
        </div>
        
    </div>
  );
};

export default Post;