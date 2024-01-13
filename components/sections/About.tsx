import data from '@/db.json';
import Image from 'next/image';
import Padding from '../Padding';
import TransitionOnView from '../TransitionOnView';

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  return (
    <Padding
      id="about"
      classname={`${darkMode ? 'bg-stone-500' : 'bg-stone-200'}`}
    >
      <div className="flex flex-col md:grid md:grid-cols-4 w-full max-w-[1000px]">
        {/* section heading */}
        <div className="relative -top-4">
          <h1 className="md:pt-4 text-primary text-xs font-semibold md:sticky top-0 lowercase mb-4 md:mb-0 min-w-fit h-fit">
            About peter
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row md:col-span-3">
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
            <div className="flex flex-col justify-center items-start h-full">
              {/* pic */}
              <div className="relative w-[320px] h-[400px] rounded-xl overflow-hidden">
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
              <p className="text-primary text-xs font-light">
                Barcelona, Spain
              </p>
            </div>
          </TransitionOnView>
        </div>
      </div>
    </Padding>
  );
};

export default About;
