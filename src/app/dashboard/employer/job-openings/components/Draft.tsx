import { NextPage } from 'next';
import Link from 'next/link';
import { ArrowUpRightIcon, MapPin } from 'lucide-react';


const Draft: NextPage = () => {
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
            <div key={job.id} className="bg-[#161716] rounded-lg p-5">
              <p className="text-gray-500 text-sm mb-2">Posted {job.postedTime}</p>
              
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl sm:text-[24px] text-white font-semibold">{job.title}</h3>
                  <p className="text-[#BBBBBB] text-[16px]">{job.company}</p>
                </div>
                <div className="flex space-x-2 text-[#A8C789] mt-3 sm:mt-0">
                  <button className="px-4 sm:px-6 py-2 bg-transparent border border-gray-600 rounded text-xs hover:bg-gray-700 transition">
                    EDIT
                  </button>
                  <button className="px-4 sm:px-6 py-2 border border-[#A8C789] rounded text-xs hover:bg-gray-700 transition">
                    POST
                  </button>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center text-gray-300 text-sm mb-3">
                <div className="flex items-center text-[#BBBBBB] mr-4 mb-2 sm:mb-0">
                  <MapPin className="w-4 h-4 mr-1"/>
                  {job.location}
                </div>
                <div className="text-[#BBBBBB] border border-[#BBBBBB] rounded-sm px-4 py-2 mb-2 sm:mb-0">
                  {job.applicants} applicants
                </div>
              </div>
              
              <Link href={`/job-listings/${job.id}`} className="text-gray-400 hover:text-white text-sm inline-flex items-center">
                <ArrowUpRightIcon className="w-4 h-4 mr-1"/> View Job Listing
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-right mt-4">
          <button className="text-gray-400 hover:text-white text-sm">
            View More
          </button>
        </div>
        
    </div>
  );
};

export default Draft;