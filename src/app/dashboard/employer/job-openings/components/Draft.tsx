import { NextPage } from 'next';
import Link from 'next/link';


const Draft: NextPage = () => {

  
  // Sample job data
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
    <div className="mb-10 text-white">
      
        
        {/* Job listings */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-[#161716] rounded-lg p-5">
              <p className="text-gray-500 text-sm mb-2">Posted {job.postedTime}</p>
              
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-gray-400">{job.company}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-6 py-2 bg-transparent border border-gray-600 rounded text-xs hover:bg-gray-700 transition">
                    EDIT
                  </button>
                  <button className="px-6 py-2  border border-[#A8C789] rounded text-xs hover:bg-gray-700 transition">
                    POST
                  </button>
                </div>
              </div>
              
              <div className="flex items-center text-gray-300 text-sm mb-3">
                <div className="flex items-center mr-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </div>
                <div>{job.applicants} applicants</div>
              </div>
              
              <Link href={`/job-listings/${job.id}`} className="text-gray-400 hover:text-white text-sm inline-flex items-center">
                → View Job Listing
              </Link>
            </div>
          ))}
        </div>
        
        {/* View more link */}
        <div className="text-right mt-4">
          <button className="text-gray-400 hover:text-white text-sm">
            View More
          </button>
        </div>
        
    </div>
  );
};

export default Draft;