import profilePic from "@/public/img/dashboardProfile.svg";
import profileCopy from "@/public/img/copy.png";
import TutorCourse from "@/public/img/tutorcourse.png";
import TutorReview from "@/public/img/tutorreview.png";

import Image from "next/image";
const Profile = () => {
  return (  <div className="font-Ubuntu  mb-32 Sans ml-12 w-[900px]  scrollbar-hidden">
<div className="flex  gap-3 flex-col">
<div className="relative w-[111px] h-[111px] rounded-full overflow-hidden">
            <Image
              src={profilePic}
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
         <div className="flex justify-between items-center ">
         <div className="flex items-center gap-16">
            <h2 className="font-[600] text-gray-100">Miss Flora Osatuyi</h2>
            <p className="text-sm font-Ubuntu Sans font-[400]  text-gray-300">Product Designer</p>
          </div>
          <div className="flex items-center rounded-[48px] border px-[24px] py-[12px] justify-between  w-[188px] h-[48px]">
            <p className="text-sm text-gray-300">0x411ad3c6... </p>
            <div className="relative w-[24px] h-[24px]  overflow-hidden">
            <Image
              src={profileCopy}
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          </div>
         </div>

          
</div>

<div className="bg-[#1E1E1E] w-[900px] h-[105px] p-[24px] rounded-[16px] mt-8">
  <p className="font-[400] text-gray-300 leading-[19.2px] text-sm ">Flora is a talented product designer with 3+ years of experience creating functional, visually polished (FPV) designs. She also tutors aspiring designers, simplifying UI and product design concepts through hands-on learning. Passionate about blending creativity and usability, Flora helps her students and projects thrive in today’s fast-paced digital world.</p>
</div>

  <h3 className="font-[400] mt-16 text-gray-300 text-sm" >Courses Offered</h3>


  <div className="bg-[#1E1E1E] w-[900px] h-[218px] p-[24px] rounded-[16px] mt-8">
    <div className="flex justify-between items-center ">
   <div className="flex gap-16">
   <div className="relative w-[300px] h-[170px]  overflow-hidden">
        <Image
          src={TutorCourse}
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>
     <div className="flex flex-col gap-8">
     <div className="flex justify-between w-[500px]">
      <div className="flex gap-2 flex-col">
        <h2 className="font-[600] text-sm text-gray-100">Design made simple</h2>
        <p className="text-xs font-Ubuntu Sans font-[400]  text-sky-300">Video/Note guides available</p>
      </div>
      <h3 className="text-xs text-gray-100 bg-[#2D2E2D] px-[14px] h-[32px] py-[4px] w-[82px] text-center flex items-center rounded-[48px] ">Published</h3>
      </div>
      <div className="font-[500] flex justify-between w-[500px]">
        <p className="text-xs flex gap-2  text-gray-500">Enrollment: 
       <span className="text-gray-100">20 Learners</span> </p>
       <p className="text-xs flex gap-2 text-gray-500">Rating:  
       <span className="text-gray-100">4.5/5</span> </p>
     
      </div>
     </div>
   </div>
    </div>
 
</div>

<div>
<h3 className="font-[400] mt-16 text-gray-300 text-sm" >Reviews</h3>

<div className="flex justify-between items-center">
<div className=" flex gap-5 mt-8">
<div className="relative w-[41px] h-[41px]  overflow-hidden">
        <Image
          src={TutorReview}
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>
     <div className="flex flex-col gap-1 text-sm">
     <h3 className="text-gray-500">Benedict</h3>
     <div className="flex justify-between items-center w-[830px]">
     <p className="text-xs text-gray-100">The course is a must take for anyone looking to start their tech journey in design. A solid 5/5 rating for me</p>
      <p className="text-xs items-center flex gap-2  text-gray-500">Rating: 
      <span className="text-gray-100 text-lg">5/5</span> </p>
     </div>
</div></div>

    
</div>
</div>





  </div>
  )
};
export default Profile;
