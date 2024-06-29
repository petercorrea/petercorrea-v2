import Tag from './Tag';

import { Experience } from '@/types/types';

interface XPCardProps {
  experience: Experience;
}

const XPCard = ({ experience: experience }: XPCardProps) => {
  return (
    <div className="rounded-xl mb-10 max-w-[800px] border-stone-100 dark:border-stone-800 border border-solid p-4">
      <h3 className="text-primary underline">{experience.role}</h3>
      <div className="flex flex-row w-full items-end mb-2">
        <h5 className="text-primary  mr-2">{`${experience.company}`}</h5>
        <h5 className="text-primary  mr-2">{`${experience.date}`}</h5>
      </div>

      {experience.responsibilities.map((item, idx) => (
        <p
          key={idx}
          className="text-sm text-stone-600 mb-3 dark:text-stone-400 "
        >
          {item}
        </p>
      ))}

      <div className="flex flex-row flex-wrap">
        {experience.skills.map((item, idx) => (
          <Tag key={idx} text={item} />
        ))}
      </div>
    </div>
  );
};
export default XPCard;
