import { FaChevronDown } from "react-icons/fa";
// TODO: add onclick scroll down
export default function BouncingChevron() {
  return (
    <div className="flex flex-col items-center space-y-2 animate-bounce">
      <div className="glass-chevron w-16 h-16 flex items-center justify-center rounded-full">
        <FaChevronDown className="text-white/80" size={24} strokeWidth={3} />
      </div>
    </div>
  );
}
