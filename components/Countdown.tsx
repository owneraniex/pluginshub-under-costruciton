import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CountdownTime } from '../types';
import { LAUNCH_DATE } from '../constants';

const calculateTimeLeft = (): CountdownTime => {
  const difference = +new Date(LAUNCH_DATE) - +new Date();
  
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

const AnimatedDigit: React.FC<{ digit: string }> = ({ digit }) => (
  <div className="relative w-7 sm:w-8 md:w-12 h-10 sm:h-12 md:h-16 bg-slate-800/30 rounded-md sm:rounded-lg overflow-hidden border border-slate-700/50 backdrop-blur-sm shadow-[inset_0_1px_4px_rgba(0,0,0,0.4)]">
    {/* Inner shadow/glare overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-20" />
    
    <AnimatePresence mode="popLayout">
      <motion.div
        key={digit}
        initial={{ y: '-100%', opacity: 0.5 }}
        animate={{ y: '0%', opacity: 1 }}
        exit={{ y: '100%', opacity: 0.5 }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }} // Smooth easeOutCubic curve
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <span className="text-2xl sm:text-3xl md:text-5xl font-bold font-mono text-white drop-shadow-md">
          {digit}
        </span>
      </motion.div>
    </AnimatePresence>
  </div>
);

const AnimatedUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  const digits = value.toString().padStart(2, '0').split('');
  
  return (
    <div className="flex flex-col items-center gap-1.5 sm:gap-3 mx-1 sm:mx-2 md:mx-4">
      <div className="flex gap-0.5 sm:gap-1.5">
        {digits.map((d, i) => (
          <AnimatedDigit key={i} digit={d} />
        ))}
      </div>
      <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-[0.15em] sm:tracking-[0.2em]">{label}</span>
    </div>
  );
};

const Separator: React.FC = () => (
  <div className="hidden md:flex flex-col gap-2 -mt-6 mx-1">
    <div className="w-1.5 h-1.5 rounded-full bg-slate-700/50" />
    <div className="w-1.5 h-1.5 rounded-full bg-slate-700/50" />
  </div>
);

const Countdown: React.FC = () => {
  // Initialize state immediately to prevent 00:00 flash on mount
  const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center py-6 sm:py-10 select-none">
      <AnimatedUnit value={timeLeft.days} label="Days" />
      <Separator />
      <AnimatedUnit value={timeLeft.hours} label="Hours" />
      <Separator />
      <AnimatedUnit value={timeLeft.minutes} label="Mins" />
      <Separator />
      <AnimatedUnit value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

export default Countdown;
