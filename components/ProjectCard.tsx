import Image from 'next/image';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import Tag from './Tag';

import { Project } from '@/types/types';
import Link from 'next/link';
import Hover from './effects/Hover';

interface ProjectCardProps {
  project: Project;
  idx: number;
}

const ProjectCard = ({ project, idx }: ProjectCardProps) => {
  return (
    <Hover>
      <div>
        <Link
          href={
            project.production_url || project.youtube_url || project.general_url
          }
        >
          <p className="text-primary">
            {0}
            {idx}
          </p>
          <h1 className="text-primary text-3xl font-semibold mb-2 w-fit text-wrap underline">
            {project.title}
          </h1>
        </Link>

        <p className="text-primary dark:text-stone-400 text-sm mb-10 font-light">
          {project.description}
        </p>
      </div>

      <div>
        <Link
          href={
            project.production_url || project.youtube_url || project.general_url
          }
        >
          <div className="min-h-[200px] max-w-[500px] max-h-[250px] relative rounded-xl overflow-hidden mb-4 flex flex-col justify-center bg-black">
            <Image src={project.image} alt="Image" width={500} height={300} />
          </div>
        </Link>

        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-row flex-wrap">
            {project.tags.map((item, idx) => (
              <Tag
                key={idx}
                text={item}
                classname="text-white bg-bauhausBlue"
              />
            ))}
          </div>

          {project.youtube_url ? (
            <Link href={project.youtube_url} className="">
              <FaYoutube size={35} color="red" />
            </Link>
          ) : (
            ''
          )}

          {project.github_url ? (
            <Link href={project.github_url} className="">
              <FaGithub size={35} color="#6cc644" />
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </Hover>
  );
};
export default ProjectCard;
