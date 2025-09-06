import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/HiruniYasoda",
      icon: <Github className="w-6 h-6" />,
      color: "hover:text-pink-400"
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com",
      icon: <Linkedin className="w-6 h-6" />,
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      url: "mailto:hirunisethmini@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      color: "hover:text-purple-400"
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Hiruni Yasoda
              </h3>
              <p className="text-slate-300 mb-3">
                Fullstack Developer & Creative Problem Solver
              </p>
              <p className="text-sm text-slate-400 flex items-center justify-center justify-md-start gap-1">
                Made with <Heart className="w-4 h-4 text-pink-400 fill-current" /> in Sri Lanka
              </p>
            </motion.div>
          </div>
          
          <div className="col-md-6 text-center text-md-end">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <div className="flex gap-4 justify-center justify-md-end">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-300 ${link.color} transition-colors duration-300 p-2 rounded-full hover:bg-purple-500/20`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    title={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.p 
              className="text-slate-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              © {currentYear} Hiruni Yasoda. All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Animated bottom border */}
      <motion.div
        className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{ transformOrigin: "left" }}
      />
    </footer>
  );
};

export default Footer;