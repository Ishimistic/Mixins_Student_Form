import React from 'react';
import CheckCircle from '../components/icons/CheckCircle';

function SuccessPage({ formData, onReset }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Registration Successful!
        </h2>
        
        <div className="text-left bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6">
          <div className="space-y-3">
            <p><span className="font-semibold text-blue-800">Name:</span> {formData.fullName}</p>
            <p><span className="font-semibold text-blue-800">Age:</span> {formData.age} years</p>
            <p><span className="font-semibold text-blue-800">DOB:</span> {new Date(formData.dateOfBirth).toLocaleDateString()}</p>
            <p><span className="font-semibold text-blue-800">Branch:</span> {formData.branch}</p>
            <p><span className="font-semibold text-blue-800">Address:</span> {formData.address}</p>
          </div>
        </div>
        
        <button
          onClick={onReset}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Register Another Student
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;