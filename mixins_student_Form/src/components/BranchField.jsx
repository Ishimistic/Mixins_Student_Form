import React from 'react';
import GraduationCap from './icons/GraduationCap';
import AlertCircle from './icons/AlertCircle';

function BranchField({ value, onChange, error }) {
  const branches = ['CS', 'IT', 'E&TC', 'Mechanical'];

  return (
    <div className="space-y-2">
      <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
        <GraduationCap className="w-4 h-4 mr-2 text-blue-500" />
        Branch
      </label>
      <select
        name="branch"
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
          error 
            ? 'border-red-300 bg-red-50 focus:border-red-500' 
            : 'border-blue-200 bg-blue-50 focus:border-blue-500'
        } focus:outline-none focus:ring-4 focus:ring-blue-100`}
      >
        <option value="">Select your branch</option>
        {branches.map((branch) => (
          <option key={branch} value={branch}>
            {branch}
          </option>
        ))}
      </select>
      {error && (
        <p className="flex items-center text-sm text-red-600 mt-1">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </p>
      )}
    </div>
  );
}

export default BranchField;