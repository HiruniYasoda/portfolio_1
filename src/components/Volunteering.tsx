import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Palette, Users } from 'lucide-react';

const Volunteering: React.FC = () => {
  const volunteeringData = [
    {
      role: "Graphic Designer",
      organization: "Community Projects",
      description: "Creating impactful visual designs for various community initiatives using Canva, Photoshop, and Figma. Helping organizations communicate their message effectively through compelling graphics.",
      tools: ["Canva", "Photoshop", "Figma"],
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <section id="volunteering" className="py-20 bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            Volunteering
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Contributing to community growth through creative design and collaborative efforts
          </p>
        </motion.div>

        <div className="row justify-content-center">
          {volunteeringData.map((item, index) => (
            <div key={index} className="col-lg-8 col-md-10">
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
                  <Heart className="w-full h-full text-pink-400" />
                </div>
                
                <div className="row align-items-center">
                  <div className="col-md-2 col-12 text-center mb-4 mb-md-0">
                    <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto text-white glow-purple`}>
                      {item.icon}
                    </div>
                  </div>
                  <div className="col-md-10 col-12">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.role}
                    </h3>
                    <p className="text-purple-300 font-medium mb-3">
                      {item.organization}
                    </p>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="tech-badge">
                          {tool}
                        </span>
                      ))}
                    </div>
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

export default Volunteering;