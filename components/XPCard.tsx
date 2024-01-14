import Tag from './Tag';

import { Experiance } from '@/types/types';

interface XPCardProps {
  experiance: Experiance;
}

const XPCard = ({ experiance }: XPCardProps) => {
  return (
    <div className="rounded-xl mb-20 max-w-[800px]">
      <h1 className="text-primary text-xl font-bold">{experiance.role}</h1>
      <div className="flex flex-row w-full justify-between mb-4">
        <h2 className="text-xs text-primary font">{experiance.company}</h2>
        <h2 className="text-xs text-primary font">{experiance.date}</h2>
      </div>

      {experiance.responsibilities.map((item, idx) => (
        <p key={idx} className="leading-5 mb-3 text-primary font-light text-sm">
          {item}
        </p>
      ))}

      <div className="flex flex-row mt-8 flex-wrap">
        {experiance.skills.map((item, idx) => (
          <Tag key={idx} text={item} classname="bg-bauhausYellow" />
        ))}
      </div>
    </div>
  );
};
export default XPCard;
