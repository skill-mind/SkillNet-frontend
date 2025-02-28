import { cn } from "@/lib/utils";

interface FormInputProps {
  id: string;
  title: string;
  placeholder: string;
  className?: string;
}

export default function FormInput({
  id,
  title,
  placeholder,
  className,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={id} className="text-[#BBBBBB] space-x-1">
        <span>{title}</span>
        <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        className={cn(
          "bg-transparent w-full outline-none border border-[#252625] p-2  rounded-md",
          className
        )}
      />
    </div>
  );
}
