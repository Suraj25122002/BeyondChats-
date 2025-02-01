import React from 'react';
import { Chrome } from 'lucide-react';
import "./step1.css";

const Step1 = () => {
  return (
    <div className="registration-step">
      <h2 className="step-title">User Registration</h2>
      <div className="form-container">
        <input type="text" placeholder="Full Name" className="form-input" />
        <input type="email" placeholder="Email" className="form-input" />
        <input type="password" placeholder="Password" className="form-input" />
        <button className="primary-button">Register</button>
        <button className="google-button">
          <Chrome size={20} />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Step1;
