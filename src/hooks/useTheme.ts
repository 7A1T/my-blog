'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/utils/theme';

export function useTheme() {
  const { theme, setTheme } = useThemeStore();
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    
    // could also add a class to the body if needed
    // document.body.className = theme;
  }, [theme]);
  
  return { theme, setTheme };
}