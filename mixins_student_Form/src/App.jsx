import React, { useState } from 'react';
import StudentForm from './pages/StudentForm';
import SuccessPage from './pages/SuccessPage';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
    setIsSubmitted(true);
    console.log('Form submitted successfully:', formData);
  };

  const handleReset = () => {
    setSubmittedData({});
    setIsSubmitted(false);
  };

  return (
    <>
      {isSubmitted ? (
        <SuccessPage 
          formData={submittedData} 
          onReset={handleReset} 
        />
      ) : (
        <StudentForm onSubmit={handleFormSubmit} />
      )}
    </>
  );
}

export default App;