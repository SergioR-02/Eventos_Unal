import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ReactNode, useEffect } from 'react';

type ThemeState = {
  isDark: boolean;
  toggleTheme: () => void;
  setDark: (v: boolean) => void;
};

// Zustand store with localStorage persistence
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: false,
      toggleTheme: () => set((s) => ({ isDark: !s.isDark })),
      setDark: (v: boolean) => set({ isDark: v }),
    }),
    {
      name: 'theme-storage',
    }
  )
);

// Compatibility provider (no-op wrapper) that syncs the `dark` class on the document
export function ThemeProvider({ children }: { children: ReactNode }) {
  const isDark = useThemeStore((s) => s.isDark);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDark);
      try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      } catch {}
    }
  }, [isDark]);

  return <>{children}</>;
}

// Hook with the previous API: { isDark, toggleTheme }
export function useTheme() {
  const isDark = useThemeStore((s) => s.isDark);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  return { isDark, toggleTheme };
}
