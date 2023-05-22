import React from 'react';
import './cta.css';

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
    <a onClick={()=>{ alert('Early Access coming soon'); }}>
      <p>Request Early Access to Get Started</p>

      </a>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button">Get Started</button>
    </div>
  </div>
);

export default CTA;
