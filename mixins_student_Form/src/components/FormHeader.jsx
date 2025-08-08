import React from 'react';
import GraduationCap from './icons/GraduationCap';

function FormHeader() {
  return (
    <div className="text-center mb-8">
      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <GraduationCap className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
        Student Registration
      </h1>
      <p className="text-gray-600 text-lg">Please fill in your details below</p>
    </div>
  );
}

export default FormHeader;