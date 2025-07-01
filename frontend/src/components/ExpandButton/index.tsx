import { ChevronDown } from "lucide-react";

interface Props {
  onClick: () => void;
  isExpanded: boolean;
}

export default function ExpandButton({ onClick, isExpanded }: Props) {
  return (
    <div className="flex justify-center p-8">
        <ChevronDown size={48} onClick={onClick}
            className={`text-[#3f6b0d] cursor-pointer hover:text-white hover:rounded-full animate-bounce hover:bg-[#3f6b0d]  ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
    </div>
  );
}
