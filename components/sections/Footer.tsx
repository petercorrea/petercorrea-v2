import data from '@/db.json';
import Link from 'next/link';
import Section from '../Section';

const Footer = () => {
  return (
    <Section id="contact" classname="bg-stone-800">
      <div className="h-[200px] flex flex-col w-full pt-10">
        <h1 className="text-4xl font-extrabold text-white">Contact</h1>
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
    </Section>
  );
};

export default Footer;
