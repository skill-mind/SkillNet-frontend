import { Edit2Icon } from "lucide-react";
import Image from "next/image";
function CourseCard({ course }: any) {
    return (
        <div className=" h-[218px] bg-[#161716] p-[24px] rounded-[8px] flex gap-[15px] ">
            <section className="w-[300px] h-[170px]">
                <Image src={course.banner} alt="course-banner" className="w-full h-full" />
            </section>
            <section className="flex-grow flex flex-col gap-[15px]">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-3">
                        <h3 className="font-[600] text-[#FCFCFC] text-[18px]">{course.title}</h3>
                        <h4 className="font-[500] text-[#8DCAD7CC] text-[14px]">{course.videosAvailable ? "Video/Note guide available" : ""}</h4>
                    </div>
                    <div className="w-[82px] h-[32px] rounded-[48px] px-[14px] py-[4px] bg-[#2D2E2D] text-[12px] font-[500] flex justify-center items-center">{course.published ? "published" : "draft"}</div>
                </div>
                <div className="flex justify-between ">
                    <div className="text-[#6E6E6E] font-[500] text-[14px]">Enrolment: <span className="text-white"> {course.enrollment} Learners</span></div>
                    <div className="text-[#6E6E6E] font-[500] text-[14px]">Rating: <span className="text-white">{course.rating <= 0 ? "N/A" : `${course.rating}/5`}</span></div>
                </div>
                <button className="w-[110px] h-[30px] border-[#2F302F] border-[1px] border-solid rounded-[8px] font-[400] text-[12px] flex justify-center items-center gap-2"> <Edit2Icon className="w-[14px] h-[14px]" />Edit Course</button>

            </section>
        </div>
    );
}

export default CourseCard;
