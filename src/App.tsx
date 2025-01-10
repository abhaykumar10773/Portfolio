import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className=  "bg-gray-950  min-h-screen">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;