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
      <div className="grid grid-cols-4  justify-start w-full">
        <div className=" min-w-fit">
          <h1 className="text-primary text-xs font-semibold sticky top-0 lowercase">
            Experiance
          </h1>
        </div>

        <div className="col-span-3 p-8 pt-0">
          {data.professionalExperiance.map((xp, idx) => (
            <XPCard key={idx} experiance={xp} />
          ))}
        </div>
      </div>
    </Padding>
  );
};
export default XP;
