import data from '@/content/text.json';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import Padding from '../layouts/Padding';
import TwoCol from '../layouts/TwoCol';

const heading = (
  <h1 className="text-white sticky top-0 lowercase pb-10 md:pb-0">Contact</h1>
);

const content = (
  <>
    <div className="flex flex-col w-full">
      <h2 className="text-white ">{data.contact.name}</h2>
      <h2 className="text-white mb-4">{data.contact.title}</h2>

      <div className="flex flex-row">
        <a href={data.contact.mailto}>
          <MdAlternateEmail size={20} className="text-white mr-4" />
        </a>
        <Link href={data.contact.linkedin}>
          <FaLinkedinIn size={20} className="text-white mr-4" />
        </Link>
        <Link href={data.contact.github}>
          <FaGithub size={20} className="text-white mr-4" />
        </Link>
        <Link href={data.contact.youtube}>
          <FaYoutube size={20} className="text-white mr-1" />
        </Link>
      </div>
    </div>
  </>
);

const Footer = () => {
  return (
    <div id="contact" className="w-full lg:hidden bg-bauhausBlue">
      <Padding>
        <TwoCol heading={heading} content={content} />
      </Padding>
    </div>
  );
};

export default Footer;
