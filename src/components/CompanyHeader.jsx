import React from 'react';

const CompanyHeader = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Stylized green tree with human figures */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 120"
        className="w-14 h-14"
        aria-hidden
      >
        <defs>
          <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#065f46" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="56" fill="url(#leafGrad)" opacity="0.15" />
        {/* Trunk / Human figure */}
        <path d="M60 80c6-10 8-18 8-22 0-7-4-12-8-12s-8 5-8 12c0 4 2 12 8 22Z" fill="#065f46" />
        <circle cx="60" cy="40" r="6" fill="#064e3b" />
        {/* Branch people */}
        <g fill="url(#leafGrad)">
          <path d="M60 56c12-10 24-12 38-10-10 6-18 14-28 20-4 2-7 0-10-2Z" />
          <path d="M60 56c-12-10-24-12-38-10 10 6 18 14 28 20 4 2 7 0 10-2Z" />
        </g>
        {/* Leaves */}
        <g fill="#10b981" opacity="0.9">
          <circle cx="86" cy="44" r="6" />
          <circle cx="98" cy="54" r="5" />
          <circle cx="34" cy="44" r="6" />
          <circle cx="22" cy="54" r="5" />
        </g>
      </svg>
      <div className="leading-tight">
        <p className="text-sm tracking-wide text-gray-900">
          <span className="font-semibold text-black">AUROVIS</span>{' '}
          <span className="font-semibold text-sky-700">GLOBAL</span>{' '}
          <span className="text-xs align-top text-gray-600">PVT LTD</span>
        </p>
        <p className="text-[10px] text-emerald-700">Advancing Growth & Sustainability</p>
      </div>
    </div>
  );
};

export default CompanyHeader;
