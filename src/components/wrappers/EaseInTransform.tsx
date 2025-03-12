"use client";
import { useState, useEffect, ReactNode } from "react";

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string; // for passing additional tailwindcss
}

// wrapper for any html tag to animate ease in

export default function EaseInTransform({
  children,
  className = "",
}: AnimatedWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ensure ssr doesnt block animation
    setTimeout(() => setIsVisible(true), 50); // Trigger animation after small delay
  }, []);
  if (!isClient) return <>{children}</>
  return (
    <div
      className={`transition-opacity duration-1000 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${className}`}
    >
      {children}
    </div>
  );
}
