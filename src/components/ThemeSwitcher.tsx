'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { ThemeName } from '@/utils/theme';

const themes: { value: ThemeName; label: string }[] = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'candy', label: 'Candy' },
  { value: 'forest', label: 'Forest' },
  { value: 'midnight', label: 'Midnight' },
  { value: 'sunset', label: 'Sunset' },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const currentTheme = themes.find((t) => t.value === theme);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: 'var(--color-neutral-light)',
          color: 'var(--color-text)',
          borderRadius: 'var(--radius-md)',
          boxShadow: `0 2px 4px var(--shadow-color)`,
          border: '1px solid var(--color-neutral)',
        }}
        className="flex items-center gap-2 px-3 py-2"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span
          className="h-4 w-4 rounded-full" 
          style={{ 
            backgroundColor: 'var(--color-primary)',
            border: '1px solid var(--color-primary-dark)'
          }}
        />
        <span>{currentTheme?.label || 'Theme'}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      {isOpen && (
        <div 
          style={{
            backgroundColor: 'var(--color-surface)',
            color: 'var(--color-text)',
            borderRadius: 'var(--radius-md)',
            boxShadow: `0 4px 8px var(--shadow-color)`,
            border: '1px solid var(--color-neutral)',
            zIndex: 10,
          }}
          className="absolute top-full mt-1 w-full py-1"
        >
          <ul className="py-1" role="listbox">
            {themes.map((themeOption) => (
              <li
                key={themeOption.value}
                role="option"
                aria-selected={theme === themeOption.value}
                style={{
                  backgroundColor: theme === themeOption.value ? 'var(--color-neutral-light)' : '',
                  cursor: 'pointer',
                }}
                className="flex items-center gap-2 px-3 py-2 hover:opacity-90"
                onClick={() => {
                  setTheme(themeOption.value);
                  setIsOpen(false);
                }}
              >
                <span 
                  className="h-4 w-4 rounded-full" 
                  style={{ 
                    backgroundColor: 
                      themeOption.value === 'ocean' ? '#aab9ff' :
                      themeOption.value === 'candy' ? '#f9a8d4' :
                      themeOption.value === 'forest' ? '#4ade80' :
                      themeOption.value === 'midnight' ? '#8b5cf6' : '#fb923c',
                    border: '1px solid var(--color-neutral-dark)'
                  }}
                />
                {themeOption.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}