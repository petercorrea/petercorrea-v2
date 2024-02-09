'use client';

import useDarkMode from '@/hooks/useDarkMode';
import { useEffect } from 'react';
import { HiOutlineMoon } from 'react-icons/hi';
import { HiOutlineSun } from 'react-icons/hi2';
import { toggleDarkThemeOff, toggleDarkThemeOn } from '../libs/helpers';

const DarkModeButton = () => {
  const darkMode = useDarkMode();

  useEffect(() => {
    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    systemTheme ? toggleDarkThemeOn() : toggleDarkThemeOff();
  }, []);

  const handleOnClick = () => {
    if (darkMode.darkMode) {
      toggleDarkThemeOff();
      darkMode.turnOffDarkMode();
    } else {
      toggleDarkThemeOn();
      darkMode.turnOnDarkMode();
    }
  };

  return (
    <button onClick={handleOnClick} className="">
      <HiOutlineMoon
        size={20}
        className="duration-0 flex dark:hidden dark:text-stone-400 text-stone-500 hover:text-primary"
      />
      <HiOutlineSun
        size={20}
        className="duration-0 dark:text-stone-400 text-stone-500 hover:text-primary hidden dark:flex"
      />
    </button>
  );
};

export default DarkModeButton;
