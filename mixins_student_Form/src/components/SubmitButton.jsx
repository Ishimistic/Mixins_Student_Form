import React from 'react';

function SubmitButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      Register Student
    </button>
  );
}

export default SubmitButton;