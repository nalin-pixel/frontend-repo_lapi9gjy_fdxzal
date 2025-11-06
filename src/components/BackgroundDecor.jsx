import React from 'react';

const BackgroundDecor = () => {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl">
      {/* Gradient layers */}
      <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-green-300/30 blur-3xl" />
      <div className="absolute -bottom-28 -right-24 w-[380px] h-[380px] rounded-full bg-emerald-600/30 blur-3xl" />

      {/* Geometric accents */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-700/40 to-green-600/40 rotate-12 translate-x-16 -translate-y-16 rounded-2xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-400/30 to-emerald-500/30 -rotate-12 -translate-x-16 translate-y-16 rounded-3xl" />

      {/* Subtle leaf pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="leafPattern" width="80" height="80" patternUnits="userSpaceOnUse">
            <g transform="translate(40,40)">
              <path d="M0 -24 C 10 -18, 18 -10, 24 0 C 18 10, 10 18, 0 24 C -10 18, -18 10, -24 0 C -18 -10, -10 -18, 0 -24 Z" fill="none" stroke="rgb(16, 185, 129)" strokeWidth="1.2" />
              <path d="M0 -20 C 6 -15, 15 -6, 20 0 C 15 6, 6 15, 0 20 C -6 15, -15 6, -20 0 C -15 -6, -6 -15, 0 -20 Z" fill="none" stroke="rgb(21, 128, 61)" strokeWidth="0.8" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#leafPattern)" />
      </svg>

      {/* Diagonal sheen */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />
    </div>
  );
};

export default BackgroundDecor;
