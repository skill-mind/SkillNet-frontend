import { Search } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCard from "./CourseCard";

const MyCourses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative">
        <div className="absolute top-[14px] left-3 h-fit mb-10">
          <Search size={20} color="#ABABAB" />
        </div>
        <input
          type="text"
          className="py-3 pl-10 pr-6 rounded-[8px] text-sm leading-6 italic w-[587px] bg-[#1A1B1A] border border-[#1F1F1F] placeholder:text-[#696969]"
          placeholder="Search For courses..."
        />
      </div>

      <div className="h-[600px] pr-[39px] sm:h-[450px] sm:pr-[76px] mt-10">
        <Slider {...settings}>
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </Slider>
      </div>
    </>
  );
};

export default MyCourses;
