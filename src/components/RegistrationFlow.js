import React, { useState } from 'react';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import StepIndicator from './StepIndicator';

const RegistrationFlow = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  return (
    <div className="registration-flow">
      <StepIndicator step={step} totalSteps={totalSteps} />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      <div className="navigation-buttons">
        <button
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
          className="nav-button prev"
        >
          Previous
        </button>
        <button
          onClick={() => setStep(step + 1)}
          disabled={step === totalSteps}
          className="nav-button next"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RegistrationFlow;
