import Section from '../Section';
import TransitionOnView from '../TransitionOnView';

const About = () => {
  return (
    <Section id="about" classname="bg-stone-200">
      <div className="w-full mb-4">
        <h1 className="text-4xl font-extrabold">About Me</h1>
      </div>
      <div className="w-[400px] h-screen flex flex-col justify-center items-center">
        <TransitionOnView>
          <p className="text-primary">
            A bit about me, my career began in retail management and operations.
            However, coding eventually piqued my interest and led me to join a
            software engineering bootcamp. Soon after, I was working in the
            field and I&apos;m now pursuing an M.S. in Electrical Engineering.{' '}
          </p>
        </TransitionOnView>
        <br />

        <TransitionOnView delay="150">
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
        </TransitionOnView>
        <br />

        <TransitionOnView delay="300">
          <p className="text-primary">
            Beyond general software engineering, I occasionally explore areas
            like cryptography, game theory, embedded systems, machine learning
            and playing the saxophone.{' '}
          </p>
        </TransitionOnView>
      </div>
    </Section>
  );
};

export default About;
