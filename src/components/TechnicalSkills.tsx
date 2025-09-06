import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette } from 'lucide-react';

const TechnicalSkills: React.FC = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      color: "from-pink-500 to-purple-500",
      skills: [
        { name: "React", level: 75 },
        { name: "JavaScript", level: 75 },
        { name: "HTML/CSS", level: 80 },
        { name: "Bootstrap", level: 75 },
        { name: "Tailwind CSS", level: 70 }
      ]
    },
    {
      category: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-blue-500",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "C#", level: 65 },
        { name: "Java", level: 65 },
        { name: "C", level: 60 },
        { name: "SQL", level: 70 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      category: "Design & Tools",
      icon: <Palette className="w-8 h-8" />,
      color: "from-blue-500 to-pink-500",
      skills: [
        { name: "Figma", level: 75 },
        { name: "Canva", level: 80 },
        { name: "Photoshop", level: 65 },
        { name: "Git", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks with hands-on experience in full-stack development
          </p>
        </motion.div>

        <div className="row g-4">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="col-lg-4 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="glass-card p-8 h-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mb-6 mx-auto text-white glow-purple`}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-200 font-medium">{skill.name}</span>
                        <span className="text-purple-300 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;