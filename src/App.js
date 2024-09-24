import './App.css';
import React, { useState } from 'react';

const App = () => {
  // State for password and password strength feedback
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const criteria = [
    {
      regex: /^(?=.*[a-z])/,
      label: "At least one lowercase letter"
    },
    {
      regex: /^(?=.*[A-Z])/,
      label: "At least one uppercase letter"
    },
    {
      regex: /^(?=.*\d)/,
      label: "At least one digit"
    },
    {
      regex: /^(?=.*[@$!%*?&#])/,
      label: "At least one special character (@$!%*?&#)"
    },
    {
      regex: /^(?=.*[a-zA-Z\d@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      label: "Minimum 8 characters"
    }
  ];

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Check password strength by matching it against criteria
    const passedCriteria = criteria.filter(criterion => criterion.regex.test(newPassword)).length;

    // Use switch case to set password strength based on the number of criteria passed
    switch (passedCriteria) {
      case 5:
        setPasswordStrength("Very Strong");
        break;
      case 4:
        setPasswordStrength("Strong");
        break;
      case 3:
        setPasswordStrength("Medium");
        break;
      case 2:
        setPasswordStrength("Weak");
        break;
      case 1:
        setPasswordStrength("Very Weak");
        break;
      default:
        setPasswordStrength("Invalid");
        break;
    }
  };

  return (
    <div className="App">
      <h1>Enter Your Password To Check Its Strength:</h1>
      <input 
        type='password' 
        onChange={handlePasswordChange} 
        placeholder='Enter Your Password Here'
      />
      <h2>Password Strength: {passwordStrength}</h2>
    </div>
  );
}

export default App;
