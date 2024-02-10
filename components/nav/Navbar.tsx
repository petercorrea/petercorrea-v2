'use client';
import DarkModeButton from '@/components/nav/DarkModeButton';
import useNavModal from '@/stores/useNavModal';
import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';
import Transition from '../effects/Transition';

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

  const links = [
    { text: 'about', href: '/#about' },
    { text: 'xp', href: '/#xp' },
    { text: 'projects', href: '/#projects' },
    { text: 'posts', href: '/posts' },
    { text: 'afk', href: '/afk' },
    {
      text: 'resume',
      href: '/Peter Correa Resume.pdf',
      download: 'Peter Correa Resume',
    },
  ];

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
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                download={link.download}
                className="flex flex-row justify-center dark:text-stone-400 text-stone-500 rounded-full hover:text-blue-500 dark:hover:text-blue-500 hover:underline hover:underline-offset-1 mr-4"
              >
                {link.text}
              </Link>
            ))}
            <DarkModeButton />
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Navbar;
