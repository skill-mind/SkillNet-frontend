import image1 from '../../../../public/img/course1.png'
import image2 from '../../../../public/img/course2.png'
import { Addcourse } from '../component/Addcourse';
import CourseCard from '../component/CourseCard';
function Courses() {
  const courses = [
    {
      id: 1,
      banner: image1,
      title: "Become a web3 Developer:A beginners approach",
      enrollment: 20,
      rating: 4.5,
      published: true,
      videosAvailable: true

    },
    {
      id: 2,
      banner: image2,
      title: "Become a web3 Developer:A beginners approach",
      enrollment: 15,
      rating: 0,
      published: false,
      videosAvailable: true
    },
  ]
  return (
    <div className=" px-8 h-auto pb-40 ">
      <section className='flex flex-col gap-[15px]'>
        {
          courses.map((course) => {
            return <CourseCard course={course} key={course.id} />
          })
        }
      </section>
      <div className='w-full flex justify-end'>
        <button className=" my-4">View More</button>
      </div>
      <div className='w-full flex justify-start'>
        <button className=" my-4 capitalize">create a new course</button>
      </div>
      <Addcourse />

    </div>
  );
}

export default Courses;
