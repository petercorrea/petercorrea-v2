import TwoCol from '../layouts/TwoCol';

const heading = (
  <h1 className="text-bauhausRed md:sticky top-0 lowercase mb-4 md:mb-0 min-w-fit h-fit">
    about peter
  </h1>
);

const content = (
  <div className="">
    <span>
      I&apos;ve worked on a range of notable projects, from in-house billing
      services and vendor marketplaces to personalization platforms. My work
      spans {''}
      <span className="bauhausRed wavy">mobile apps</span>
      {''} for a few hundred users to{' '}
      <span className="bauhausBlue dashed">web apps</span> that reach several
      million across the globe. I&apos;ve built software for a variety of
      organizations including a waste management start-up, and at an agency
      where I worked with major clients like {''}
      <span className="bauhausYellow underline">PayPal</span> {''}
      and {''}
      <span className="bauhausRed underline">Coinbase.</span>
      <br /> <br />
      My day-to-day responsibilities normally include deploying full-stack
      applications, migrating databases,{' '}
      <span className="bauhausBlue underline">improving</span> developer
      experiences, writing test cases, and integrating APIs. When I&apos;m not
      coding, I&apos;m{' '}
      <span className="bauhausYellow dbl-underline">collaborating</span> with
      designers and stakeholders, presenting to staff, conducting code reviews,
      interviewing candidates,{' '}
      <span className="bauhausRed dashed">mentoring</span> peers, and onboarding
      new team members.
      <br /> <br />
      Beyond general software engineering, I occasionally explore areas like
      cryptography, game theory, embedded systems, machine learning and playing
      the saxophone.
    </span>
  </div>
);

const About = () => {
  return (
    <div id="about">
      <TwoCol heading={heading} content={content} />
    </div>
  );
};

export default About;
