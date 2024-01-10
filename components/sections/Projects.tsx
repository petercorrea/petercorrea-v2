import data from '@/db.json';
import ProjectCard from '../ProjectCard';
import Section from '../Section';

const Projects = () => {
  return (
    <Section id="projects" classname="bg-stone-400">
      <div className="w-full mb-4">
        <h1 className="text-4xl font-extrabold">Projects</h1>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-2  ">
          {data.projects.map((item, idx) => (
            <ProjectCard key={idx} project={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
