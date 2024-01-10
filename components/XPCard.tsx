import Tag from './Tag';

import { Experiance } from '@/types/types';

interface XPCardProps {
  experiance: Experiance;
}

const XPCard = ({ experiance }: XPCardProps) => {
  return (
    <div className="p-8  rounded-xl  mb-4 max-w-[800px]">
      <h1 className="text-primary text-2xl font-semibold underline">
        {experiance.role}
      </h1>
      <div className="flex flex-row w-full justify-between mb-4">
        <h2 className="text-sm text-gray-500 font">{experiance.company}</h2>
        <h2 className="text-sm text-gray-500 font">{experiance.date}</h2>
      </div>

      {experiance.responsibilities.map((item, idx) => (
        <p key={idx} className="leading-none mb-3 text-sm text-primary">
          {item}
        </p>
      ))}

      <div className="flex flex-row mt-8 flex-wrap">
        {experiance.skills.map((item, idx) => (
          <Tag key={idx} text={item} classname="border" />
        ))}
      </div>
    </div>
  );
};
export default XPCard;
