import data from '@/db.json';
import Link from 'next/link';
import Padding from '../Padding';

const Footer = () => {
  return (
    <Padding id="contact" classname="bg-stone-800">
      <div className=" grid grid-cols-4  justify-start w-full">
        <div className=" min-w-fit">
          <h1 className="text-white text-xs font-semibold sticky top-0 lowercase">
            Contact
          </h1>
        </div>

        <div className="col-span-3">
          <div className="h-[200px] flex flex-col w-full pt-10">
            <p className="text-white">{data.contact.name}</p>
            <p className="text-white">{data.contact.title}</p>
            <Link
              className="text-white"
              href="mailto:contact@petercorrea.com?subject=PeterCorrea.com:%20reaching%20out..."
            >
              {data.contact.email}
            </Link>
            <Link className="text-white" href={data.contact.linkedin}>
              {data.contact.linkedin}
            </Link>
            <Link className="text-white" href={data.contact.github}>
              {data.contact.github}
            </Link>
          </div>
        </div>
      </div>
    </Padding>
  );
};

export default Footer;
