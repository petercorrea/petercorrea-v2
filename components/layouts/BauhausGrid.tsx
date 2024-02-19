import data from '@/content/text.json';
import { resume, routesMap } from '@/libs/constants';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
import { TbWorldDownload } from 'react-icons/tb';
import Transition from '../effects/Transition';
import Padding from './Padding';

export const BauhausGrid = () => {
  return (
    <Transition delay="100" direction="up">
      <Padding>
        <div className="min-h-[800px] border-[2px] border-black w-full grid grid-cols-8 grid-rows-8">
          <div className="p-4 flex flex-col items-start justify-start border-black border-[2px] col-span-2 row-span-6 bg-bauhausYellow">
            <h1>Peter Correa</h1>
            <p className="text-black font-light mb-8">
              I&apos;m Peter, a Full Stack Engineer based in Florida. I
              specialize in creating engaging web experiences backed by
              resilient, scalable systems. You can often find me working with
              TypeScript, Python, Go, React, NodeJs, Express, NextJs, and
              Postgres. When I&apos;m away from my desk, you&apos;ll catch me
              working on people and their development.
            </p>

            <div className="flex flex-row">
              <a
                href={data.contact.mailto}
                className="flex flex-row justify-center text-primary rounded-full hover:underline hover:underline-offset-1"
              >
                <MdAlternateEmail
                  size={20}
                  className="duration-0 text-primary hover:text-white mr-4"
                />
              </a>
              <Link href={data.contact.linkedin}>
                <FaLinkedinIn
                  size={20}
                  className="duration-0 text-primary hover:text-white mr-4"
                />
              </Link>
              <Link href={data.contact.github}>
                <FaGithub
                  size={20}
                  className="duration-0 text-primary hover:text-white mr-4"
                />
              </Link>
              <Link href={data.contact.youtube}>
                <FaYoutube
                  size={20}
                  className="duration-0 text-primary hover:text-white mr-1"
                />
              </Link>
            </div>
          </div>
          <div className="p-4 flex flex-col items-start justify-start border-black border-[2px]  col-span-3 row-span-2 bg-bauhausRed">
            <h3 className="text-white">From Saxophonist to Engineer</h3>
            <p className="text-white">
              Read more about my journey from music to tech{' '}
              <Link
                href="https://x-team.com/blog/interview-peter-correa/"
                className="underline text-white"
              >
                here.
              </Link>
            </p>
          </div>
          <div className="p-4 flex flex-col items-start justify-start border-black border-[2px] col-span-3 row-span-2 bg-bauhausBlue">
            <h3 className="text-white">Posts</h3>

            <div className="h-full w-full flex flex-col justify-center items-center">
              <Link
                href={routesMap.posts}
                className="hover:border hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-b-2 "
              >
                <FiExternalLink color="white" size={60} />
              </Link>
            </div>
          </div>
          <div className="p-4 flex flex-col items-start justify-start border-black border-[2px] col-span-2 row-span-4">
            <h3>About Me</h3>
            <p>
              I&apos;ve worked on a range of notable projects, from in-house
              billing services and vendor marketplaces to personalization
              platforms. My work spans mobile apps for a few hundred users to
              web apps that reach several million across the globe. I&apos;ve
              built software for a variety of organizations including a waste
              management start-up, and at an agency where I worked with major
              clients like PayPal and Coinbase.
            </p>
          </div>
          <div className="p-4 flex flex-col items-start justify-start border-black border-[2px] row-span-2 bg-black">
            {/* <h3>Box 5</h3> */}
          </div>
          <div className="p-4 flex flex-col items-start justify-start border-black border-[2px] col-span-3 row-span-2">
            <h3>Tech Stack</h3>
            <p>
              TypeScript, JavaScript, Python, Go, React, Next.js, Express,
              Nest.js, Postgres
            </p>
          </div>
          <div className="p-4 flex flex-col items-start justify-start border-black border-[2px] col-span-2 row-span-2 bg-bauhausRed">
            <div className="flex flex-col justify-start items-start w-full h-full">
              <h3 className="text-white">Resume</h3>

              <div className="h-full w-full flex flex-col justify-center items-center">
                <Link
                  href={resume.href}
                  className="hover:border hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-b-2 "
                >
                  <TbWorldDownload color="white" size={60} />
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col items-start justify-start border-black border-[2px] row-span-4 col-span-2 bg-bauhausYellow">
            <h3>Responsibilities</h3>
            <p>
              My day-to-day responsibilities normally include deploying
              full-stack applications, migrating databases, improving developer
              experiences, writing test cases, and integrating APIs. When
              I&apos;m not coding, I&apos;m collaborating with designers and
              stakeholders, presenting to staff, conducting code reviews,
              interviewing candidates, mentoring peers, and onboarding new team
              members.
            </p>
          </div>
          <div className="p-4 flex flex-col items-start justify-start border-black border-[2px] col-span-6 row-span-2 bg-bauhausBlue">
            <h3 className="text-white">Away From Keyboard</h3>
            <p className="text-white">
              Beyond general software engineering, I occasionally explore areas
              like cryptography, game theory, embedded systems, machine learning
              and playing the saxophone.
            </p>
          </div>
        </div>
      </Padding>
    </Transition>
  );
};
