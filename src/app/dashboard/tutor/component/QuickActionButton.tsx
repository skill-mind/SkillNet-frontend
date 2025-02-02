interface QuickActionButtonProps {
  label: string;
  onClick: () => void;
}

export function QuickActionButton({ label, onClick }: QuickActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full px-6 py-3 bg-none border border-[#2D2E2D] hover:bg-[#FFFFFF1A] rounded-lg transition-colors"
    >
      {label}
    </button>
  );
}
