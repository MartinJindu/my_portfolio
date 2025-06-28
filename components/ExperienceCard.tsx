import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, CheckCircle, LucideIcon, MapPin } from "lucide-react";

type ExperienceCardProp = {
  isLeft: boolean;
  IconComponent: LucideIcon;
  item: {
    type: "work" | "education";
    title: string;
    company?: string;
    location: string;
    period: string;
    description?: string;
    achievements?: string[];
    technologies?: string[];
    icon: LucideIcon;
  };
};

const ExperienceCard = ({
  item,
  isLeft,
  IconComponent,
}: ExperienceCardProp) => {
  return (
    <div
      className={`w-full md:w-5/10 ml-2 md:ml-0 ${
        isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <Card
          className={`bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ${
            item.type === "work"
              ? "border-l-4 border-l-blue-600"
              : "border-l-4 border-l-purple-600"
          }`}
        >
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`p-2 rounded-lg ${
                    item.type === "work"
                      ? "bg-blue-600/20 text-blue-600 dark:text-blue-400"
                      : "bg-purple-600/20 text-purple-600 dark:text-purple-400"
                  }`}
                >
                  <IconComponent className="h-6 w-6" />
                </motion.div>
                <div>
                  <CardTitle className="text-gray-900 dark:text-white text-lg">
                    {item.title}
                  </CardTitle>
                  {item.company && (
                    <CardDescription className="text-gray-600 dark:text-gray-400 font-medium">
                      {item.company}
                    </CardDescription>
                  )}
                </div>
              </div>
              <Badge
                variant="secondary"
                className={`${
                  item.type === "work"
                    ? "bg-blue-600/20 text-blue-600 dark:text-blue-400"
                    : "bg-purple-600/20 text-purple-600 dark:text-purple-400"
                }`}
              >
                {item.type === "work" ? "Work" : "Education"}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mt-2">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {item.period}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {item.location}
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>

            {/* Achievements */}
            {item.achievements && (
              <ExperienceAchievement achievements={item.achievements} />
            )}

            {/* Technologies */}
            {item.technologies && (
              <ExperienceTech
                technologies={item.technologies}
                type={item.type}
              />
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
export default ExperienceCard;

//-----------------------------------------------------------------------------------------------------------------

// Experience achievement
type ExperienceAchievementProp = {
  achievements: string[];
};

const ExperienceAchievement = ({ achievements }: ExperienceAchievementProp) => {
  return (
    <div>
      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
        Key Achievements:
      </h4>
      <ul className="space-y-2">
        {achievements.map((achievement, achievementIndex) => (
          <motion.li
            key={achievementIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: achievementIndex * 0.1,
            }}
            className="flex items-start text-gray-700 dark:text-gray-300"
          >
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-sm">{achievement}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

// Experience Technology
type ExperienceTechProp = {
  technologies: string[];
  type: "work" | "education";
};
const ExperienceTech = ({ technologies, type }: ExperienceTechProp) => {
  return (
    <div>
      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
        Technologies Used:
      </h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, techIndex) => (
          <motion.div
            key={techIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: techIndex * 0.05 }}
            whileHover={{ scale: 1.05 }}
          >
            <Badge
              variant="outline"
              className={`text-xs ${
                type === "work"
                  ? "bg-blue-600/20 text-blue-600 dark:text-blue-600 border-blue-600/30 dark:border-blue-400/30"
                  : "bg-purple-600/20 text-purple-600 dark:text-purple-600 border-purple-600/30 dark:border-purple-400/30"
              }    `}
            >
              {tech}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
