'use client';
import DarkModeButton from '@/components/nav/DarkModeButton';
import { resume, routes } from '@/libs/constants';
import useNavModal from '@/stores/useNavModal';
import Link from 'next/link';

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
    <div className="fixed top-0 left-0 right-0  h-[50px] w-full bg-black z-10">
      <div className="flex flex-row justify-between items-center p-3 px-6">
        <h3 className="text-white">Peter Correa</h3>
        <div className="flex flex-row justify-end items-center">
          {routes.map((route, idx) => (
            <Link
              key={idx}
              href={route.href}
              className="font-semibold text-xs uppercase flex flex-row justify-center text-white rounded-full hover:underline hover:underline-offset-1 mr-4"
            >
              {route.text}
            </Link>
          ))}
          <a
            href={resume.href}
            className="font-semibold text-xs uppercase flex flex-row justify-center rounded-full px-3 py-0 border-[2px] border-black text-white hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white mr-4"
          >
            {resume.text}
          </a>
          <DarkModeButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
