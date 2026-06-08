import React from 'react';

export default function Terms() {
  return (
    <section className="about-section">
      <div className="section-intro">
        <span className="section-pill">Terms of Service</span>
        <h2>
          LIAM6 service<br />
          <span>terms and conditions</span>
        </h2>
        <p>
          These terms govern your use of the LIAM6 website and services. By submitting an enquiry, you agree to our general business terms and communication practices.
        </p>
      </div>

      <div className="feature-grid">
        <article className="feature-card">
          <div className="icon-glow">📌</div>
          <h3>Enquiry Use</h3>
          <p>
            Enquiries submitted through the site are used to provide quotes and sales support for LIAM6 products.
          </p>
        </article>
        <article className="feature-card">
          <div className="icon-glow">📦</div>
          <h3>Product Information</h3>
          <p>
            Product descriptions and specifications are provided for reference and may be updated to reflect current export availability.
          </p>
        </article>
        <article className="feature-card">
          <div className="icon-glow">🤝</div>
          <h3>Limitation of Liability</h3>
          <p>
            LIAM6 is not responsible for indirect losses resulting from use of this site. Individual trade agreements are governed by separate contracts.
          </p>
        </article>
      </div>
    </section>
  );
}
