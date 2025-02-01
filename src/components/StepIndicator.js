import React from 'react';
import "./StepIndicator.css";

const StepIndicator = ({ step, totalSteps }) => {
  return (
    <div className="step-indicator">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((stepNumber) => (
        <div key={stepNumber} className={`step-item ${stepNumber < totalSteps ? 'with-line' : ''}`}>
          <div className={`step-number ${step >= stepNumber ? 'active' : ''}`}>
            {step > stepNumber ? '✓' : stepNumber}
          </div>
          {stepNumber < totalSteps && (
            <div className={`step-line ${step > stepNumber ? 'active' : ''}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
