import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  project: {
    name: string;
    description: string;
    img: StaticImageData;
    link: string;
    github: string;
    techStack?: string[];
  };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <CardContainer className="w-full" containerClassName="py-5">
      <CardBody className="bg-gray-900 relative group/card border-black/[0.1] w-auto h-auto rounded-sm p-3 border">
        <CardItem
          as={"h1"}
          translateZ="50"
          className="text-2xl font-bold text-amber-300  mb-5"
        >
          {project.name}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.img}
            height="1000"
            width="1000"
            className="w-full object-cover rounded-sm group-hover/card:shadow-xl"
            alt={project.name}
          />
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-100 text-xl max-w-sm mt-2 font-semibold"
        >
          {project.description}
        </CardItem>

        {project.techStack && (
          <CardItem
            as={"h5"}
            translateZ={50}
            className="mt-5 font-semibold text-amber-300"
          >
            Tech stack:
          </CardItem>
        )}

        <div className="flex flex-wrap gap-3 mt-2">
          {project.techStack &&
            project.techStack.map((stack) => (
              <CardItem
                key={stack}
                as={"div"}
                translateZ={60}
                className="h-auto w-auto py-2 px-2 text-[10px] bg-blue-800  rounded-lg"
              >
                {stack}
              </CardItem>
            ))}
        </div>

        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as={Link}
            href={project.link}
            target="_blank"
            className="flex gap-2 items-center px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Live demo <FaExternalLinkAlt />
          </CardItem>
          <Link aria-label="github repo" href={project.github} target="_blank">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold cursor-pointer"
            >
              <FaGithub />
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
};
export default ProjectCard;
