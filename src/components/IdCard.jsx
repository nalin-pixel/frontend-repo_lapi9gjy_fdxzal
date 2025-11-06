import React from 'react';
import { ShieldCheck, QrCode, User } from 'lucide-react';
import CompanyHeader from './CompanyHeader';
import PhotoFrame from './PhotoFrame';
import EmployeeInfo from './EmployeeInfo';
import BackgroundDecor from './BackgroundDecor';

const IdCard = ({ name, designation, employeeId, photoSrc }) => {
  return (
    <div className="relative mx-auto w-full max-w-sm rounded-3xl bg-white shadow-2xl ring-1 ring-emerald-900/10">
      <div className="relative p-5">
        <BackgroundDecor />
        <div className="relative space-y-4">
          <div className="flex items-center justify-between gap-3">
            <CompanyHeader />
            <ShieldCheck className="h-5 w-5 text-emerald-700" aria-hidden />
          </div>

          <PhotoFrame src={photoSrc} alt={`${name} portrait`} />

          <EmployeeInfo name={name} designation={designation} employeeId={employeeId} />

          {/* Footer band */}
          <div className="mt-4 rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 p-3 text-white">
            <div className="flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>Employee Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <QrCode className="h-4 w-4" />
                <span>ID Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
