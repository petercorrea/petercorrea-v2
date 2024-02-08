import Padding from '@/components/Padding';
import Transition from '@/components/Transition';
import data from '@/db.json';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

const Hero = () => {
  return (
    <Padding>
      <div className="max-w-screen min-h-screen flex flex-col justify-center md:justify-center max-w-[1000px] mt-10 md:mt-0">
        <div className="flex flex-col justify-start md:justify-center items-center">
          <Transition delay="50" direction="down">
            <div className="w-full mb-8">
              <div className="flex flex-row justify-start items-center mb-4">
                <div className="w-2 h-2 rounded-full bg-green-600 mr-1"></div>
                <p className="text-green-600 text-xs font-semibold">
                  Available for hire
                </p>
              </div>
              <h1 className="text-primary text-6xl font-extrabold mb-5">
                Software Engineer & Saxophonist
              </h1>
              <p className="font-light dark:text-stone-400 text-stone-500 mb-4">
                I&apos;m Peter, a Full Stack Engineer based in Florida. I
                specialize in creating engaging web experiences backed by
                resilient, scalable systems. You can often find me working with
                TypeScript, Python, Go, React, NodeJs, Express, NextJs, and
                Postgres. When I&apos;m away from my desk, you&apos;ll catch me
                working on people and their development.
              </p>

              <div className="flex flex-row">
                <Transition delay="100" direction="up">
                  <a href={data.contact.mailto}>
                    <MdAlternateEmail size={20} className="text-primary mr-4" />
                  </a>
                </Transition>
                <Transition delay="150" direction="up">
                  <Link href={data.contact.linkedin}>
                    <FaLinkedinIn size={20} className="text-primary mr-4" />
                  </Link>
                </Transition>
                <Transition delay="200" direction="up">
                  <Link href={data.contact.github}>
                    <FaGithub size={20} className="text-primary mr-4" />
                  </Link>
                </Transition>
                <Transition delay="250" direction="up">
                  <Link href={data.contact.youtube}>
                    <FaYoutube size={20} className="text-primary mr-1" />
                  </Link>
                </Transition>
              </div>
            </div>
          </Transition>

          <div className="flex flex-row mb-20">
            <Transition delay="100" direction="down">
              <div className="bg-bauhausRed w-[120px] h-[120px] md:w-[258px] md:h-[258px] rounded-3xl flex flex-row justify-center items-center mr-4 -rotate-2">
                <div className="relative w-32 h-32 md:w-64 md:h-64 -right-2 top-2  rounded-3xl overflow-hidden">
                  <Image
                    src="/pic_1.jpeg"
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

            <Transition delay="250" direction="down">
              <div className="bg-bauhausYellow w-[120px] h-[120px] md:w-[258px] md:h-[258px] rounded-3xl flex flex-row justify-center items-center mr-4 -rotate-1">
                <div className="relative w-32 h-32 md:w-64 md:h-64 -right-2 top-2  rounded-3xl overflow-hidden">
                  <Image
                    src="/kota.jpeg"
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

            <Transition delay="400" direction="down">
              <div className="bg-bauhausBlue w-[120px] h-[120px] md:w-[258px] md:h-[258px] rounded-3xl flex flex-row justify-center items-center mr-4 rotate-2">
                <div className="relative w-32 h-32 md:w-64 md:h-64 -right-2 top-2  rounded-3xl overflow-hidden">
                  <Image
                    src="/morocco.jpeg"
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

          <Transition delay="500" direction="up">
            <p className="text-4xl font-semibold text-right text-primary">
              Let&apos;s build something together
            </p>
          </Transition>
        </div>
      </div>
    </Padding>
  );
};

export default Hero;
