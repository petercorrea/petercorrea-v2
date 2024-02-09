import data from '@/db.json';
import Padding from '../Padding';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  return (
    <Padding id="projects">
      <div className="flex flex-col md:grid md:grid-cols-4 justify-start w-full max-w-[1000px]">
        <div className="relative md:-top-4">
          <h1 className="md:pt-4 mb-4 md:mb-0 text-bauhausBlue text-5xl font-extrabold md:sticky top-0 lowercase min-w-fit h-fit">
            Projects
          </h1>
        </div>

        <div className="flex flex-col justify-center items-start col-span-3 max-w-[800px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.projects.map((item, idx) => (
              <ProjectCard idx={idx} key={idx} project={item} />
            ))}
          </div>
        </div>
      </div>
    </Padding>
  );
};

export default Projects;
