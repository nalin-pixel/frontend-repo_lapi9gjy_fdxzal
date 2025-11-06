import React from 'react';
import BackgroundDecor from './components/BackgroundDecor';
import CompanyHeader from './components/CompanyHeader';
import PhotoFrame from './components/PhotoFrame';
import EmployeeInfo from './components/EmployeeInfo';

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
    <div className="min-h-screen flex items-center justify-center bg-emerald-50 p-6">
      <div className="relative w-full max-w-md">
        <BackgroundDecor />

        {/* ID Card */}
        <div className="relative bg-white rounded-3xl shadow-2xl ring-1 ring-emerald-900/10 p-6 backdrop-blur overflow-hidden">
          <div className="flex items-start justify-between mb-4">
            <CompanyHeader />
            <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">Employee ID Card</span>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <PhotoFrame src={photoSrc} alt="Employee portrait" />
            <EmployeeInfo
              name="Amlan Kumar Nayak"
              designation="Software Developer"
              employeeId="ID-AURO017"
            />
          </div>

          {/* Bottom band for emphasis */}
          <div className="mt-6 h-2 w-full rounded-full bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-700" />
        </div>

        {/* 3D Model hint */}
        <div className="mt-4 text-center text-xs text-emerald-900/80">
          3D idea: Use Three.js for a smooth rotating card with a subtle holographic shine.
        </div>
      </div>
    </div>
  );
}

export default App;
