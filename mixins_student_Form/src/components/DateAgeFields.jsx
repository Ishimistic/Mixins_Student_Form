import React from 'react';
import Calendar from './icons/Calendar';
import User from './icons/User';
import AlertCircle from './icons/AlertCircle';

function DateAgeFields({ dateOfBirth, age, onChange, error }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
          <Calendar className="w-4 h-4 mr-2 text-blue-500" />
          Date of Birth
        </label>
        <input
          type="date"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
            error 
              ? 'border-red-300 bg-red-50 focus:border-red-500' 
              : 'border-blue-200 bg-blue-50 focus:border-blue-500'
          } focus:outline-none focus:ring-4 focus:ring-blue-100`}
        />
        {error && (
          <p className="flex items-center text-sm text-red-600 mt-1">
            <AlertCircle className="w-4 h-4 mr-1" />
            {error}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
          <User className="w-4 h-4 mr-2 text-blue-500" />
          Age
        </label>
        <div className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 bg-gray-100 text-gray-700 font-medium">
          {age ? `${age} years` : 'Auto-calculated'}
        </div>
      </div>
    </div>
  );
}

export default DateAgeFields;