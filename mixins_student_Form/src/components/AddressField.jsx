import React from 'react';
import MapPin from './icons/MapPin';
import AlertCircle from './icons/AlertCircle';

function AddressField({ value, onChange, error }) {
  return (
    <div className="space-y-2">
      <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
        <MapPin className="w-4 h-4 mr-2 text-blue-500" />
        Address
      </label>
      <textarea
        name="address"
        value={value}
        onChange={onChange}
        rows="4"
        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 resize-none ${
          error 
            ? 'border-red-300 bg-red-50 focus:border-red-500' 
            : 'border-blue-200 bg-blue-50 focus:border-blue-500'
        } focus:outline-none focus:ring-4 focus:ring-blue-100`}
        placeholder="Enter your complete address (minimum 10 characters)"
      />
      <div className="flex justify-between items-center">
        {error && (
          <p className="flex items-center text-sm text-red-600">
            <AlertCircle className="w-4 h-4 mr-1" />
            {error}
          </p>
        )}
        <p className="text-sm text-gray-500 ml-auto">
          {value.length}/10 characters
        </p>
      </div>
    </div>
  );
}

export default AddressField;