import Tag from './Tag';

import { Experiance } from '@/types/types';

interface XPProps {
  experiance: Experiance;
}

const XPCard = ({ experiance }: XPProps) => {
  return (
    <div className="p-8 border border-gray-800 rounded-xl shadow-lg shadow-gray-400 mb-4">
      <h1 className="text-primary text-2xl font-semibold">{experiance.role}</h1>
      <div className="flex flex-row w-full justify-between mb-4">
        <h2 className="text-sm text-gray-500 font-semibold">
          {experiance.company}
        </h2>
        <h2 className="text-sm text-gray-500 font-semibold">
          {experiance.date}
        </h2>
      </div>

      {experiance.responsibilities.map((item, idx) => (
        <p key={idx} className="leading-none mb-2 text-sm text-primary">
          {item}
        </p>
      ))}

      <div className="flex flex-row mt-4 flex-wrap">
        {experiance.skills.map((item, idx) => (
          <Tag key={idx} text={item} />
        ))}
      </div>
    </div>
  );
};
export default XPCard;
