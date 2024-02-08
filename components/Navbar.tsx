import DarkModeButton from '@/components/DarkModeButton';
import useNavModal from '@/hooks/useNavModal';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { FaHamburger } from 'react-icons/fa';
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

    setDarkMode(systemTheme);
    systemTheme ? toggleDarkThemeOn() : toggleDarkThemeOff();
  }, []);

  const navModal = useNavModal();

  const handleOnClick = () => {
    if (navModal.isOpen) {
      console.log('closing modal');
      navModal.onClose();
    } else {
      console.log('opening modal');
      navModal.onOpen();
    }
  };

  return (
    <>
      {/* mobile navbar */}
      <div className="absolute flex flex-row md:hidden w-full justify-between items-center p-4">
        <button onClick={handleOnClick}>
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
          {/* <Link
            href="/posts"
            className="flex flex-row justify-center text-primary rounded-full hover:underline hover:underline-offset-1 mr-4"
          >
            posts
          </Link> */}
          <a
            href="/Peter Correa Resume.pdf"
            download="Peter Correa Resume"
            className="flex flex-row justify-center text-primary rounded-full hover:underline hover:underline-offset-1 mr-4"
          >
            resume
          </a>

          <DarkModeButton setDarkMode={setDarkMode} darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
