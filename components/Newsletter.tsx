import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';
import Input from './Input';
import Button from './Button';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }
    
    setErrorMessage('');
    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="w-full max-w-lg mx-auto relative z-10">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center backdrop-blur-md"
          >
            <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-900/20">
              <CheckCircle className="w-7 h-7 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
            <p className="text-slate-400 text-sm mb-4">We'll notify you when we launch. No spam, just high-quality plugins.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Register another email
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:gap-4"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  icon={<Mail className="w-5 h-5" />}
                  error={errorMessage}
                  disabled={status === 'loading'}
                />
              </div>
              <Button 
                type="submit" 
                isLoading={status === 'loading'}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shrink-0 shadow-xl shadow-primary-900/20"
              >
                Notify Me
              </Button>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 pl-1">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-slate-800 border border-slate-900" />
                ))}
              </div>
              <p className="text-xs text-slate-500">
                Join <span className="text-slate-300 font-semibold">2,400+</span> developers waiting for launch.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Newsletter;