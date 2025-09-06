import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Book, Award } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      icon: <Award className="w-8 h-8" />,
      degree: "BSc (Hons) in Computing and Information Systems",
      institution: "Sabaragamuwa University of Sri Lanka",
      status: "Undergraduate",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: <Book className="w-8 h-8" />,
      degree: "IT Diploma",
      institution: "ESOFT Metro Campus",
      status: "Completed",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      degree: "Pearson Assured Diploma in English",
      institution: "ESOFT Metro Campus",
      status: "Completed",
      color: "from-blue-500 to-pink-500"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Building a strong foundation through continuous learning and academic excellence
          </p>
        </motion.div>

        <div className="row g-4">
          {educationData.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 h-100 hover-lift"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mb-6 mx-auto text-white glow-purple`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {item.degree}
                </h3>
                <p className="text-purple-300 text-center mb-3 font-medium">
                  {item.institution}
                </p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${item.color} text-white mx-auto d-block text-center`}>
                  {item.status}
                </span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;