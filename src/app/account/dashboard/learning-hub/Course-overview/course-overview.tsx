"use client";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import Overview from "./components/overview";
import { COURSE_OVERVIEW } from "@/app/utils/constants";
import TutorFacilitator from "./components/tutor-facilitator";
import Content from "./components/content";
import { useEffect } from "react";
import Link from "next/link";

const buttons = [
  {
    title: "Overview",
    link: "?active=overview",
    value: "overview",
  },
  {
    title: "Content",
    link: "?active=content",
    value: "content",
  },
  {
    title: "Tutors/Facilitators",
    link: "?active=tutors",
    value: "tutors",
  },
];

export const CourseOverviewPage = () => {
  const searchParams = useSearchParams();
  const params = searchParams?.get("active");
  // const [active, setActive] = useState<string | undefined>();

  const query = COURSE_OVERVIEW[params as keyof typeof COURSE_OVERVIEW];

  useEffect(() => {
    if (params === null) {
      window.location.href = "?active=overview";
    }
  }, [params]);

  return (
    <div className="xl:px-24 md:pr-8 px-3 py-3 sm:px-6 mt-8">
      <div className="flex items-center gap-2">
        {buttons.map((value, index) => (
          <Button
            key={index}
            className={`text-base shrink-0 ${
              params === undefined && index === 0
                ? "text-primary bg-[#161716] hover:bg-[#161716]"
                : params === value.value
                ? "text-primary bg-[#161716] hover:bg-[#161716]"
                : "text-grayText bg-transparent hover:bg-transparent border border-[#1d1d1d]"
            } `}
          >
            <Link shallow href={value.link}>
              {value?.title}
            </Link>
          </Button>
        ))}
      </div>

      <div className="mt-[50px]">{components[query]}</div>
    </div>
  );
};

export default CourseOverviewPage;

const components: Record<string, React.ReactNode> = {
  OVERVIEW: <Overview />,
  CONTENT: <Content />,
  TUTORS: <TutorFacilitator />,
};
