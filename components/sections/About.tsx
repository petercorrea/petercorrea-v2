import data from '@/db.json';
import Image from 'next/image';
import Padding from '../Padding';
import TransitionOnView from '../TransitionOnView';

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  return (
    <Padding id="about" classname={`${darkMode ? 'bg-stone-900' : 'bg-white'}`}>
      <div className="flex flex-col md:grid md:grid-cols-4 w-full max-w-[1000px] mb-10">
        {/* section heading */}
        <div className="relative -top-4">
          <h1 className="md:pt-4 text-bauhausRed text-5xl font-extrabold md:sticky top-0 lowercase mb-4 md:mb-0 min-w-fit h-fit">
            About peter
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center lg:flex-row md:col-span-3">
          {/* Summary */}
          <div className="mr-8 ml-0">
            {data.professionalSummary.map((paragraph, idx) => (
              <div key={idx}>
                <p className="text-primary font-light">{paragraph}</p>
                <br />
              </div>
            ))}
          </div>

          <TransitionOnView delay="100">
            <div className="bg-bauhausRed w-[258px] h-[258px] rounded-3xl flex flex-row justify-center items-center m-10">
              <div className="flex flex-col justify-center items-start h-full">
                {/* pic */}
                <div className="relative w-64 h-64 -right-4 top-4  rounded-3xl overflow-hidden">
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
                {/* caption */}
              </div>
            </div>
          </TransitionOnView>
        </div>
      </div>
    </Padding>
  );
};

export default About;
