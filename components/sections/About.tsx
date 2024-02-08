import data from '@/db.json';
import Padding from '../Padding';

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  return (
    <Padding id="about" classname={`${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="flex flex-col md:grid md:grid-cols-4 w-full max-w-[1000px] mb-10">
        <div className="relative md:-top-4 ">
          <h1 className="md:pt-4 text-bauhausRed text-5xl font-extrabold md:sticky top-0 lowercase mb-4 md:mb-0 min-w-fit h-fit">
            About peter
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center lg:flex-row md:col-span-3">
          <div className="mr-8 ml-0">
            {data.professionalSummary.map((paragraph, idx) => (
              <div key={idx}>
                <p className="text-primary font-light">{paragraph}</p>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Padding>
  );
};

export default About;
