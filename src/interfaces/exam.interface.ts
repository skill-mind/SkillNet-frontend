export interface ExamProps {
  title: string;
  description: string;
  date: string;
  duration: string;
  registered: number;
  certification: string;
  format: string;
  topics: string[];
  advantages: string[];
}

export interface ExamNavLinkProps {
  href: string;
  label: string;
}
