import React from 'react';

type StatusBarProps = {
  filled: number; // 0 to 10
};

export function StatusBar({ filled }:StatusBarProps) {
  const total = 10;

  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm font-medium text-gray-700 dark:text-slate-400">
        Status
      </span>
      <div className="flex space-x-1">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-xl transition-colors ${
              index < filled ? 'bg-blue-600' : 'bg-gray-300 dark:bg-slate-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

