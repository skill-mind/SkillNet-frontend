import React from "react";
import RecentTabBox from "./RecentTabBox";
import AllFilters from "./SideAllFilters";
import { Job } from "./RecentTabBox";

interface RecentTabProps {
  onSaveJob: (job: Job) => void;
  onJobClick: (jobId: string) => void;
}

const RecentTab: React.FC<RecentTabProps> = ({ onSaveJob, onJobClick  }) => {
  return (
    <div className="mt-4 flex justify-between">
      <RecentTabBox onSaveJob={onSaveJob} onJobClick={onJobClick} />
      <AllFilters />
    </div>
  );
};

export default RecentTab;
