import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseCard from "./CourseCard";

const Explore = () => {
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
      <main className="container bg-red-500 mx-auto">
        <div className="flex flex-col gap-12 ">
          {/* Hero Section */}
          <div className="w-[718px]">
            <h2 className="text-3xl font-bold mb-4">
              Explore a world of knowledge at your fingertips
            </h2>
            <p className="text-[#FCFCFC] text-base font-light mb-8">
              From tech to creativity, access a diverse range of courses
              designed for every learner.
            </p>
            <button
              onClick={() => {}}
              className="rounded-md border py-4 px-8 text-base font-medium text-black bg-[#D0EFB1]"
            >
              BROWSE COURSES
            </button>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-8">Recommended for you</h3>
          </div>
        </div>
      </main>
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

export default Explore;
