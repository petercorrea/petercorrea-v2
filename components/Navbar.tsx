import DarkModeButton from '@/components/DarkModeButton';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { toggleDarkThemeOff, toggleDarkThemeOn } from '../libs/helpers';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  useEffect(() => {
    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    console.log(`system initally ${systemTheme}`);
    setDarkMode(systemTheme);
    systemTheme ? toggleDarkThemeOn() : toggleDarkThemeOff();
  }, []);

  return (
    <div className="flex flex-row w-full justify-between items-center p-3 px-6 absolute">
      <button>
        <FaHamburger size={24} className="text-primary md:hidden" />
      </button>

      <div className="hidden md:flex flex-row justify-center items-center rounded-full bg-white opacity-80 backdrop-blur-xl">
        <Link
          href=""
          className="flex flex-row justify-center color-primary m-2 p-4 rounded-full w-20 bg-transparent"
        >
          About
        </Link>

        <Link
          href=""
          className="flex flex-row justify-center color-primary m-2 p-4 rounded-full w-20"
        >
          XP
        </Link>
        <Link
          href=""
          className="flex flex-row justify-center color-primary m-2 p-4 rounded-full w-20"
        >
          Projects
        </Link>
        <Link
          href=""
          className="flex flex-row justify-center color-primary m-2 p-4 rounded-full w-20"
        >
          Posts
        </Link>
        <Link
          href=""
          className="flex flex-row justify-center color-primary m-2 p-4 rounded-full w-20"
        >
          Contact
        </Link>
        <button className="flex flex-row justify-center color-primary m-2 p-4 rounded-full w-20">
          Resume
        </button>
      </div>

      <DarkModeButton setDarkMode={setDarkMode} darkMode={darkMode} />
    </div>
  );
};

export default Navbar;
