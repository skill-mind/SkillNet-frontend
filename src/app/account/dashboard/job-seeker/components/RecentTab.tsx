import React from "react";
import RecentTabBox from "./RecentTabBox";
import AllFilters from "./SideAllFilters";

const RecentTab = () => {
  return (
    <div className="mt-4 flex justify-between">
      <RecentTabBox />
      <AllFilters />
    </div>
  );
};

export default RecentTab;
