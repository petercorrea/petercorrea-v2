'use client';

import { useEffect, useState } from 'react';
import { HiOutlineMoon } from 'react-icons/hi';
import { HiOutlineSun } from 'react-icons/hi2';

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkThemeOn = () => {
    console.log('toggeling to dark mode');
    document.querySelector('html')?.setAttribute('data-theme', 'darky');
    document.documentElement.classList.add('dark');
  };

  const toggleDarkThemeOff = () => {
    console.log('toggeling to light mode');
    document.querySelector('html')?.removeAttribute('data-theme');
    document.documentElement.classList.remove('dark');
  };

  // on page load, set inital theme to users preference
  useEffect(() => {
    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    console.log(`system initally ${systemTheme}`);
    setDarkMode(systemTheme);
    systemTheme ? toggleDarkThemeOn() : toggleDarkThemeOff();
  }, []);

  const handleOnClick = () => {
    if (darkMode) {
      toggleDarkThemeOff();
    } else {
      toggleDarkThemeOn();
    }
    setDarkMode(!darkMode);
  };

  return (
    <main>
      <div>
        <button onClick={handleOnClick}>
          <HiOutlineMoon
            className={`${darkMode ? 'hidden' : 'text-primary'}`}
          />
          <HiOutlineSun className={`${darkMode ? 'text-primary' : 'hidden'}`} />
        </button>
        <p className="text-primary">Text color</p>
      </div>
    </main>
  );
}
