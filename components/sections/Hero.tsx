import Section from '@/components/Section';
import Transition from '@/components/Transition';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="border border-red-300 min-h-screen flex flex-col justify-end">
      <Section>
        {/* main text sm screen*/}
        <div className="w-10/12 md:hidden flex flex-col justify-center items-center  ">
          <Transition delay={'100'}>
            <div className="w-full mb-8">
              <h1 className="text-primary text-7xl font-bold">👋</h1>
              <h1 className="text-primary  text-7xl font-bold">
                I&apos;m Peter
              </h1>
            </div>
          </Transition>

          <Transition delay={'150'}>
            <div className="border border-red-400 w-full flex flex-col justify-center items-center mb-8 max-w-[200px]">
              <Image
                src="/headshot.png"
                alt="Image"
                className="object-contain rounded-3xl"
                height={250}
                width={250}
              />
            </div>
          </Transition>

          <Transition delay={'200'}>
            <div className="w-full">
              <h1 className="text-primary text-4xl font-medium text-center">
                Crafting engaging experiances
              </h1>
              <h1 className="text-primary text-4xl font-medium text-center">
                from sunny Florida
              </h1>
            </div>
          </Transition>
        </div>

        {/* main text md screen*/}
        <div>
          <div className="hidden md:flex flex-row justify-between items-center mb-80">
            <Transition delay="100">
              <div className="w-full mr-20">
                <h1 className="text-primary text-7xl ">👋</h1>
                <h1 className="text-primary text-7xl font-extrabold ">
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

            <Transition delay="250">
              <div className="w-full max-w-[300px] bg-pink-100 p-4 rounded-3xl">
                <Image
                  src="/headshot.png"
                  alt="Image"
                  className="object-contain rounded-3xl min-h-80 min-w-80"
                  height={500}
                  width={500}
                />
              </div>
            </Transition>
          </div>
        </div>
      </Section>
      <div className="relative400 w-full h-[200px] overflow-hidden">
        <img src="/beach-svg.svg" alt="Image" className="object-cover" />
      </div>
    </div>
  );
};

export default Hero;
