"use client";

import { FaChevronDown } from "react-icons/fa";

export default function BouncingChevron() {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2 animate-[bounce_2s_infinite]">
      <div
        className="glass-chevron w-16 h-16 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition-transform duration-200"
        onClick={scrollToProjects}
      >
        <FaChevronDown className="text-white/80" size={24} strokeWidth={3} />
      </div>
    </div>
  );
}
