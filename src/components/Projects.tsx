import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Visit Sri Lanka",
      description: "A comprehensive tourism platform showcasing Sri Lanka's beautiful destinations with interactive features and detailed travel information.",
      techStack: ["React", "JavaScript", "CSS3", "HTML5"],
      repository: "https://github.com/HiruniYasoda/Visit_Sri_Lanka_1",
      demo: null,
      gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "Library Management System",
      description: "Complete library management solution with book tracking, member management, and automated lending processes.",
      techStack: ["C#", ".NET", "SQL Server", "Windows Forms"],
      repository: "https://github.com/HiruniYasoda/Library-management-system",
      demo: null,
      gradient: "from-purple-500 to-blue-600"
    },
    {
      title: "VeloResQ",
      description: "Emergency response application connecting cyclists with nearby rescue services through real-time location tracking.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      repository: "https://github.com/Jithmi25/veloresq-frontend",
      demo: null,
      gradient: "from-blue-500 to-pink-600"
    },
    {
      title: "Exam Management Portal",
      description: "Digital platform streamlining exam administration with automated scheduling, grading, and comprehensive reporting.",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      repository: "https://github.com/HiruniYasoda/SC-CLIENT",
      demo: null,
      gradient: "from-pink-600 to-purple-500"
    },
    {
      title: "Resident Management Website",
      description: "Community management platform facilitating resident communication, service requests, and administrative tasks.",
      techStack: ["React", "Node.js", "CSS3", "JavaScript"],
      repository: "https://github.com/HiruniYasoda/client",
      demo: null,
      gradient: "from-purple-600 to-blue-500"
    },
    {
      title: "SolarShare.lk",
      description: "Innovative solar energy sharing platform connecting renewable energy producers with consumers across Sri Lanka.",
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      repository: "#",
      demo: null,
      gradient: "from-blue-600 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies and creative problem-solving
          </p>
        </motion.div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 h-100 hover-lift"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-6`}></div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient flex-1 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5 inline mr-2" />
                    Repository
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gradient bg-gradient-to-r from-blue-600 to-purple-600 text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5 inline mr-2" />
                      Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;