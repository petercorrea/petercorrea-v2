import Section from '@/components/Section';
import Transition from '@/components/Transition';
import Image from 'next/image';

const Hero = () => {
  return (
    <Section>
      {/* main text sm screen*/}
      <div className="w-10/12 md:hidden flex flex-col justify-center items-center min-h-screen">
        <Transition delay={'100'}>
          <div className="w-full mb-8">
            <h1 className="text-primary text-7xl font-bold">👋</h1>
            <h1 className="text-primary  text-7xl font-bold">I'm Peter</h1>
          </div>
        </Transition>

        <Transition delay={'150'}>
          <div className="w-full flex flex-col justify-center items-center mb-8">
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
      <div className="hidden md:flex flex-row justify-center items-center min-h-screen">
        <Transition delay="100">
          <div className="w-full">
            <h1 className="text-primary text-7xl ">👋</h1>
            <h1 className="text-primary text-7xl font-extrabold ">I'm Peter</h1>
            <h1 className="text-primary text-2xl uppercase">
              A Full-Stack engineer from sunny Florida
            </h1>
          </div>
        </Transition>

        <Transition delay="250">
          <div className="w-full">
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
    </Section>
  );
};

export default Hero;
