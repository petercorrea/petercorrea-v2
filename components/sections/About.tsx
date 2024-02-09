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
            {/* {data.professionalSummary.map((paragraph, idx) => (
              <div key={idx}>
                <p className="dark:text-stone-400 text-stone-500 font-light">
                  {paragraph}
                </p>
                <br />
              </div>
            ))} */}
            <p className="dark:text-stone-400 text-stone-500 font-light inline">
              I've worked on a range of notable projects, from in-house billing
              services and vendor marketplaces to personalization platforms. My
              work spans {''}
            </p>
            <p className="text-bauhausRed inline underline decoration-wavy font-light ">
              mobile apps {''}
            </p>
            <p className="inline font-light dark:text-stone-400 text-stone-500">
              for a few hundred users to
            </p>{' '}
            <p className="text-bauhausBlue underline inline decoration-dashed font-light ">
              web apps
            </p>{' '}
            <p className="inline font-light dark:text-stone-400 text-stone-500">
              {' '}
              that reach several million across the globe. I've built software
              for a variety of organizations including a waste management
              start-up, and at an agency where I worked with major clients like{' '}
              {''}
            </p>
            <p className="inline underline font-light text-bauhausYellow">
              PayPal {''}
            </p>
            <p className="inline font-light dark:text-stone-400 text-stone-500">
              and {''}
            </p>
            <p className="inline underline font-light decoration-wavy text-bauhausRed">
              Coinbase.
            </p>
            <br /> <br />
            <p className="font-light inline dark:text-stone-400 text-stone-500">
              My day-to-day responsibilities normally include deploying
              full-stack applications, migrating databases,{' '}
            </p>{' '}
            <p className="underline font-light inline text-bauhausBlue decoration-wavy">
              improving
            </p>
            <p className=" font-light inline dark:text-stone-400 text-stone-500">
              {' '}
              developer experiences, writing test cases, and integrating APIs.
              When I'm not coding, I'm{' '}
            </p>{' '}
            <p className="underline font-light inline decoration-double text-bauhausYellow">
              collaborating
            </p>
            <p className="font-light inline dark:text-stone-400 text-stone-500">
              {' '}
              with designers and stakeholders, presenting to staff, conducting
              code reviews, interviewing candidates,{' '}
            </p>{' '}
            <p className="underline font-light inline text-bauhausRed">
              mentoring
            </p>{' '}
            <p className="font-light inline dark:text-stone-400 text-stone-500">
              {' '}
              peers, and onboarding new team members.
            </p>
            <br /> <br />
            <p className="dark:text-stone-400 text-stone-500 font-light">
              Beyond general software engineering, I occasionally explore areas
              like cryptography, game theory, embedded systems, machine learning
              and playing the saxophone.
            </p>
          </div>
        </div>
      </div>
    </Padding>
  );
};

export default About;
