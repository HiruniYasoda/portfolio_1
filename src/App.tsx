import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Education from './components/Education';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import SoftSkills from './components/SoftSkills';
import Achievements from './components/Achievements';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <Header />
        </div>
        <Education />
        <Projects />
        <TechnicalSkills />
        <SoftSkills />
        <Achievements />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;