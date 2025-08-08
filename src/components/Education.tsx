
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Bookmark, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      degree: "Masters in Computer Applications",
      institution: "Vaageswari College of Engineering",
      period: "2023 - 2025",
      specialization: "Computer Science with focus on Machine Learning",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "bg-blue-500"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      period: "Completed",
      specialization: "Mathematics, Physics, and Chemistry",
      icon: <Bookmark className="h-6 w-6" />,
      color: "bg-green-500"
    },
    {
      degree: "Computer Science",
      institution: "Chaitanya Degree College",
      period: "Completed",
      specialization: "Computer Science fundamentals",
      icon: <Building className="h-6 w-6" />,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            Education <span className="text-gradient">Journey</span>
          </motion.h2>
          
          <motion.p 
            className="text-foreground/80 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My academic path that has shaped my knowledge and skills in Computer Science and Machine Learning.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <motion.div 
              key={index}
              className="p-8 rounded-xl border border-primary/20 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6">
                <div className="text-primary mb-4">
                  {item.icon}
                </div>
                <span className="text-sm font-medium bg-primary/10 text-primary rounded-full px-3 py-1">
                  {item.period}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
              <p className="text-foreground/90 font-medium mb-4">{item.institution}</p>
              <p className="text-foreground/70">{item.specialization}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            My educational journey has equipped me with a strong foundation in Computer Science and Machine Learning, preparing me for the challenges of the technology industry. I continue to expand my knowledge through self-learning and practical projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
