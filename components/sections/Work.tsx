import data from '@/content/text.json';
import XPCard from '../elements/XPCard';
import { TwoPanel } from '../layouts/TwoPanel';

const heading = (
  <div className="flex flex-col justify-start items-start h-full">
    <h1 className="text-bauhausYellow">work</h1>
  </div>
);

const content = (
  <div className="h-full flex flex-col justify-between">
    {data.professionalExperience.map((xp, idx) => (
      <XPCard key={idx} experience={xp} />
    ))}
  </div>
);

const Work = () => {
  return (
    <div id="xp">
      <TwoPanel heading={heading} content={content} />
    </div>
  );
};
export default Work;
