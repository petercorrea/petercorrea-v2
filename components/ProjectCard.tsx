import Image from 'next/image';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Tag from './Tag';

import { Project } from '@/types/types';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  darkMode: boolean;
  idx: number;
}

const ProjectCard = ({ project, darkMode, idx }: ProjectCardProps) => {
  const bgColors = [
    'bg-red-200',
    'bg-blue-200',
    'bg-yellow-200',
    'bg-orange-200',
    'bg-green-200',
  ];

  return (
    <div
      className={`${
        darkMode ? 'shadow-lightShadow' : 'shadow-lg'
      }  rounded-xl mb-16 mr-4 flex flex-col flex-start justify-between hover:shadow-darkShadow hover:-translate-y-2 transition ease-in max-w-[500px] p-4`}
    >
      <div>
        {/* title */}
        <Link href={project.production_url || project.youtube_url}>
          <p>
            {0}
            {idx}
          </p>
          <h1 className="text-primary text-3xl font-semibold mb-2 w-fit text-wrap underline">
            {project.title}
          </h1>
        </Link>

        {/* description */}
        <p className="text-primary text-sm mb-10 font-light">
          {project.description}
        </p>
      </div>

      <div>
        {/* image */}
        <Link href={project.production_url || project.youtube_url}>
          <div className="min-h-[200px] max-w-[500px] max-h-[250px] relative rounded-xl overflow-hidden mb-4 flex flex-col justify-center bg-black">
            <Image
              src={project.image}
              alt="Image"
              layout="responsive"
              width={500}
              height={300}
            />
          </div>
        </Link>

        {/* tags */}
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
            <div className="flex flex-row items-center mr-4">
              <Link
                href={project.github_url}
                className="text-sm text-primary mr-1 hover:underline font-light"
              >
                github
              </Link>
              <FiExternalLink className="text-primary" size={15} />
            </div>
          ) : (
            ''
          )}

          {project.youtube_url ? (
            <div className="flex flex-row items-center mr-4">
              <Link
                href={project.youtube_url}
                className="text-sm text-primary mr-1 hover:underline font-light"
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
                className="text-sm text-primary mr-1 hover:underline font-light"
              >
                demo
              </Link>
              <FiExternalLink className="text-primary" size={15} />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
