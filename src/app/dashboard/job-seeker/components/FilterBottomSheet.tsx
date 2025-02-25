import React from "react";
import AllFilters from "./SideAllFilters";

interface FilterBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterBottomSheet: React.FC<FilterBottomSheetProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end p-3 lg:p-0 lg:hidden">
      <div className="bg-[#1D1D1C] text-white p-4 rounded-2xl w-full max-h-[80%] overflow-y-auto transition-all duration-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">All Filters</h2>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>
        <AllFilters />
      </div>
    </div>
  );
};

export default FilterBottomSheet;