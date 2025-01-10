import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import {
  FileCode2, Database, Server, Code, Brain,
  GitBranch, Monitor, CircuitBoard
} from 'lucide-react';

const Skills = () => {
  const skillSets = {
    frontend: [
      { name: 'HTML', icon: <FileCode2 /> },
      { name: 'CSS', icon: <Code /> },
      { name: 'JavaScript', icon: <Code /> },
      { name: 'React', icon: <Code /> },
      { name: 'Tailwind', icon: <Code /> },
    ],
    backend: [
      { name: 'Node.js', icon: <Server /> },
      { name: 'Express', icon: <Server /> },
      { name: 'MongoDB', icon: <Database /> },
      { name: 'MySQL', icon: <Database /> },
      { name: 'Mongoose', icon: <Database /> },
    ],
    other: [
      { name: 'Git', icon: <GitBranch /> },
      { name: 'GitHub', icon: <GitBranch /> },
      { name: 'VS Code', icon: <Monitor /> },
      { name: 'C++', icon: <CircuitBoard /> },
      { name: 'Java', icon: <Brain /> },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-400">
            Here are some of my skills on which I have been working on for the past year.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard title="Frontend" skills={skillSets.frontend} />
          <SkillCard title="Backend" skills={skillSets.backend} />
          <SkillCard title="Other Tools" skills={skillSets.other} />
        </div>
      </div>
    </section>
  );
};

export default Skills;