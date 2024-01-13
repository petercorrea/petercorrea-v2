import data from '@/db.json';
import Padding from '../Padding';
import XPCard from '../XPCard';

interface XPProps {
  darkMode: boolean;
}

const XP = ({ darkMode }: XPProps) => {
  return (
    <Padding
      id="xp"
      classname={`${darkMode ? 'bg-stone-600' : 'bg-stone-300'}`}
    >
      {/* flex parent */}
      <div className="flex flex-col md:grid md:grid-cols-4 md:justify-start w-full max-w-[1000px]">
        <div className="relative -top-4">
          <h1 className="md:pt-4 mb-4 md:mb-0 min-w-fit text-primary text-xs font-semibold md:sticky top-0 lowercase h-fit">
            Experiance
          </h1>
        </div>

        <div className="col-span-3 pt-0">
          {data.professionalExperiance.map((xp, idx) => (
            <XPCard key={idx} experiance={xp} />
          ))}
        </div>
      </div>
    </Padding>
  );
};
export default XP;
