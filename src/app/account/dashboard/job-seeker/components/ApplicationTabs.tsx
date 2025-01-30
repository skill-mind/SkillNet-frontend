import React from "react";
import AllFilters from "./SideAllFilters";
import ApplicationTabBox from "./ApplicationTabBox";

const ApplicationTab = () => {
  return (
    <div className="mt-4 flex justify-between">
    <ApplicationTabBox />
    <AllFilters />
  </div>
  );
};

export default ApplicationTab;





