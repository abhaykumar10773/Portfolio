import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              Full Stack Developer
              <span className="text-blue-600">.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transforming ideas into powerful web applications using MERN stack technology.
              Passionate about creating seamless user experiences and robust backend solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Code2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-gray-600">React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Server className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-gray-600">Node.js, Express, REST APIs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Database</h3>
              <p className="text-gray-600">MongoDB, Mongoose</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;