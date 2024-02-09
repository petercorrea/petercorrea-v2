'use client';
import DarkModeButton from '@/components/DarkModeButton';
import useNavModal from '@/hooks/useNavModal';
import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';
import Transition from './Transition';

const Navbar = () => {
  const navModal = useNavModal();

  const handleOnClick = () => {
    console.log('fired', navModal.isOpen);
    if (navModal.isOpen) {
      navModal.onClose();
    } else {
      navModal.onOpen();
    }
  };

  return (
    <>
      {/* mobile navbar */}
      <Transition delay="100" direction="down">
        <div className="flex flex-row md:hidden w-full justify-between items-center p-4">
          <button onClick={handleOnClick}>
            <FaHamburger size={24} className="text-primary md:hidden" />
          </button>

          <DarkModeButton />
        </div>
      </Transition>

      {/* navbar */}
      <Transition delay="100" direction="down">
        <div className="hidden md:flex flex-row w-full justify-end items-center p-3 px-6 ">
          <div className="flex flex-row justify-end items-center opacity-80 backdrop-blur-xl">
            <Link
              href="/#about"
              className="flex flex-row justify-center dark:text-stone-400 text-stone-500 rounded-full hover:text-primary hover:underline hover:underline-offset-1 mr-4"
            >
              about
            </Link>

            <Link
              href="/#xp"
              className="flex flex-row justify-center dark:text-stone-400 text-stone-500 rounded-full hover:text-primary hover:underline hover:underline-offset-1 mr-4"
            >
              xp
            </Link>
            <Link
              href="/#projects"
              className="flex flex-row justify-center dark:text-stone-400 text-stone-500 rounded-full hover:text-primary hover:underline hover:underline-offset-1 mr-4"
            >
              projects
            </Link>
            <Link
              href="/posts"
              className="flex flex-row justify-center dark:text-stone-400 text-stone-500 rounded-full hover:text-primary hover:underline hover:underline-offset-1 mr-4"
            >
              posts
            </Link>
            <a
              href="/Peter Correa Resume.pdf"
              download="Peter Correa Resume"
              className="flex flex-row justify-center dark:text-stone-400 text-stone-500 rounded-full hover:text-primary hover:underline hover:underline-offset-1 mr-4"
            >
              resume
            </a>

            <DarkModeButton />
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Navbar;
