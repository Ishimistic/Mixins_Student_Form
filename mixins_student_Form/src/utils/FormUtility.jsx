// Calculate age based on date of birth
export const calculateAge = (dob) => {
  if (!dob) return '';
  
  const today = new Date();
  const birthDate = new Date(dob);
  
  if (birthDate > today) return '';
  
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
};

// Validate form data
export const validateForm = (formData) => {
  const errors = {};

  // Name validation - not empty and only alphabets
  if (!formData.fullName.trim()) {
    errors.fullName = 'Full name is required';
  } else if (!/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
    errors.fullName = 'Name should contain only alphabets and spaces';
  }

  // DOB validation - must be selected and valid past date
  if (!formData.dateOfBirth) {
    errors.dateOfBirth = 'Date of birth is required';
  } else {
    const selectedDate = new Date(formData.dateOfBirth);
    const today = new Date();
    if (selectedDate >= today) {
      errors.dateOfBirth = 'Date of birth must be in the past';
    }
  }

  // Address validation - at least 10 characters
  if (!formData.address.trim()) {
    errors.address = 'Address is required';
  } else if (formData.address.trim().length < 10) {
    errors.address = 'Address must be at least 10 characters long';
  }

  // Branch validation - must be selected
  if (!formData.branch) {
    errors.branch = 'Please select a branch';
  }

  return errors;
};