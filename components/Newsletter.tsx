import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
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
    <div className="w-full max-w-md mx-auto relative z-10">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">You're on the list!</h3>
            <p className="text-slate-400 text-sm">We'll notify you when we launch. No spam, we promise.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-4 text-sm text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
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
            className="flex flex-col gap-3"
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
                className="w-full sm:w-auto shrink-0"
              >
                Notify Me
              </Button>
            </div>
            <p className="text-xs text-slate-500 text-center sm:text-left pl-1">
              Join <span className="text-slate-300 font-medium">2,400+</span> developers waiting for launch.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Newsletter;
