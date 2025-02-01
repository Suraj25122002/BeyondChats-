import React, { useState } from 'react';
import { Check, AlertCircle, Mail, Copy, Share2, Globe, Chrome } from 'lucide-react';
import './flow.css';

const RegistrationFlow = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [integrationSuccess, setIntegrationSuccess] = useState(false);
  
  const scrapedPages = [
    { url: '/home', status: 'completed', chunks: 15 },
    { url: '/about', status: 'completed', chunks: 8 },
    { url: '/products', status: 'pending', chunks: 0 },
    { url: '/contact', status: 'in_progress', chunks: 3 },
  ];

  const [selectedPage, setSelectedPage] = useState(null);
  
  const pageChunks = {
    '/home': [
      'Welcome to our company. We provide innovative solutions...',
      'Our mission is to transform the industry through...',
      'Contact us today to learn more about our services...',
    ],
    '/about': [
      'Founded in 2020, we have grown to become...',
      'Our team consists of experts in...',
      'We value customer satisfaction above all...',
    ],
  };

  const renderStep1 = () => (
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

  const renderStep2 = () => (
    <div className="registration-step">
      <h2 className="step-title">Setup Organization</h2>
      <div className="form-container">
        <input type="text" placeholder="Company Name" className="form-input" />
        <input type="url" placeholder="Website URL" className="form-input" />
        <textarea placeholder="Company Description" className="form-textarea" />
        
        <div className="scraping-status">
          <h3 className="section-title">Website Scraping Status</h3>
          <div className="page-list">
            {scrapedPages.map((page) => (
              <div
                key={page.url}
                onClick={() => setSelectedPage(page.url)}
                className="page-item"
              >
                <span className="page-url">
                  <Globe size={16} />
                  {page.url}
                </span>
                <span className={`status-badge ${page.status}`}>
                  {page.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {selectedPage && (
          <div className="scraped-content">
            <h3 className="section-title">Scraped Content for {selectedPage}</h3>
            <div className="chunk-list">
              {pageChunks[selectedPage]?.map((chunk, index) => (
                <div key={index} className="chunk-item">
                  {chunk}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
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
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
                setIntegrationSuccess(true);
              }, 2000);
            }}
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
            <div className="success-actions">
              <button className="primary-button">Explore Admin Panel</button>
              <button className="secondary-button">Start talking to your chatbot</button>
              <div className="share-button-container">
                <button className="share-button">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
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

  const renderStepIndicator = () => (
    <div className="step-indicator">
      {[1, 2, 3].map((stepNumber) => (
        <div key={stepNumber} className={`step-item ${stepNumber < 3 ? 'with-line' : ''}`}>
          <div className={`step-number ${step >= stepNumber ? 'active' : ''}`}>
            {step > stepNumber ? <Check size={16} /> : stepNumber}
          </div>
          {stepNumber < 3 && (
            <div className={`step-line ${step > stepNumber ? 'active' : ''}`} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="registration-flow">
      {renderStepIndicator()}
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      
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
          disabled={step === 3}
          className="nav-button next"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RegistrationFlow;