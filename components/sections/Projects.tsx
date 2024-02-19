import data from '@/content/text.json';
import ProjectCard from '../elements/ProjectCard';
import { TwoPanel } from '../layouts/TwoPanel';

const heading = (
  <h1 className="mb-4 md:mb-0 text-bauhausBlue md:sticky top-0 lowercase min-w-fit h-fit">
    Projects
  </h1>
);

const content = (
  <div className="grid grid-rows-1 gap-3">
    {data.projects.map((item, idx) => (
      <ProjectCard idx={idx} key={idx} project={item} />
    ))}
  </div>
);

const Projects = () => {
  return (
    <div id="projects">
      <TwoPanel heading={heading} content={content} />
    </div>
  );
};

export default Projects;
