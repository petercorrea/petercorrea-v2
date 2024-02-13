'use client';

import useDarkMode from '@/stores/useDarkMode';
import { useEffect } from 'react';
import { HiOutlineMoon } from 'react-icons/hi';
import { HiOutlineSun } from 'react-icons/hi2';
import { toggleDarkThemeOff, toggleDarkThemeOn } from '../../libs/helpers';

const DarkModeButton = () => {
  const darkMode = useDarkMode();

  useEffect(() => {
    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    systemTheme ? toggleDarkThemeOn() : toggleDarkThemeOff();
    systemTheme ? darkMode.turnOnDarkMode() : darkMode.turnOffDarkMode();
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
        className="duration-0 flex dark:hidden dark:text-stone-400 text-primary hover:text-blue-500 dark:hover:text-blue-500"
      />
      <HiOutlineSun
        size={20}
        className="duration-0 dark:text-primary hover:text-blue-500 hidden dark:flex dark:hover:text-blue-500"
      />
    </button>
  );
};

export default DarkModeButton;
