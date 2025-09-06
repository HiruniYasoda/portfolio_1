import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { generateCV } from "./CV";

const Header: React.FC = () => {
  return (
    <header className="min-h-screen animated-bg flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating particles animation */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-8">
        <div className="row align-items-center">
          <div className="col-lg-8 mobile-text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hiruni Yasoda
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl text-purple-300 mb-6 font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Fullstack Developer
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Passionate software developer crafting innovative digital solutions with modern technologies. 
                I transform ideas into elegant, user-friendly applications that make a real impact. 
                Always eager to learn, collaborate, and push the boundaries of what's possible in tech.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a href="#contact" className="btn-gradient hover-lift">
                  <Mail className="w-5 h-5 inline mr-2" />
                  Get In Touch
                </a>
                <button
      onClick={generateCV}
className={`btn-gradient hover-lift bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center"}`}
    >
      <Download className="w-5 h-5 inline mr-2" />
      Download CV
    </button>

              </motion.div>
              
              <motion.div 
                className="flex gap-6 mt-8 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.a 
                  href="https://github.com/HiruniYasoda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-pink-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-8 h-8" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/hiruni-sethmini/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-8 h-8" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="col-lg-4 mobile-mt-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-80 h-80 md:w-96 md:h-96 mx-auto rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 p-2 glow-purple">
                  <img
                    src="profile.jpg"
                    alt="Hiruni Yasoda"
                    className="w-full h-full object-cover rounded-full border-4 border-slate-800"
                  />
                </div>
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  ✨
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;