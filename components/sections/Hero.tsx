import Padding from '@/components/Padding';
import Transition from '@/components/Transition';
import Image from 'next/image';

const Hero = () => {
  return (
    <Padding>
      <div className="min-h-screen flex flex-col justify-center md:justify-center">
        <div className="flex flex-col md:flex-row justify-start md:justify-center items-center">
          <Transition delay="100" direction="down">
            <div className="w-full md:mb-0">
              <div className="flex flex-row justify-start items-center mb-4">
                <div className="w-2 h-2 rounded-full bg-green-600 mr-1"></div>
                <p className="text-green-600 text-xs font-semibold">
                  Avaliable for hire
                </p>
              </div>
              <h1 className="text-primary text-8xl font-extrabold mb-2">
                I&apos;m Peter
              </h1>
              <h1 className="text-stone-400 text-2xl font-semibold dark:text-stone-300 ">
                A Full Stack engineer
              </h1>
              <h1 className="text-stone-400 text-2xl font-semibold dark:text-stone-300">
                based in Florida
              </h1>
            </div>
          </Transition>

          <Transition delay="250" direction="down">
            <div className="bg-bauhausYellow w-[258px] h-[258px] rounded-3xl flex flex-row justify-center items-center m-10">
              <div className="relative -right-4 top-4 rounded-3xl w-64 h-64 md:w-56 md:h-56 overflow-hidden">
                <Image
                  src="/headshot.png"
                  alt="Image"
                  height={500}
                  width={500}
                  priority
                />
              </div>
            </div>
          </Transition>

          <Transition delay="350" direction="down">
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
