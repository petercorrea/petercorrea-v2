import data from '@/db.json';
import Padding from '../Padding';
import ProjectCard from '../ProjectCard';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects = ({ darkMode }: ProjectsProps) => {
  return (
    <Padding
      id="projects"
      classname={`${darkMode ? 'bg-stone-700' : 'bg-stone-400'}`}
    >
      <div className="grid grid-cols-4  justify-start w-full">
        <div className=" min-w-fit">
          <h1 className="text-primary text-xs font-semibold sticky top-0 lowercase">
            Projects
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center col-span-3">
          <div className="grid md:grid-cols-2 gap-3">
            {data.projects.map((item, idx) => (
              <ProjectCard key={idx} project={item} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </div>
    </Padding>
  );
};

export default Projects;
