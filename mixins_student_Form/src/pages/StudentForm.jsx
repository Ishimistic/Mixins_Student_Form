import React, { useState, useEffect } from 'react';
import FormHeader from '../components/FormHeader';
import NameField from '../components/NameField';
import DateAgeFields from '../components/DateAgeFields';
import BranchField from '../components/BranchField';
import AddressField from '../components/AddressField';
import SubmitButton from '../components/SubmitButton';
import { calculateAge, validateForm } from '../utils/FormUtility';

function StudentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    address: '',
    branch: '',
    age: ''
  });

  const [errors, setErrors] = useState({});

  // Auto-calculate age when DOB changes
  useEffect(() => {
    if (formData.dateOfBirth) {
      const calculatedAge = calculateAge(formData.dateOfBirth);
      setFormData(prev => ({ ...prev, age: calculatedAge }));
    } else {
      setFormData(prev => ({ ...prev, age: '' }));
    }
  }, [formData.dateOfBirth]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = () => {
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <FormHeader />
        
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="space-y-6">
            
            <NameField 
              value={formData.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
            />

            <DateAgeFields 
              dateOfBirth={formData.dateOfBirth}
              age={formData.age}
              onChange={handleInputChange}
              error={errors.dateOfBirth}
            />

            <BranchField 
              value={formData.branch}
              onChange={handleInputChange}
              error={errors.branch}
            />

            <AddressField 
              value={formData.address}
              onChange={handleInputChange}
              error={errors.address}
            />

            <SubmitButton onClick={handleSubmit} />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentForm;