interface DateActionButtonProps {
    label: string;
    onClick: () => void;
  }

export function DateActionButton({ label, onClick }: DateActionButtonProps) {
  return (
    <button
        onClick={onClick}
        className="w-full px-2 py-3 bg-none border border-[#2D2E2D] hover:bg-[#FFFFFF1A] rounded-3xl transition-colors"
    >
        {label}
    </button>
  );
}
