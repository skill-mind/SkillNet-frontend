import { Check } from "lucide-react";

export const CustomCheckbox = ({ checked }: { checked: boolean }) => {
  return (
    <div className="relative w-5 h-5 border border-white/40 rounded-sm">
      {checked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Check size={16} className="text-white" strokeWidth={3} />
        </div>
      )}
    </div>
  );
};