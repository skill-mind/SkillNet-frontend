// utils/applicantData.ts

export interface Certification {
    title: string;
    provider: string;
    id: string;
    date: string;
  }
  
  export interface Submission {
    description: string;
  }
  
  export interface Applicant {
    id: number;
    postedTime: string;
    name: string;
    position: string;
    location: string;
    level: string;
    appliedTime: string;
    submission: Submission;
    certifications: Certification[];
    skills: string[];
  }
  
  export interface JobDetails {
    title: string;
    applicants: number;
    postedTime: string;
    type: string;
    level: string;
    deadline: string;
    skills: string[];
    description: string;
    keyResponsibilities: string;
  }
  
  export const applicantData: Applicant[] = [
    {
      id: 1,
      postedTime: "12 hours ago",
      name: "Benedict Ooochoche",
      position: "Front-End Developer",
      location: "Lagos, Nigeria",
      level: "Senior Dev",
      appliedTime: "5 hours ago",
      submission: {
        description: "We are seeking a highly skilled and detail-oriented Quality Assurance Manager to lead and manage our QA team. In this role, you will be responsible for ensuring that our products and services meet the highest standards of quality and usability. You will design and implement quality assurance strategies, oversee testing processes, and collaborate with cross-functional teams to drive continuous improvement. As the Quality Assurance Manager, you will play a critical role in enhancing our company's reputation for excellence. This position requires strong leadership, analytical, and problem-solving skills, as well as a deep understanding of QA methodologies and best practices.",
      },
      certifications: [
        {
          title: "Blockchain Developer",
          provider: "SkillNet Academy",
          id: "certificate/12345/12171128",
          date: "26-09-2022"
        },
        {
          title: "Blockchain Developer",
          provider: "SkillNet Academy",
          id: "certificate/12345/12171128",
          date: "26-09-2022"
        }
      ],
      skills: ["Microsoft Excel", "Notion", "Team Work"]
    },
    {
      id: 2,
      postedTime: "12 hours ago",
      name: "Benedict Ooochoche",
      position: "Front-End Developer",
      location: "Lagos, Nigeria",
      level: "Senior Dev",
      appliedTime: "5 hours ago",
      submission: {
        description: "We are seeking a highly skilled and detail-oriented Quality Assurance Manager to lead and manage our QA team. In this role, you will be responsible for ensuring that our products and services meet the highest standards of quality and usability.",
      },
      certifications: [
        {
          title: "Blockchain Developer",
          provider: "SkillNet Academy",
          id: "certificate/12345/12171128",
          date: "26-09-2022"
        }
      ],
      skills: ["Microsoft Excel", "Notion", "Team Work"]
    },
    {
      id: 3,
      postedTime: "12 hours ago",
      name: "Benedict Ooochoche",
      position: "Front-End Developer",
      location: "Lagos, Nigeria",
      level: "Senior Dev",
      appliedTime: "5 hours ago",
      submission: {
        description: "We are seeking a highly skilled and detail-oriented Quality Assurance Manager to lead and manage our QA team.",
      },
      certifications: [
        {
          title: "Blockchain Developer",
          provider: "SkillNet Academy",
          id: "certificate/12345/12171128",
          date: "26-09-2022"
        }
      ],
      skills: ["Microsoft Excel", "Notion", "Team Work"]
    },
    {
      id: 4,
      postedTime: "12 hours ago",
      name: "Benedict Ooochoche",
      position: "Front-End Developer",
      location: "Lagos, Nigeria",
      level: "Senior Dev",
      appliedTime: "5 hours ago",
      submission: {
        description: "We are seeking a highly skilled and detail-oriented Quality Assurance Manager to lead and manage our QA team.",
      },
      certifications: [
        {
          title: "Blockchain Developer",
          provider: "SkillNet Academy",
          id: "certificate/12345/12171128",
          date: "26-09-2022"
        }
      ],
      skills: ["Microsoft Excel", "Notion", "Team Work"]
    }
  ];
  
  export const jobDetails: JobDetails = {
    title: "Job Title",
    applicants: 124,
    postedTime: "12 hours ago",
    type: "Hybrid",
    level: "Senior",
    deadline: "2 weeks",
    skills: ["React", "TypeScript", "Node.js"],
    description: "SkillNet is an innovative, blockchain-powered platform that seamlessly connects job seekers with employers while empowering tutors and institutions to create, sell, and deliver high-quality courses and exams. It combines the best of both worlds—an online job marketplace and a learning hub—giving users a competitive edge in today's dynamic digital landscape.",
    keyResponsibilities: "SkillNet is an innovative, blockchain-powered platform that seamlessly connects job seekers with employers while empowering tutors and institutions to create, sell, and deliver high-quality courses and exams. It combines the best of both worlds—an online job marketplace and a learning hub—giving users a competitive edge in today's dynamic digital landscape."
  };