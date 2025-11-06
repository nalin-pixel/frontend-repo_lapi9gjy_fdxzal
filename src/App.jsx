import React from 'react';
import HologramHero from './components/HologramHero';
import IdCard from './components/IdCard';

function App() {
  // Inline SVG portrait to match: man wearing a yellow T-shirt and a checkered shirt
  const portraitSvg = encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 260'>
      <defs>
        <linearGradient id='bg' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0%' stop-color='#e8f5e9'/>
          <stop offset='100%' stop-color='#e0f2f1'/>
        </linearGradient>
        <pattern id='checks' width='10' height='10' patternUnits='userSpaceOnUse'>
          <rect width='10' height='10' fill='#1b5e20' />
          <path d='M0 0 L10 10 M10 0 L0 10' stroke='#a7f3d0' stroke-width='1' opacity='0.5' />
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill='url(#bg)'/>
      <!-- Neck and head -->
      <ellipse cx='100' cy='85' rx='34' ry='40' fill='#f1c9a5'/>
      <circle cx='100' cy='55' r='16' fill='#f1c9a5' />
      <!-- Hair -->
      <path d='M66 60c6-20 28-26 40-18 10 6 12 16 10 26-8-6-18-9-28-9s-20 3-22 1z' fill='#2d2a26'/>
      <!-- Yellow T-shirt collar -->
      <path d='M70 120 q30 24 60 0 v10 q-30 22 -60 0z' fill='#facc15'/>
      <rect x='60' y='120' width='80' height='50' rx='10' fill='#facc15'/>
      <!-- Checkered overshirt (open) -->
      <path d='M40 120 q30 -10 60 -10 q30 0 60 10 v90 q-60 20 -120 0z' fill='url(#checks)' opacity='0.95'/>
      <!-- Face details -->
      <circle cx='86' cy='86' r='3' fill='#2d2a26'/>
      <circle cx='114' cy='86' r='3' fill='#2d2a26'/>
      <path d='M88 100 q12 10 24 0' stroke='#9b6b43' stroke-width='2' fill='none'/>
    </svg>
  `);

  const photoSrc = `data:image/svg+xml;utf8,${portraitSvg}`;

  return (
    <div className="min-h-screen w-full bg-slate-950">
      {/* Hero with holographic Spline scene */}
      <HologramHero />

      {/* ID Card section */}
      <section className="relative -mt-10 sm:-mt-16 md:-mt-20 pb-16 sm:pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <div className="mx-auto max-w-sm">
              <IdCard
                name="Amlan Kumar Nayak"
                designation="Software Developer"
                employeeId="ID-AURO017"
                photoSrc={photoSrc}
              />
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">
              Premium PVC | RFID Ready | Anti-tamper holographic overlay
            </p>
          </div>

          <div className="order-1 lg:order-2 flex flex-col items-start justify-center gap-4 text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium tracking-wide text-emerald-300/90 backdrop-blur">
              AUROVIS GLOBAL PVT LTD
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Professional Identification, Elevated
            </h2>
            <p className="max-w-prose text-sm sm:text-base text-slate-300/90">
              This card combines a modern fintech look with robust security. The 3D hologram confirms authenticity,
              while the clean layout keeps essential identity details front and center.
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-300/90 list-disc pl-5">
              <li>Holographic verification with real-time depth</li>
              <li>Readable typography and clear hierarchy</li>
              <li>Optimized for print and digital presentations</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
