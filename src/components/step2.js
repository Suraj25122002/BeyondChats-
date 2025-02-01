import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import "./step2.css";

const Step2 = () => {
  const [selectedPage, setSelectedPage] = useState(null);

  const scrapedPages = [
    { url: '/home', status: 'completed', chunks: 15 },
    { url: '/about', status: 'completed', chunks: 8 },
    { url: '/products', status: 'pending', chunks: 0 },
    { url: '/contact', status: 'in_progress', chunks: 3 },
  ];

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

  return (
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
};

export default Step2;
