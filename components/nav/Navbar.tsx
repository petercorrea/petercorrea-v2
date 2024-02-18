'use client';
import DarkModeButton from '@/components/nav/DarkModeButton';
import { routes } from '@/libs/constants';
import useNavModal from '@/stores/useNavModal';
import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';
import Transition from '../effects/Transition';

const Navbar = () => {
  const navModal = useNavModal();

  const handleOnClick = () => {
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
            <FaHamburger
              size={24}
              className="text-primary md:hidden hover:text-blue-500 dark:hover:text-blue-500 duration-0"
            />
          </button>

          <DarkModeButton />
        </div>
      </Transition>

      {/* navbar */}
      <Transition delay="100" direction="down">
        <div className="hidden md:flex flex-row w-full justify-end items-center p-3 px-6 ">
          <div className="flex flex-row justify-end items-center opacity-80 backdrop-blur-xl">
            {routes.map((route, idx) => (
              <Link
                key={idx}
                href={route.href}
                className="flex flex-row justify-center  text-primary rounded-full hover:text-blue-500 dark:hover:text-blue-500 hover:underline hover:underline-offset-1 mr-4"
              >
                {route.text}
              </Link>
            ))}
            <a
              href="/Peter_Correa_resume.pdf"
              className="flex flex-row justify-center  text-primary rounded-full hover:text-blue-500 dark:hover:text-blue-500 hover:underline hover:underline-offset-1 mr-4"
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
