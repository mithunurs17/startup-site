import React from 'react';

export default function Privacy() {
  return (
    <section className="about-section">
      <div className="section-intro">
        <span className="section-pill">Privacy Policy</span>
        <h2>
          Our commitment to<br />
          <span>data privacy</span>
        </h2>
        <p>
          LIAM6 respects the privacy of our customers and site visitors. We collect only the information needed to respond to enquiries and improve our services.
        </p>
      </div>

      <div className="feature-grid">
        <article className="feature-card">
          <div className="icon-glow">🔒</div>
          <h3>Data Collection</h3>
          <p>
            We collect contact details and enquiry information only when you submit a request through our site.
          </p>
        </article>
        <article className="feature-card">
          <div className="icon-glow">🧾</div>
          <h3>Use of Information</h3>
          <p>
            Information is used to respond to enquiries, prepare quotations, and provide better service.
          </p>
        </article>
        <article className="feature-card">
          <div className="icon-glow">🚫</div>
          <h3>Third Parties</h3>
          <p>
            We do not sell your personal data. We share information only with trusted service providers required for enquiry handling.
          </p>
        </article>
      </div>
    </section>
  );
}
