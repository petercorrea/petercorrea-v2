import data from '@/db.json';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import Padding from '../Padding';

const Footer = () => {
  return (
    <Padding id="contact" classname="lg:hidden bg-bauhausBlue">
      <div className="flex flex-col md:grid md:grid-cols-4 justify-start w-full max-w-[1000px]">
        <div className=" min-w-fit">
          <h1 className="text-white text-3xl font-semibold sticky top-0 lowercase pb-10 md:pb-0">
            Contact
          </h1>
        </div>

        <div className="col-span-3">
          <div className="h-[200px] flex flex-col w-full">
            <h1 className="text-white text-2xl">{data.contact.name}</h1>
            <h1 className="text-white text-2xl mb-4">{data.contact.title}</h1>

            <div className="flex flex-row">
              <a href={data.contact.mailto}>
                <MdAlternateEmail size={20} className="text-primary mr-4" />
              </a>
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
          </div>
        </div>
      </div>
    </Padding>
  );
};

export default Footer;
