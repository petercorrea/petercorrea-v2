import data from '@/db/content.json';
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
        <Link
          href="/#about"
          className="text-primary p-5 hover:underline"
          onClick={handleOnClick}
        >
          about
        </Link>
        <Link
          href="/#xp"
          className="text-primary p-5 hover:underline"
          onClick={handleOnClick}
        >
          xp
        </Link>
        <Link
          href="/#projects"
          className="text-primary p-5 hover:underline"
          onClick={handleOnClick}
        >
          projects
        </Link>
        <Link
          href="/posts"
          className="text-primary p-5 hover:underline"
          onClick={handleOnClick}
        >
          posts
        </Link>
        <Link
          href="/afk"
          className="text-primary p-5 hover:underline"
          onClick={handleOnClick}
        >
          afk
        </Link>

        <a
          href="/Peter Correa Resume.pdf"
          download="Peter Correa Resume"
          className="text-primary p-5 hover:underline"
          onClick={handleOnClick}
        >
          resume
        </a>

        <div className="flex flex-row w-full h-full justify-center items-center mt-5">
          <a
            href={data.contact.mailto}
            className="flex flex-row justify-center text-primary rounded-full hover:underline hover:underline-offset-1 mr-4"
          >
            <MdAlternateEmail size={20} className="text-primary mr-10" />
          </a>
          <Link href={data.contact.linkedin} onClick={handleOnClick}>
            <FaLinkedinIn size={25} className="text-primary mr-10" />
          </Link>
          <Link href={data.contact.github} onClick={handleOnClick}>
            <FaGithub size={25} className="text-primary mr-10" />
          </Link>
          <Link href={data.contact.youtube} onClick={handleOnClick}>
            <FaYoutube size={25} className="text-primary" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavModal;
