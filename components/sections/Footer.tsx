import data from '@/db.json';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import Padding from '../Padding';

const Footer = () => {
  return (
    <Padding id="contact" classname="bg-stone-800">
      <div className=" grid grid-cols-4 justify-start w-full max-w-[1000px]">
        <div className=" min-w-fit">
          <h1 className="text-white text-3xl font-semibold sticky top-0 lowercase">
            Contact
          </h1>
        </div>

        <div className="col-span-3">
          <div className="h-[200px] flex flex-col w-full">
            <h1 className="text-white text-2xl">{data.contact.name}</h1>
            <h1 className="text-white text-2xl mb-4">{data.contact.title}</h1>

            <Link
              className="text-white text-xs hover:underline"
              href={data.contact.mailto}
            >
              <div className="flex flex-row items-center min-w-fit">
                {data.contact.email}
                <FiExternalLink className="text-white ml-2" />
              </div>
            </Link>

            <Link
              className="text-white text-xs hover:underline"
              href={data.contact.linkedin}
            >
              <div className="flex flex-row items-center min-w-fit">
                {data.contact.linkedin}
                <FiExternalLink className="text-white ml-2" />
              </div>
            </Link>

            <Link
              className="text-white text-xs hover:underline"
              href={data.contact.github}
            >
              <div className="flex flex-row items-center min-w-fit">
                {data.contact.github}
                <FiExternalLink className="text-white ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Padding>
  );
};

export default Footer;
