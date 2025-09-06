import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Lightbulb, MessageCircle, Crown } from 'lucide-react';

const SoftSkills: React.FC = () => {
  const softSkills = [
    {
      name: "Problem Solving",
      level: 90,
      icon: <Brain className="w-8 h-8" />,
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "Teamwork",
      level: 85,
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-blue-500"
    },
    {
      name: "Creativity",
      level: 95,
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-blue-500 to-pink-500"
    },
    {
      name: "Communication",
      level: 80,
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-pink-600 to-purple-600"
    },
    {
      name: "Leadership",
      level: 85,
      icon: <Crown className="w-8 h-8" />,
      color: "from-purple-600 to-blue-600"
    }
  ];

  const CircularProgress = ({ skill, index }: { skill: any; index: number }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (skill.level / 100) * circumference;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="text-center"
      >
        <div className="relative inline-block mb-4">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="8"
              fill="transparent"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: index * 0.1 + 0.5 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EC4899" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mb-2 mx-auto text-white`}>
                {skill.icon}
              </div>
              <span className="text-2xl font-bold text-white">{skill.level}%</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white">{skill.name}</h3>
      </motion.div>
    );
  };

  return (
    <section id="soft-skills" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            Soft Skills
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Essential interpersonal abilities that drive successful collaboration and project delivery
          </p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          {softSkills.map((skill, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-6">
              <CircularProgress skill={skill} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;