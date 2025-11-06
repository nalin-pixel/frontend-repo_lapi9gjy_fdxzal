import React from 'react';

const EmployeeInfo = ({ name, designation, employeeId }) => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-extrabold text-emerald-800 tracking-wide">{name}</h2>
      <p className="text-sm text-gray-800 -mt-0.5">{designation}</p>
      <div className="mt-3 text-xs font-medium text-emerald-900/90">{employeeId}</div>
    </div>
  );
};

export default EmployeeInfo;
