import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-950">
      
      {/* Noise Texture for that film/modern digital look */}
      <div 
        className="absolute inset-0 opacity-[0.05] z-[2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          transform: 'scale(1.5)',
        }}
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] z-[1]" 
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Main Ambient Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw] bg-primary-600/20 rounded-full blur-[80px] md:blur-[120px] animate-blob mix-blend-screen" />
      <div className="absolute top-[20%] right-[-10%] w-[70vw] md:w-[35vw] h-[70vw] md:h-[35vw] bg-accent-600/20 rounded-full blur-[80px] md:blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[20%] w-[90vw] md:w-[45vw] h-[90vw] md:h-[45vw] bg-indigo-600/20 rounded-full blur-[80px] md:blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-[3]" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-950 opacity-80 z-[3]" />
    </div>
  );
};

export default Background;
