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
      <div className="flex flex-col md:grid md:grid-cols-4 justify-start w-full max-w-[1000px]">
        <div className="relative -top-4">
          <h1 className="md:pt-4 mb-4 md:mb-0 text-primary text-xs font-semibold md:sticky top-0 lowercase min-w-fit h-fit">
            Projects
          </h1>
        </div>

        <div className="flex flex-col justify-center items-start col-span-3 max-w-[800px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
