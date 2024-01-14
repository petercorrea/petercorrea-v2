import data from '@/db.json';
import Link from 'next/link';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex fixed bottom-0 w-full h-[40px] flex-row justify-end items-center p-2 bg-opposite z-50">
      <Link href={data.contact.linkedin}>
        <FaLinkedinIn size={20} className="text-primary mr-4" />
      </Link>
      <Link href={data.contact.github}>
        <FaGithub size={20} className="text-primary mr-4" />
      </Link>
      <Link href={data.contact.youtube}>
        <FaYoutube size={20} className="text-primary mr-1" />
      </Link>
    </div>
  );
};

export default SocialLinks;
