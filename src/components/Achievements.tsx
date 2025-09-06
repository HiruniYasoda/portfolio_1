import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "SheCoderess - First Runner-up",
      event: "2025 Inter University Hackathon",
      description: "Recognized for innovative technical solution and outstanding teamwork in competitive programming environment.",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-pink-500 to-purple-500",
      year: "2025"
    },
    {
      title: "Designthon Winner",
      event: "Uva Wellassa University, Sri Lanka",
      description: "Awarded for exceptional design thinking and creative problem-solving in university-level design competition.",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-500 to-blue-500",
      year: "2024"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Recognition for excellence in technology innovation and design thinking
          </p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          {achievements.map((achievement, index) => (
            <div key={index} className="col-lg-5 col-md-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 hover-lift relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <Star className="w-full h-full text-purple-400" />
                </div>
                
                <div className="row align-items-center">
                  <div className="col-3">
                    <div className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center text-white glow-purple`}>
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {achievement.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${achievement.color} text-white`}>
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-purple-300 font-medium mb-3">
                      {achievement.event}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;