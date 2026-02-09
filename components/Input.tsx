import React from 'react';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ className = '', error, icon, ...props }) => {
  return (
    <div className="relative w-full">
      <div className="relative flex items-center group">
        {icon && (
          <div className="absolute left-3 text-slate-400 group-focus-within:text-primary-400 transition-colors duration-300 pointer-events-none z-10">
            {icon}
          </div>
        )}
        <input
          className={`
            w-full bg-slate-900/40 border border-slate-700/80 rounded-xl
            backdrop-blur-sm
            ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3.5
            text-white placeholder-slate-500
            shadow-inner shadow-black/20
            focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500
            hover:border-slate-600
            transition-all duration-300 ease-out
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        {/* Glow effect on focus */}
        <div className="absolute inset-0 rounded-xl bg-primary-500/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-300" />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-6 left-0 text-xs font-medium text-red-500 mt-1 pl-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default Input;