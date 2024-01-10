import data from '@/db.json';
import Section from '../Section';
import XPCard from '../XPCard';

const XP = () => {
  return (
    <Section id="xp" classname="bg-stone-300">
      <div className="w-full mb-4">
        <h1 className="text-4xl font-extrabold">Experiance</h1>
      </div>
      {data.professionalExperiance.map((xp, idx) => (
        <XPCard key={idx} experiance={xp} />
      ))}
    </Section>
  );
};
export default XP;
