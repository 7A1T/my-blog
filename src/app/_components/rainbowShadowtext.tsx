"use client";

import React, { useState, useEffect, ReactNode } from "react";

interface RainbowShadowTextProps {
  children: ReactNode;
  className?: string;
  animationDuration?: number;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}

const RainbowShadowText: React.FC<RainbowShadowTextProps> = ({
  children,
  className = "",
  animationDuration = 3000,
  as: Component = "div",
}) => {
  const [animate, setAnimate] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, animationDuration);

    return () => clearTimeout(timer);
  }, [animationDuration]);

  return (
    <Component className={`relative ${className}`}>
      <span
        className={`
          inline-block
          ${animate ? "animate-rainbow-shadow" : ""}
        `}
      >
        {children}
      </span>
      <style jsx>{`
        @keyframes rainbow-shadow {
          0% {
            text-shadow:
              0 0 10px rgba(255, 0, 0, 0.7),
              0 0 20px rgba(255, 0, 0, 0.5),
              0 0 30px rgba(255, 0, 0, 0.3);
          }
          16.67% {
            text-shadow:
              0 0 10px rgba(255, 165, 0, 0.7),
              0 0 20px rgba(255, 165, 0, 0.5),
              0 0 30px rgba(255, 165, 0, 0.3);
          }
          33.33% {
            text-shadow:
              0 0 10px rgba(255, 255, 0, 0.7),
              0 0 20px rgba(255, 255, 0, 0.5),
              0 0 30px rgba(255, 255, 0, 0.3);
          }
          50% {
            text-shadow:
              0 0 10px rgba(0, 128, 0, 0.7),
              0 0 20px rgba(0, 128, 0, 0.5),
              0 0 30px rgba(0, 128, 0, 0.3);
          }
          66.67% {
            text-shadow:
              0 0 10px rgba(0, 0, 255, 0.7),
              0 0 20px rgba(0, 0, 255, 0.5),
              0 0 30px rgba(0, 0, 255, 0.3);
          }
          83.33% {
            text-shadow:
              0 0 10px rgba(75, 0, 130, 0.7),
              0 0 20px rgba(75, 0, 130, 0.5),
              0 0 30px rgba(75, 0, 130, 0.3);
          }
          100% {
            text-shadow:
              0 0 10px rgba(143, 0, 255, 0.7),
              0 0 20px rgba(143, 0, 255, 0.5),
              0 0 30px rgba(143, 0, 255, 0.3);
          }
        }
        .animate-rainbow-shadow {
          animation: rainbow-shadow ${animationDuration}ms linear;
        }
      `}</style>
    </Component>
  );
};

export default RainbowShadowText;
