import React from 'react';

const PhotoFrame = ({ src, alt }) => {
  return (
    <div className="relative mx-auto w-40 h-52 rounded-xl overflow-hidden shadow-lg ring-4 ring-white/60">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      {/* Subtle shine */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20" />
    </div>
  );
};

export default PhotoFrame;
