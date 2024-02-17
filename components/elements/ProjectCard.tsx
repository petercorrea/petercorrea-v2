import { Project } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Hover from '../effects/Hover';

interface ProjectCardProps {
  project: Project;
  idx: number;
}

const ProjectCard = ({ project, idx }: ProjectCardProps) => {
  return (
    <Hover>
      <div className="flex flex-col h-full justify-between">
        <div>
          {/* text */}
          <div>
            <Link
              href={
                project.production_url ||
                project.youtube_url ||
                project.general_url
              }
            >
              <p className="text-primary dark:text-primary">
                {0}
                {idx}
              </p>
              <h2 className="text-primary mb-2 w-fit text-wrap underline">
                {project.title}
              </h2>
            </Link>

            <p className="text-primary dark:text-stone-400 font-small mb-10">
              {project.description}
            </p>
          </div>

          {/* image */}
          <div>
            <Link
              href={
                project.production_url ||
                project.youtube_url ||
                project.general_url
              }
            >
              <div className="min-h-[150px] max-w-[450px] max-h-[250px] relative rounded-xl overflow-hidden mb-4 flex flex-col justify-center bg-black">
                <Image
                  src={project.image}
                  alt="Image"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
            </Link>
          </div>
        </div>
        {/* link */}
        <div className="flex flex-row items-center justify-end w-full">
          {project.youtube_url ? (
            <Link href={project.youtube_url}>
              <FaYoutube size={25} color="red" />
            </Link>
          ) : (
            ''
          )}

          {project.github_url ? (
            <Link href={project.github_url}>
              <FaGithub size={25} color="#6cc644" />
            </Link>
          ) : (
            ''
          )}

          {project.general_url ? (
            <Link href={project.github_url}>
              <HiOutlineExternalLink size={25} color="#cacaca" />
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
