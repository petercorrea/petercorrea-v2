import data from '@/content/text.json';
import ProjectCard from '../elements/ProjectCard';
import TwoCol from '../layouts/TwoCol';

const heading = (
  <h1 className="mb-4 md:mb-0 text-bauhausBlue md:sticky top-0 lowercase min-w-fit h-fit">
    Projects
  </h1>
);

const content = (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {data.projects.map((item, idx) => (
      <ProjectCard idx={idx} key={idx} project={item} />
    ))}
  </div>
);

const Projects = () => {
  return (
    <div id="projects">
      <TwoCol heading={heading} content={content} />
    </div>
  );
};

export default Projects;
