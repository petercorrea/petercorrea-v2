import Padding from '@/components/Padding';
import Transition from '@/components/Transition';
import Image from 'next/image';

const Hero = () => {
  return (
    <Padding>
      <div className="min-h-screen flex flex-col justify-center md:justify-center">
        <div className=" flex flex-col md:flex-row justify-start md:justify-center items-center">
          <Transition delay="100" direction="down">
            <div className="w-full mr-20 mb-10 md:mb-0">
              <h1 className="text-primary text-7xl ">👋</h1>
              <h1 className="text-primary text-7xl font-extrabold mb-5">
                i&apos;m peter
              </h1>
              <h1 className="text-primary text-xl font-semibold ">
                a full stack engineer
              </h1>
              <h1 className="text-primary text-xl font-semibold ">
                from sunny florida
              </h1>
            </div>
          </Transition>

          <Transition delay="250" direction="down">
            <div className="relative p-4 rounded-3xl w-64 h-64 md:w-56 md:h-56">
              <Image
                src="/headshot.png"
                alt="Image"
                className="rounded-3xl"
                height={500}
                width={500}
                priority
              />
            </div>
          </Transition>
        </div>
      </div>
    </Padding>
  );
};

export default Hero;
