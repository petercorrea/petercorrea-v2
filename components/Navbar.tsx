import DarkModeButton from '@/components/DarkModeButton';
import data from '@/db.json';
import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { FaGithub, FaHamburger, FaYoutube } from 'react-icons/fa';
import { toggleDarkThemeOff, toggleDarkThemeOn } from '../libs/helpers';

interface NavbarProps {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  useEffect(() => {
    const systemTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    console.log(`system initally ${systemTheme}`);
    setDarkMode(systemTheme);
    systemTheme ? toggleDarkThemeOn() : toggleDarkThemeOff();
  }, []);

  const sunStyle = darkMode
    ? 'absolute top-20 left-0 -translate-x-full'
    : 'absolute top-20 left-0 translate-x-full';

  const moonStyle = darkMode
    ? 'absolute top-20 left-0 translate-x-full'
    : 'absolute top-20 left-0 -translate-x-full';

  return (
    <>
      {/* Sun and moon svg */}
      <div className={`${moonStyle} transition-transform duration-1000`}>
        <Image src="/moon.svg" alt="Moon" width={150} height={150} priority />
      </div>

      <div className={`${sunStyle} transition-transform duration-1000`}>
        <Image src="/sun.svg" alt="Sun" width={150} height={150} priority />
      </div>

      {/* mobile navbar */}
      <div className="absolute flex flex-row md:hidden w-full justify-between items-center p-4">
        <button>
          <FaHamburger size={24} className="text-primary md:hidden" />
        </button>

        <DarkModeButton setDarkMode={setDarkMode} darkMode={darkMode} />
      </div>

      {/* navbar */}
      <div className="hidden md:flex flex-row w-full justify-end items-center p-3 px-6 absolute">
        <div className="flex flex-row justify-end items-center opacity-80 backdrop-blur-xl">
          <Link
            href="#about"
            className="flex flex-row justify-center text-primary rounded-full hover:underline hover:underline-offset-1 mr-4"
          >
            about
          </Link>

          <Link
            href="#xp"
            className="flex flex-row justify-center text-primary rounded-full hover:underline hover:underline-offset-1 mr-4"
          >
            xp
          </Link>
          <Link
            href="#projects"
            className="flex flex-row justify-center text-primary rounded-full hover:underline hover:underline-offset-1 mr-4"
          >
            projects
          </Link>
          <Link
            href="/posts"
            className="flex flex-row justify-center text-primary rounded-full hover:underline hover:underline-offset-1 mr-4"
          >
            posts
          </Link>
          <Link
            href="#contact"
            className="flex flex-row justify-center text-primary rounded-full hover:underline hover:underline-offset-1 mr-4"
          >
            contact
          </Link>
          <a
            href="/Peter Correa Resume.pdf"
            download="Peter Correa Resume"
            className="flex flex-row justify-center text-primary rounded-full hover:underline hover:underline-offset-1 mr-4"
          >
            resume
          </a>
          <Link href={data.contact.github}>
            <FaGithub size={20} className="text-primary mr-4" />
          </Link>
          <Link href={data.contact.youtube}>
            <FaYoutube size={20} className="text-primary mr-8" />
          </Link>
          <DarkModeButton setDarkMode={setDarkMode} darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
