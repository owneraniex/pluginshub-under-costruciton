import React from 'react';
import { motion } from 'framer-motion';
import { Command } from 'lucide-react';
import Background from './components/Background';
import Hero from './components/Hero';
import Features from './components/Features';
import Button from './components/Button';
import { SOCIALS } from './constants';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-200 selection:bg-primary-500/30 selection:text-primary-100 overflow-x-hidden">
      <Background />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/20">
              <Command className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">PluginsHub</span>
          </div>
          <div className="hidden sm:block">
             <Button variant="ghost" className="text-sm" disabled>
               Login (Coming Soon)
             </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          
          <div className="mt-10 border-t border-slate-800/50 pt-10">
            <div className="text-center mb-10">
               <h2 className="text-2xl font-semibold text-white">Why wait for PluginsHub?</h2>
               <p className="text-slate-400 mt-2">We are rebuilding the plugin ecosystem from the ground up.</p>
            </div>
            <Features />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/50 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-slate-400">
                <Command className="w-3 h-3" />
              </div>
              <span className="text-sm font-semibold text-slate-300">PluginsHub</span>
              <span className="text-xs text-slate-500 ml-2">© {new Date().getFullYear()} All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-4">
              {SOCIALS.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  whileHover={{ y: -2, color: '#fff' }}
                  className="text-slate-500 transition-colors p-2 hover:bg-slate-900 rounded-full"
                  aria-label={social.platform}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
              <a href="mailto:contact@pluginshub.com" className="hover:text-slate-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;
