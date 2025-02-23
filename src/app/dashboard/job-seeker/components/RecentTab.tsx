import React from "react";
import RecentTabBox from "./RecentTabBox";
import { Job } from "./RecentTabBox";

interface RecentTabProps {
  onSaveJob: (job: Job) => void;
}

const RecentTab: React.FC<RecentTabProps> = ({ onSaveJob }) => {
  return (
    <div className="flex justify-between">
      <RecentTabBox onSaveJob={onSaveJob} />
    </div>
  );
};

export default RecentTab;
