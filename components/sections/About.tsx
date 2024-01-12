import data from '@/db.json';
import Padding from '../Padding';

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
        <div className="grid grid-cols-4 justify-start w-full">
          <div className=" min-w-fit">
            <h1 className="text-primary text-xs font-semibold sticky top-0 lowercase">
              About Me
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center col-span-3 p-8 pt-0 max-w-[800px]">
            {data.professionalSummary.map((paragraph, idx) => (
              <div key={idx}>
                <p className="text-primary">{paragraph}</p>
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
