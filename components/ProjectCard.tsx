import Image from 'next/image';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Tag from './Tag';

import { Project } from '@/types/types';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
}

const ProjectCard = ({ project, darkMode }: ProjectCardProps) => {
  return (
    <div
      className={`${
        darkMode ? '' : 'shadow-lg'
      } p-4 rounded-xl mb-16 mr-4 flex flex-col flex-start hover:shadow-lg hover:-translate-y-2 transition ease-in`}
    >
      {/* title */}
      <Link href={project.production_url || project.youtube_url}>
        <h1 className="text-primary text-3xl mb-2 w-fit text-wrap underline">
          {project.title}
        </h1>
      </Link>

      {/* description */}
      <p className="text-primary text-sm mb-10">{project.description}</p>

      {/* image */}
      <Link href={project.production_url || project.youtube_url}>
        <div className="relative w-[300px] h-[200px] rounded-xl overflow-hidden mb-4">
          <Image
            src={project.image}
            alt="Image"
            fill
            sizes="500px"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </Link>

      <div className="flex flex-row items-start justify-between">
        {/* tags */}
        <div className="flex flex-row flex-wrap">
          <Tag text={project.type} />

          {project.tags.map((item, idx) => (
            <Tag key={idx} text={item} />
          ))}
        </div>

        {/* icons */}
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

      {/* links */}
      <div className="flex flex-row justify-start items-center">
        {project.github_url ? (
          <div className="flex flex-row mr-4">
            <Link
              href={project.github_url}
              className="text-sm text-primary mr-1 hover:underline"
            >
              github
            </Link>
            <FiExternalLink className="text-primary" />
          </div>
        ) : (
          ''
        )}

        {project.youtube_url ? (
          <div className="flex flex-row items-center mr-4">
            <Link
              href={project.youtube_url}
              className="text-sm text-primary mr-1 hover:underline"
            >
              youtube
            </Link>
            <FiExternalLink className="text-primary" size={15} />
          </div>
        ) : (
          ''
        )}

        {project.production_url ? (
          <div className="flex flex-row mr-4 items-center">
            <Link
              href={project.production_url}
              className="text-sm text-primary mr-1 hover:underline"
            >
              demo
            </Link>
            <FiExternalLink className="text-primary" />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
