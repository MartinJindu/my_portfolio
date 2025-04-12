import { motion } from "framer-motion";
import { ReactNode } from "react";

type SkillProps = {
  skill: {
    name: string;
    icon: ReactNode;
    level: number;
  };
  skillsInView: boolean;
  index: number;
};
const SkillsProgress = ({ skill, skillsInView, index }: SkillProps) => {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0, x: 50 }}
      animate={skillsInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.5 }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-100">
          {skill.icon}
          <span>{skill.name}</span>
        </div>
        <span className="text-sm text-gray-100">{skill.level}%</span>
      </div>

      <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
        <motion.div
          className="bg-amber-500 h-full rounded-full"
          initial={{ width: "0%" }}
          animate={skillsInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.5, delay: index * 0.5 }}
        />
      </div>
    </motion.div>
  );
};
export default SkillsProgress;
