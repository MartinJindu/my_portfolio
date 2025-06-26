import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Project } from "@/lib/types";
import { Badge } from "./ui/badge";

type ProjectProp = {
  project: Project;
};

function ProjectCard({ project }: ProjectProp) {
  return (
    <Card className="bg-gray-200 border-blue-500 dark:bg-gray-900  dark:border-gray-800 overflow-hidden group hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-lg">
      <div className="relative overflow-hidden">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">
          {project.title}
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, techIndex: number) => (
            <motion.div
              key={techIndex}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant="secondary"
                className="bg-blue-600/20 text-blue-600 dark:text-blue-400 border-blue-600/30 dark:border-blue-400/30"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>
        <div className="flex gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href={project.github} target="_blank" aria-label="github">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-500 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              >
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
            </Link>
          </motion.div>

          {project.live && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={project.live} target="_blank" aria-label="live demo">
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-gray-100 cursor-pointer"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
export default ProjectCard;
