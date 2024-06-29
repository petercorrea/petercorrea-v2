import Transition from '@/components/effects/Transition';
import data from '@/content/text.json';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

const Hero = () => {
  return (
    <div className="max-w-screen max-h-screen min-h-screen flex flex-col justify-center md:justify-center max-w-[1000px] md:mt-0">
      <div className="flex flex-col justify-start md:justify-center items-center">
        <Transition delay="50" direction="down">
          <div className="w-full mb-8">
            <div className="flex flex-row justify-start items-center mb-4">
              <div className="w-2 h-2 rounded-full bg-green-600 mr-1">
                <div className="animate-ping w-2 h-2 rounded-full bg-green-600 mr-1"></div>
              </div>
              <p className="text-green-600 dark:text-green-600 font-tiny font-semibold">
                Available for hire
              </p>
            </div>
            <h1 className="text-primary md:text-6xl mb-4">
              Software Engineer
            </h1>

            <p className="dark:text-stone-400 text-stone-600 font-semibold">
              Peter | ˈpē-tər&nbsp; | noun:
            </p>
            <p className="dark:text-stone-400 text-stone-600">
              1. A fullstack engineer based in Tampa, Florida.
            </p>
            <p className="dark:text-stone-400 text-stone-600">
              2. Skilled in TypeScript, Python, Postgres, Redis, and RabbitMQ.
            </p>
            <p className="dark:text-stone-400 text-stone-600 mb-2">
              3. Mentor, leader, former saxophonist.
            </p>


            <div className="flex flex-row mb-20">
              <Transition delay="100" direction="up">
                <a href={data.contact.mailto}>
                  <MdAlternateEmail
                    size={20}
                    className="text-primary mr-4 hover:text-blue-500 duration-0"
                  />
                </a>
              </Transition>
              <Transition delay="150" direction="up">
                <Link href={data.contact.linkedin}>
                  <FaLinkedinIn
                    size={20}
                    className="text-primary mr-4 hover:text-blue-500 duration-0"
                  />
                </Link>
              </Transition>
              <Transition delay="200" direction="up">
                <Link href={data.contact.github}>
                  <FaGithub
                    size={20}
                    className="text-primary mr-4 hover:text-blue-500 duration-0"
                  />
                </Link>
              </Transition>
              <Transition delay="250" direction="up">
                <Link href={data.contact.youtube}>
                  <FaYoutube
                    size={20}
                    className="text-primary mr-1 hover:text-blue-500 duration-0"
                  />
                </Link>
              </Transition>
            </div>
          </div>
        </Transition>

        <div className="flex flex-row justify-center mb-20 min-w-full min-h-[200px]">
          <Transition delay="100" direction="down" classname="w-full">
            <div className="bg-bauhausRed rounded-3xl flex flex-row justify-center items-center mr-4 -rotate-2 h-full w-full">
              <div className="relative -right-2 top-2  rounded-3xl overflow-hidden h-full w-full">
                <Image
                  src="/afk/pic_1.jpeg"
                  alt="Image"
                  fill
                  sizes="500px"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </Transition>

          <Transition delay="250" direction="down" classname="w-full">
            <div className="bg-bauhausYellow rounded-3xl flex flex-row justify-center items-center mr-4 rotate-2 h-full w-full">
              <div className="relative -right-2 top-2  rounded-3xl overflow-hidden h-full w-full">
                <Image
                  src="/afk/kota.jpeg"
                  alt="Image"
                  fill
                  sizes="500px"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </Transition>

          <Transition delay="400" direction="down" classname="w-full">
            <div className="bg-bauhausBlue  rounded-3xl flex flex-row justify-center items-center mr-4 -rotate-2 h-full w-full">
              <div className="relative -right-2 top-2  rounded-3xl overflow-hidden h-full w-full">
                <Image
                  src="/afk/morocco.jpeg"
                  alt="Image"
                  fill
                  sizes="500px"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default Hero;
