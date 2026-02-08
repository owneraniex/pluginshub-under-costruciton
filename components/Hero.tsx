import React from 'react';
import { motion } from 'framer-motion';
import Countdown from './Countdown';
import Newsletter from './Newsletter';

const Hero: React.FC = () => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] text-center px-4 pt-16 md:pt-24 pb-12 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-6 md:mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-md mb-6 md:mb-8 shadow-xl">
          <div className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-emerald-500"></span>
          </div>
          <span className="text-[10px] md:text-xs font-semibold text-slate-300 tracking-wider uppercase">Platform Launching Soon</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 md:mb-8">
          Build. Share. <br className="hidden md:block" />
          <span className="relative">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-300 to-primary-400 bg-[length:200%_auto] animate-gradient">
              Dominate.
            </span>
            <span className="absolute inset-0 bg-primary-500/20 blur-3xl -z-10" />
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-base md:text-xl text-slate-400 mb-10 md:mb-12 leading-relaxed px-2">
          The ultimate marketplace for high-quality Minecraft plugins. 
          <span className="text-slate-200"> Verified code</span>, <span className="text-slate-200">instant downloads</span>, and a developer-first ecosystem.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-full mb-12 md:mb-16"
      >
        <Countdown />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full px-2"
      >
        <Newsletter />
      </motion.div>
    </section>
  );
};

export default Hero;
