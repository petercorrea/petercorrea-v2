import data from '@/content/text.json';
import { resume, routes } from '@/libs/constants';
import useNavModal from '@/stores/useNavModal';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdAlternateEmail, MdClose } from 'react-icons/md';

interface NavModalProps {
  isOpen: boolean;
}

const NavModal = ({ isOpen }: NavModalProps) => {
  const navModal = useNavModal();

  const handleOnClick = () => {
    navModal.onClose();
  };

  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      } z-50 fixed top-0 right-0 w-full h-full bg-white dark:bg-black flex flex-col justify-center items-center transition`}
    >
      <button
        onClick={handleOnClick}
        className="absolute top-0 left-0 ml-3 mt-3"
      >
        <MdClose className="text-primary" size={25} />
      </button>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col items-center ">
          {routes.map((route, idx) => (
            <Link
              href={route.href}
              className="text-primary hover:underline hover:text-blue-500 p-4 px-20 w-full text-center"
              onClick={handleOnClick}
              key={idx}
            >
              {route.text}
            </Link>
          ))}
          <a
            href={resume.href}
            className="text-primary hover:underline hover:text-blue-500 p-4 px-20 w-full text-center"
            onClick={handleOnClick}
          >
            {resume.text}
          </a>
        </div>

        <div className="flex flex-row w-full h-full justify-center items-center mt-20">
          <a href={data.contact.mailto} className="mr-4">
            <MdAlternateEmail
              size={20}
              className="text-primary mr-10 hover:text-blue-500 transition duration-0"
            />
          </a>
          <Link href={data.contact.linkedin} onClick={handleOnClick}>
            <FaLinkedinIn
              size={25}
              className="text-primary mr-10 hover:text-blue-500 transition duration-0"
            />
          </Link>
          <Link href={data.contact.github} onClick={handleOnClick}>
            <FaGithub
              size={25}
              className="text-primary mr-10 hover:text-blue-500 transition duration-0"
            />
          </Link>
          <Link href={data.contact.youtube} onClick={handleOnClick}>
            <FaYoutube
              size={25}
              className="text-primary hover:text-blue-500 transition duration-0"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavModal;
