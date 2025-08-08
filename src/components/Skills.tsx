import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Code, Database, Users, MessageCircle, LineChart, FileCheck } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const Skills = () => {
  
  const technicalSkills = [
    { name: 'Python', level: 90 },
    { name: 'SQL', level: 85 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Data Analysis', level: 75 },
    { name: 'Computer Science Fundamentals', level: 90 },
  ];
  
  const softSkills = [
    { name: 'Communication', level: 90 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Teamwork', level: 95 },
    { name: 'Attention to Detail', level: 90 },
    { name: 'Customer Service', level: 85 },
  ];
  
  const specializations = [
    {
      icon: <Code className="h-10 w-10 text-primary mb-4" />,
      title: 'Programming',
      description: 'Proficient in Python programming for data science and ML applications',
      items: ['Python', 'SQL', 'Data Structures', 'Algorithms']
    },
    {
      icon: <Database className="h-10 w-10 text-primary mb-4" />,
      title: 'Data Management',
      description: 'Experience in database management and data quality control',
      items: ['SQL', 'Data Quality', 'Data Cleaning', 'Database Design']
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary mb-4" />,
      title: 'Machine Learning',
      description: 'Building and evaluating ML models for various applications',
      items: ['Supervised Learning', 'Data Analysis', 'Model Evaluation', 'Feature Engineering']
    },
    {
      icon: <FileCheck className="h-10 w-10 text-primary mb-4" />,
      title: 'Quality Management',
      description: 'Ensuring high standards in product and service quality',
      items: ['Quality Control', 'Process Improvement', 'Product Quality', 'Quality Standards']
    },
    {
      icon: <Users className="h-10 w-10 text-primary mb-4" />,
      title: 'Teamwork',
      description: 'Collaborative approach to problem-solving and project execution',
      items: ['Collaboration', 'Knowledge Sharing', 'Peer Support', 'Team Projects']
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-primary mb-4" />,
      title: 'Communication',
      description: 'Clear and effective communication in technical and non-technical contexts',
      items: ['Technical Writing', 'Presentations', 'Client Communication', 'Documentation']
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
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          
          <motion.p 
            className="text-foreground/80 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A showcase of my technical and soft skills developed through academic studies and practical experience.
          </motion.p>
        </div>
        
        <Tabs defaultValue="technical" className="max-w-4xl mx-auto mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-secondary/70 p-1">
              <TabsTrigger value="technical" className="text-sm sm:text-base px-4 sm:px-8 py-2.5">
                Technical Skills
              </TabsTrigger>
              <TabsTrigger value="soft" className="text-sm sm:text-base px-4 sm:px-8 py-2.5">
                Soft Skills
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="technical" className="space-y-8 mt-6">
            {technicalSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-foreground">{skill.name}</h3>
                  <span className="text-sm text-foreground/70">{skill.level}%</span>
                </div>
                <div className="progress-bar" style={{ '--progress-width': `${skill.level}%` } as React.CSSProperties}></div>
              </motion.div>
            ))}
          </TabsContent>
          
          <TabsContent value="soft" className="space-y-8 mt-6">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-foreground">{skill.name}</h3>
                  <span className="text-sm text-foreground/70">{skill.level}%</span>
                </div>
                <div className="progress-bar" style={{ '--progress-width': `${skill.level}%` } as React.CSSProperties}></div>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <motion.div 
              key={index}
              className="p-8 rounded-xl border border-primary/20 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {spec.icon}
              <h3 className="text-xl font-bold mb-3">{spec.title}</h3>
              <p className="text-foreground/70 mb-6">{spec.description}</p>
              <ul className="space-y-2">
                {spec.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;