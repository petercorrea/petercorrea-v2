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
      <div className="max-w-[1000px]">
        {/* flex parent */}
        <div className="grid grid-cols-4 w-full">
          <div className=" min-w-fit">
            <h1 className="text-primary text-xs font-semibold sticky top-0 lowercase">
              About peter
            </h1>
          </div>

          <div className="col-span-3">
            <div className="flex flex-row">
              <div className="mr-8 ml-0 max-w-[400px]">
                {data.professionalSummary.map((paragraph, idx) => (
                  <div key={idx}>
                    <p className="text-primary">{paragraph}</p>
                    <br />
                  </div>
                ))}
              </div>

              <TransitionOnView delay="100">
                <div className="flex flex-col justify-center items-start h-full">
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
                  <p className="text-primary text-xs font-light">
                    Barcelona, Spain
                  </p>
                </div>
              </TransitionOnView>
            </div>
          </div>
        </div>
      </div>
    </Padding>
  );
};

export default About;
