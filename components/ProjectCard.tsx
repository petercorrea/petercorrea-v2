import { Project } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import Tag from './Tag';
import Hover from './effects/Hover';

interface ProjectCardProps {
  project: Project;
  idx: number;
}

const ProjectCard = ({ project, idx }: ProjectCardProps) => {
  return (
    <Hover>
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
            <p className="text-primary">
              {0}
              {idx}
            </p>
            <h2 className="text-primary mb-2 w-fit text-wrap underline">
              {project.title}
            </h2>
          </Link>

          <p className="text-primary dark:text-stone-400 small mb-10">
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
            <div className="min-h-[250px] max-w-[500px] max-h-[250px] relative rounded-xl overflow-hidden mb-4 flex flex-col justify-center bg-black">
              <Image src={project.image} alt="Image" width={500} height={300} />
            </div>
          </Link>
        </div>

        {/* tags */}
        <div>
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
              <Link href={project.youtube_url}>
                <FaYoutube size={35} color="red" />
              </Link>
            ) : (
              ''
            )}

            {project.github_url ? (
              <Link href={project.github_url}>
                <FaGithub size={35} color="#6cc644" />
              </Link>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </Hover>
  );
};
export default ProjectCard;
