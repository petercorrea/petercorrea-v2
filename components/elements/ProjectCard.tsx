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
      <div className="grid grid-cols-8 h-full group">
        <div className="col-span-1 p-4">
          <div className="flex flex-col">
            <h4 className="text-primary mb-2 w-fit text-wrap">
              {0}
              {idx}
            </h4>
          </div>
        </div>

        <div className="col-span-1 p-4">
          <div className="flex flex-col">
            {/* text */}
            <Link
              href={
                project.production_url ||
                project.youtube_url ||
                project.general_url
              }
            ></Link>

            {/* link */}
            <div>
              {project.youtube_url ? (
                <Link href={project.youtube_url}>
                  <FaYoutube
                    size={25}
                    className="text-grey group-hover:text-youtube duration-0"
                  />
                </Link>
              ) : (
                ''
              )}

              {project.github_url ? (
                <Link href={project.github_url}>
                  <FaGithub
                    size={25}
                    className="text-grey group-hover:text-github duration-0"
                  />
                </Link>
              ) : (
                ''
              )}

              {project.general_url ? (
                <Link href={project.github_url}>
                  <HiOutlineExternalLink
                    size={25}
                    className="text-grey group-hover:text-black duration-0"
                  />
                </Link>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>

        <div className="col-span-4 p-4">
          <h4 className="text-primary mb-2 w-fit text-wrap underline">
            {project.title}
          </h4>
          <p className="text-primary dark:text-stone-400 font-small mb-2">
            {project.description}
          </p>
          {/* image */}

          <Link
            href={
              project.production_url ||
              project.youtube_url ||
              project.general_url
            }
          ></Link>
        </div>

        <div className="col-span-2 w-full h-full relative overflow-hidden flex flex-col bg-black">
          <Image
            src={project.image}
            alt="Image"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </Hover>
  );
};
export default ProjectCard;
