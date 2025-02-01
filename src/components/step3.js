import React, { useState } from 'react';
import { Copy, Mail, Share2, AlertCircle } from 'lucide-react';
import "./step3.css"

const Step3 = () => {
  const [loading, setLoading] = useState(false);
  const [integrationSuccess, setIntegrationSuccess] = useState(false);

  const handleIntegrationTest = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIntegrationSuccess(true);
    }, 2000);
  };

  return (
    <div className="registration-step">
      <h2 className="step-title">Chatbot Integration & Testing</h2>
      <div className="integration-container">
        <div className="integration-grid">
          <button onClick={() => window.open('#', '_blank')} className="preview-button">
            <h3 className="button-title">Test Chatbot</h3>
            <p className="button-description">Preview your chatbot in action</p>
          </button>

          <div className="integration-box">
            <h3 className="button-title">Integrate on your website</h3>
            <div className="button-group">
              <button className="primary-button">
                <Copy size={16} />
                Copy Integration Code
              </button>
              <button className="secondary-button">
                <Mail size={16} />
                Email to Developer
              </button>
            </div>
          </div>
        </div>

        <div className="test-integration">
          <button
            onClick={handleIntegrationTest}
            className="test-button"
            disabled={loading}
          >
            {loading ? 'Testing Integration...' : 'Test Integration'}
          </button>
        </div>

        {integrationSuccess ? (
          <div className="success-message">
            <div className="success-emoji">🎉</div>
            <h3 className="success-title">Integration Successful!</h3>
          </div>
        ) : !loading && (
          <div className="error-message">
            <AlertCircle className="error-icon" />
            <span>Integration not detected. Please make sure you've added the code snippet to your website.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step3;
