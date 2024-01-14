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
              <div className="flex flex-row justify-start items-center mb-4">
                <div className="w-2 h-2 rounded-full bg-green-600 mr-1"></div>
                <p className="text-green-600 text-xs font-semibold">
                  Avaliable for hire
                </p>
              </div>
              <h1 className="text-primary text-8xl font-extrabold mb-2">
                I&apos;m Peter
              </h1>
              <h1 className="text-stone-400 text-2xl font-semibold ">
                A Full Stack engineer
              </h1>
              {/* <h1 className="text-primary text-xl font-semibold ">
                from sunny florida
              </h1> */}
            </div>
          </Transition>

          <Transition delay="250" direction="down">
            <div className="relative rounded-md w-64 h-64 md:w-56 md:h-56 overflow-hidden">
              <Image
                src="/headshot.png"
                alt="Image"
                height={500}
                width={500}
                priority
              />
            </div>
          </Transition>

          <p className="border border-red-500 text-4xl font-semibold text-right">
            Let&apos;s build something together
          </p>

          <div className="tech-imgs relative flex flex-row justify-start items-center w-full h-14 border border-red-500 ">
            <div className="relative w-full h-full">
              <Image
                src="/tech/js.webp"
                fill
                // width={50}
                // height={50}
                alt="Image"
                style={{ objectFit: 'contain' }}
              />
            </div>

            <div className="relative w-full h-full">
              <Image
                src="/tech/python.png"
                fill
                // width={50}
                // height={50}
                alt="Image"
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>

            <div className="relative w-full h-full">
              <Image
                src="/tech/html.png"
                fill
                // width={50}
                // height={50}
                alt="Image"
                style={{ objectFit: 'contain' }}
              />
            </div>

            <div className="relative w-full h-full">
              <Image
                src="/tech/css.svg"
                fill
                // width={50}
                // height={50}
                alt="Image"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </Padding>
  );
};

export default Hero;
