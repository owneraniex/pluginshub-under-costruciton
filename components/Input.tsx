import React from 'react';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ className = '', error, icon, ...props }) => {
  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3 text-slate-400 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          className={`
            w-full bg-slate-900/50 border border-slate-700 rounded-lg 
            ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3 
            text-white placeholder-slate-400 
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent 
            transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-500 focus:ring-red-500' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-6 left-0 text-xs text-red-500 mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default Input;
