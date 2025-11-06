import React from 'react';
import Spline from '@splinetool/react-spline';

const HologramHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-sky-200/90 backdrop-blur">
            Verified Identity • Holographic Card
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            AUROVIS Professional ID — Futuristic and Secure
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-slate-300/90">
            A premium identification experience with iridescent holography, real-time depth, and a modern
            fintech aesthetic.
          </p>
        </div>
      </div>

      {/* 3D Scene */}
      <div className="relative h-[360px] sm:h-[420px] md:h-[500px] lg:h-[560px]">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft vignette and sheen to blend the 3D with the page */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/60" />
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-24 right-1/4 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default HologramHero;
