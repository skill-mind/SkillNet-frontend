import { Addcourse } from "../component/Addcourse";
import CourseCard from "../component/CourseCard";

type courseProps = {
  id: number;
  banner: string;
  title: string;
  enrollment: number;
  rating: number;
  published: boolean;
  videosAvailable: boolean;
};

function Courses() {
  const courses: courseProps[] = [
    {
      id: 1,
      banner: ``,
      title: "Become a web3 Developer:A beginners approach",
      enrollment: 20,
      rating: 4.5,
      published: true,
      videosAvailable: true,
    },
    {
      id: 2,
      banner: ``,
      title: "Become a web3 Developer:A beginners approach",
      enrollment: 15,
      rating: 0,
      published: false,
      videosAvailable: true,
    },
  ];
  return (
    <div className=" px-8 h-auto pb-40 ">
      <section className="flex flex-col gap-[15px]">
        {courses.map((course) => {
          return <CourseCard courses={course} key={course.id} />;
        })}
      </section>
      <div className="w-full flex justify-end">
        <button className=" my-4">View More</button>
      </div>
      <div className="w-full flex justify-start">
        <button className=" my-4 capitalize">create a new course</button>
      </div>
      <Addcourse />
    </div>
  );
}

export default Courses;
