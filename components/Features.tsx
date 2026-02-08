import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';
import { Feature } from '../types';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 15 } }
};

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <motion.div
      variants={item}
      className="group relative p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden hover:bg-slate-800/60 transition-colors duration-500"
    >
      {/* Hover Gradient Shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 group-hover:border-primary-500/30 transition-all duration-300 shadow-lg">
        <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-slate-400 group-hover:text-primary-400 transition-colors duration-300" />
      </div>

      {/* Text */}
      <div className="relative z-10">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-primary-50 transition-colors">
          {feature.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-16 md:mt-20"
    >
      {FEATURES.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </motion.div>
  );
};

export default Features;
