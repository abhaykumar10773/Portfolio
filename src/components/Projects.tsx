import React from 'react';
import { motion } from 'framer-motion';
import { Video, Home, Laugh } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'VideoTube',
      description: "A backend-only video sharing platform where users can upload videos, manage profiles, and like videos. APIs are tested using Postman.",
      icon: <Video className="w-8 h-8" />,
      tech: ['MongoDB', 'Express', 'cloudinary', 'Node.js'],
      status: 'Completed',
      path: 'https://github.com/abhaykumar10773/videos'
    },
    {
      title: 'Home Service Booking',
      description: 'Platform connecting users with local service providers, featuring location-based search and booking system.',
      icon: <Home className="w-8 h-8" />,
      tech: ['MERN Stack', 'Maps API', 'Real-time Booking'],
      status: 'Ongoing',
      path: 'https://github.com/abhaykumar10773/videos'
    },
    {
      title: 'AI Comedy Web App',
      description: 'AI-powered platform generating custom jokes and video content based on user gives the prompts.',
      icon: <Laugh className="w-8 h-8" />,
      tech: ['React', 'OpenAI API', 'Video Generation'],
      status: 'Ongoing',
      path: 'https://github.com/abhaykumar10773/videos'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold  text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400">"Showcasing my latest projects and ongoing work, featuring innovative solutions, robust backend designs, and seamless integrations."</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >  
            
              <div className="p-6">
              
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {project.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                 </div>
               
              </div>
              <div className="flex justify-center mb-2">
              <a
                href={project.path}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-2 text-lg font-semibold border border-purple-600 rounded-full bg-white text-purple-600 hover:bg-blue-200 hover:text-blue-900 transition-colors duration-300"
              >
                View
              </a>
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;