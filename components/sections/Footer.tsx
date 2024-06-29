import data from '@/content/text.json';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import Padding from '../layouts/Padding';

const heading = (
  <h1 className="text-white sticky top-0 lowercase pb-10 md:pb-0">Contact</h1>
);

const Footer = () => {
  return (
    <div id="contact" className="w-full lg:hidden bg-stone-100 dark:bg-stone-900 p-4">
      <Padding>
      <div className="flex flex-col w-full items-center">
      <div className="flex flex-row justify-center mb-4">
        <a href={data.contact.mailto}>
          <MdAlternateEmail size={20} className="text-stone-400 mr-10 hover:text-blue-500 dark:hover:text-white duration-0" />
        </a>
        <Link href={data.contact.linkedin}>
          <FaLinkedinIn size={20} className="text-stone-400 mr-10 hover:text-blue-500 dark:hover:text-white duration-0" />
        </Link>
        <Link href={data.contact.github}>
          <FaGithub size={20} className="text-stone-400 mr-10 hover:text-blue-500 dark:hover:text-white duration-0" />
        </Link>
        <Link href={data.contact.youtube}>
          <FaYoutube size={20} className="text-stone-400 hover:text-blue-500 dark:hover:text-white duration-0" />
        </Link>
      </div>
      <p className="text-stone-400 dark:text-stone-600 text-xs font-medium">from sunny florida</p>
    </div>
      </Padding>
    </div>
  );
};

export default Footer;
