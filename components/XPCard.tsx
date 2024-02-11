import Tag from './Tag';

import { Experience } from '@/types/types';

interface XPCardProps {
  experience: Experience;
}

const XPCard = ({ experience: experience }: XPCardProps) => {
  return (
    <div className="rounded-xl mb-10 max-w-[800px]">
      <h1 className="text-primary text-xl font-bold underline">
        {experience.role}
      </h1>
      <div className="flex flex-row w-full items-end mb-2">
        <h2 className="text-primary text-sm font-light mr-2">{`${experience.company}`}</h2>
        <h2 className="text-primary text-sm font-light mr-2">{`${experience.date}`}</h2>
      </div>

      {experience.responsibilities.map((item, idx) => (
        <p
          key={idx}
          className="text-stone-500 leading-5 mb-3 dark:text-stone-400 text-sm font-light"
        >
          {item}
        </p>
      ))}

      <div className="flex flex-row flex-wrap">
        {experience.skills.map((item, idx) => (
          <Tag
            key={idx}
            text={item}
            classname="bg-bauhausYellow"
            textColor="text-stone-600"
          />
        ))}
      </div>
    </div>
  );
};
export default XPCard;
