import React from 'react';
import { Link } from 'react-router-dom';

export default function ExportProcess() {
  return (
    <section className="about-section">
      <div className="section-intro">
        <span className="section-pill">Export Process</span>
        <h2>
          How LIAM6<br />
          <span>exports fresh ginger</span>
        </h2>
        <p>
          We manage the entire export lifecycle from farm selection to international delivery. Our process is designed to protect product quality, ensure regulatory compliance, and deliver trusted shipments on time.
        </p>
      </div>

      <div className="feature-grid">
        <article className="feature-card">
          <div className="icon-glow">🌾</div>
          <h3>Farm Selection</h3>
          <p>
            We source ginger from trusted farms with consistent quality, ethical practices, and strong traceability.
          </p>
        </article>
        <article className="feature-card">
          <div className="icon-glow">🧹</div>
          <h3>Cleaning & Grading</h3>
          <p>
            Every lot is carefully cleaned, sorted, and graded to meet customer specifications and export standards.
          </p>
        </article>
        <article className="feature-card">
          <div className="icon-glow">📦</div>
          <h3>Packing & Documentation</h3>
          <p>
            We prepare packaging, certificates, and compliance documents for seamless customs clearance.
          </p>
        </article>
        <article className="feature-card">
          <div className="icon-glow">✈️</div>
          <h3>Shipping & Delivery</h3>
          <p>
            Our logistics partners handle sea and air freight, providing reliable shipment tracking and timely arrival.
          </p>
        </article>
      </div>

      <div className="cta-banner">
        <p>Ready to export with LIAM6? Our team can tailor the export terms to your market and volume needs.</p>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </div>
    </section>
  );
}
