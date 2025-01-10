import React from 'react';
import Profile from './Profile';
import Introduction from './Introduction';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-950">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Introduction />
          <div className="flex justify-center">
            <Profile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;