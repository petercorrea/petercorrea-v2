import Tag from './Tag';

import { Experience } from '@/types/types';

interface XPCardProps {
  experience: Experience;
}

const XPCard = ({ experience: experience }: XPCardProps) => {
  return (
    <div className="rounded-xl mb-20 max-w-[800px]">
      <h1 className="text-primary text-xl font-bold">{experience.role}</h1>
      <div className="flex flex-row w-full justify-between mb-4">
        <h2 className="text-xs text-primary font">{experience.company}</h2>
        <h2 className="text-xs text-primary font">{experience.date}</h2>
      </div>

      {experience.responsibilities.map((item, idx) => (
        <p
          key={idx}
          className="leading-5 mb-3 dark:text-stone-400 text-stone-500 font-light text-sm"
        >
          {item}
        </p>
      ))}

      <div className="flex flex-row mt-8 flex-wrap">
        {experience.skills.map((item, idx) => (
          <Tag
            key={idx}
            text={item}
            classname="bg-bauhausYellow"
            textColor="text-black"
          />
        ))}
      </div>
    </div>
  );
};
export default XPCard;
