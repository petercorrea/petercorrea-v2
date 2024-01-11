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
      {/* flex parent */}
      <div className="grid grid-cols-4 justify-start w-full">
        <div className=" min-w-fit">
          <h1 className="text-primary text-xs font-semibold sticky top-0 lowercase">
            About Me
          </h1>
        </div>

        <div className=" flex flex-col justify-center items-center col-span-3 p-8 pt-0 ">
          <p className="text-primary">
            A bit about me, my career began in retail management and operations.
            Eventually, coding piqued my interest and led me to join a software
            engineering bootcamp. Soon after, I was working in the field as a
            Full Stack engineer and I&apos;m now pursuing an M.S. in Electrical
            Engineering.{' '}
          </p>

          <br />

          <p className="text-primary">
            My day-to-day responsibilities can vary widely. They include
            deploying full-stack applications, migrating databases, improving
            developer experiences, writing test cases, and integrating APIs.
            When I&apos;m not coding, I&apos;m collaborating with designers and
            stakeholders, presenting to staff, conducting code reviews,
            interviewing candidates, mentoring peers, and onboarding new team
            members. I&apos;ve worked on a range of notable projects, from
            in-house billing services and vendor marketplaces to personalization
            platforms. My work spans mobile apps for a few hundred users to web
            apps that reach several million across the globe.
          </p>

          <br />

          <p className="text-primary">
            Beyond general software engineering, I occasionally explore areas
            like cryptography, game theory, embedded systems, machine learning
            and playing the saxophone.{' '}
          </p>
        </div>
      </div>
    </Padding>
  );
};

export default About;
