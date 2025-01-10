import React from 'react';
import { motion } from 'framer-motion';
import TypewriterTitle from './TypewriterTitle';

const Introduction = () => {
  return (
    <div className="text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I am
        <br />
        <span className="text-6xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Abhay Kumar
        </span>
      </motion.h1>
       <p className='text-3xl'>I am a <TypewriterTitle /></p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-gray-300 text-lg mb-8 max-w-2xl"
      >
        I'm a highly motivated and versatile individual with a strong aptitude for problem-solving 
        and a deep commitment to continuous development. Currently pursuing BCA from CSJMU (2025), 
        I enjoy tackling complex challenges, analyzing data, and developing effective solutions.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex gap-4"
      >
        <a
          href="#contact"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full inline-block hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="border border-purple-500 text-white px-8 py-3 rounded-full inline-block hover:bg-purple-500/10 transition-colors"
        >
          View Projects
        </a>
      </motion.div>
    </div>
  );
};
export default Introduction;