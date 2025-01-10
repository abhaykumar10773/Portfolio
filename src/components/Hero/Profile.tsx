import React from 'react';
import { motion } from 'framer-motion';
import profile from "../../Assests/profile.jpg";
const Profile = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-full overflow-hidden  border-4 border-purple-500"
      >
        <img
          src={profile}
          alt="Profile"
          className="w-80 h-80 object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute -bottom-4 -right-4 bg-purple-500 rounded-full p-3"
      >
        <span className="text-white text-xl">👋</span>
      </motion.div>
    </div>
  );
};

export default Profile;