import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  skills: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
    >
      <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 bg-gray-800/50 p-3 rounded-lg border border-gray-700"
          >
            <div className="text-purple-500">{skill.icon}</div>
            <span className="text-gray-300 text-sm md:text-base">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default SkillCard;