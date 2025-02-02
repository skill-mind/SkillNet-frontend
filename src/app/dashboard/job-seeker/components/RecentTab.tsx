import React from "react";
import RecentTabBox from "./RecentTabBox";
import AllFilters from "./SideAllFilters";
import { Job } from "./RecentTabBox";

interface RecentTabProps {
  onSaveJob: (job: Job) => void;
}

const RecentTab: React.FC<RecentTabProps> = ({ onSaveJob }) => {
  return (
    <div className="mt-4 flex justify-between">
      <RecentTabBox onSaveJob={onSaveJob} />
      <AllFilters />
    </div>
  );
};

export default RecentTab;
