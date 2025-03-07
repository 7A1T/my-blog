'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { useThemeStore } from '@/utils/theme';

export default function ThemeProvider({ children }: PropsWithChildren) {
  const { theme } = useThemeStore();
  const [mounted, setMounted] = useState(false);
  
  // Use useEffect to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  // Prevent rendering until after client-side hydration
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }
  
  return <>{children}</>;
}
