import data from '@/db/content.json';
import XPCard from '../XPCard';
import Padding from '../layouts/Padding';
import TwoCol from '../layouts/TwoCol';

const heading = (
  <>
    <h1 className="mb-4 md:mb-0 min-w-fit text-bauhausYellow text-5xl font-extrabold md:sticky top-0 lowercase h-fit">
      work
    </h1>
  </>
);

const content = (
  <>
    {data.professionalExperience.map((xp, idx) => (
      <XPCard key={idx} experience={xp} />
    ))}
  </>
);

const XP = () => {
  return (
    <Padding id="xp">
      <TwoCol heading={heading} content={content} />
    </Padding>
  );
};
export default XP;
