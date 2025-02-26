import { ExamProps } from '@/interfaces/exam.interface';
import { Button } from '../../../components/ui/button';

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className='flex gap-2 text-sm'>
    <span className='text-[#6E6E6E]'>{label}:</span>
    <span className='opacity-90'>{value}</span>
  </div>
);

export const ExamCard = ({ exam }: { exam: ExamProps }) => {
  return (
    <div className='bg-[#161716] rounded-lg p-6 text-white'>
      <h2 className='text-xl font-bold mb-4'>{exam.title}</h2>
      <p className='mb-8 text-sm leading-relaxed'>{exam.description}</p>

      <div className='h-[1px] bg-[#313130] mb-8' />

      <div className='flex flex-col gap-4 mb-8'>
        <InfoRow label='DATE' value={exam.date} />
        <InfoRow label='DURATION' value={exam.duration} />
        <InfoRow label='REGISTERED CANDIDATES' value={exam.registered} />
        <InfoRow label='CERTIFICATION' value={exam.certification} />
        <InfoRow label='FORMAT' value={exam.format} />
      </div>

      <div className='h-[1px] bg-[#313130] mb-8' />

      <div className='mb-8'>
        <h3 className='text-[#ABABAB] text-sm mb-3'>TOPICS COVERED:</h3>
        <ul className='list-disc pl-5 text-sm space-y-2'>
          {exam.topics.map((topic, idx) => (
            <li key={idx} className='text-[#FCFCFC]'>
              {topic}
            </li>
          ))}
        </ul>
      </div>

      <div className='mb-8'>
        <h3 className='text-[#ABABAB] text-sm mb-3'>WHY TAKE THIS EXAM?</h3>
        <ul className='list-disc pl-5 text-sm space-y-2'>
          {exam.advantages.map((advantage, idx) => (
            <li key={idx} className='text-[#FCFCFC]'>
              {advantage}
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant='outline'
        className='w-full bg-transparent py-3 border border-[#D0EFB1] rounded-lg hover:bg-[#D0EFB1] hover:text-[#000000] transition-colors uppercase'
      >
        Register
      </Button>
    </div>
  );
};
