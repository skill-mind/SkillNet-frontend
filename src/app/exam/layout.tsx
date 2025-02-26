'use client';
import ExamFeedNavbar from '@/app/exam/components/ExamFeedNavbar';
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';

export default function ExamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isMainExamPage = pathname === '/exam';

  return (
    <div>
      {!isMainExamPage && <ExamFeedNavbar />}
      {<div className=''>{children}</div>}
      {!isMainExamPage && <Footer />}
    </div>
  );
}
