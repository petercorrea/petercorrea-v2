'use client';
import { create } from 'zustand';

interface DarkMode {
  darkMode: boolean;
  turnOnDarkMode: () => void;
  turnOffDarkMode: () => void;
}

const useDarkMode = create<DarkMode>((set) => ({
  darkMode: false,
  turnOnDarkMode: () => set({ darkMode: true }),
  turnOffDarkMode: () => set({ darkMode: false }),
}));

export default useDarkMode;
