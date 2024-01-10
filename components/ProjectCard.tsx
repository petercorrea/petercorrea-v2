import Image from 'next/image';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import Tag from './Tag';

import { Project } from '@/types/types';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="w-[400px] p-4  rounded-xl shadow-sm shadow-gray-400 mb-4 mr-4 flex flex-col justify-between">
      <div>
        <div className="flex flex-row justify-between">
          <h1 className="text-primary text-2xl font-semibold mb-2 w-fit text-wrap">
            {project.title}
          </h1>
          {project.type === 'video' ? <FaYoutube size={35} color="red" /> : ''}
          {project.type === 'app' ? <FaGithub size={35} color="#6cc644" /> : ''}
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row w-full justify-between mb-4">
            <div className="relative w-[150px] h-[80px]">
              <Image
                src={project.image}
                alt="Image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-start items-end">
              {project.github_url ? (
                <div className="flex flex-row justify-center items-center mb-1">
                  <Link
                    href={project.github_url}
                    className="text-sm text-gray-500 font-semibold mr-1"
                  >
                    GitHub
                  </Link>
                  <FiExternalLink />
                </div>
              ) : (
                ''
              )}
              {project.public_url ? (
                <div className="flex flex-row justify-center items-center">
                  <Link
                    href={project.public_url}
                    className="text-sm text-gray-500 font-semibold mr-1"
                  >
                    URL
                  </Link>
                  <FiExternalLink />
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>

        <p className="text-primary">{project.description}</p>
      </div>
      <div className="flex flex-row mt-4 flex-wrap">
        <Tag
          text={project.type}
          classname="bg-red-300 shadow-red-200 text-red-800"
        />

        {project.tags.map((item, idx) => (
          <Tag
            key={idx}
            text={item}
            classname="bg-blue-300 shadow-blue-200 text-blue-800"
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectCard;
