"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  [key: string]: any;
}

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{visibility: 'hidden'}}>{children}</div>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
} 