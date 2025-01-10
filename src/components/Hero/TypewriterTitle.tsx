import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const titles = ['Programmer', 'Developer','Full-Stack Developer'];

const TypewriterTitle = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[50px] mb-6">
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-3xl"
        >
          {' '}
          <span className="text-purple-500 font-bold">
            {titles[currentIndex]}
          </span>
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};
export default TypewriterTitle;