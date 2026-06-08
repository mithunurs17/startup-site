import React from 'react';

export default function About() {
  return (
    <section className="about-section">
      <div className="section-intro">
        <span className="section-pill">About Us</span>
        <h2>
          Built on trust,<br />
          <span>grown through quality</span>
        </h2>
        <p>
          LIAM6 Exports &amp; Agro has grown from a small trading company into a globally trusted
          exporter of premium ginger and dry ginger — supplying spice buyers and food brands across continents.
        </p>
      </div>

      <div className="feature-grid">
        <article className="feature-card">
          <div className="icon-glow">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To deliver consistently high-quality ginger and dry ginger to global buyers through ethical
            sourcing, rigorous quality control, and transparent trade practices.
          </p>
        </article>
        <article className="feature-card">
          <div className="icon-glow">💡</div>
          <h3>Our Vision</h3>
          <p>
            To be a globally recognized name in the premium spice trade — known for reliability,
            quality consistency, and a deep understanding of our buyers' needs.
          </p>
        </article>
        <article className="feature-card">
          <div className="icon-glow">🤝</div>
          <h3>Our Values</h3>
          <p>
            Integrity, long-term relationships, and farmer partnerships are at the core of everything
            we do. When our farmers thrive, our buyers benefit — we grow together.
          </p>
        </article>
      </div>

      <div className="trust-section">
        <div>
          <div className="trust-logo">L6</div>
          <h3>Why Choose LIAM6 for Ginger?</h3>
          <p>
            From careful selection at the farm level to cleaning, drying, grading, and export logistics —
            we manage every step to ensure top-grade ginger reaches you on time, in perfect condition,
            with all trade documentation in order.
          </p>
        </div>
        <ul className="trust-list">
          <li>Strict multi-stage quality checks from farm to container</li>
          <li>Reliable, on-time shipments with full tracking</li>
          <li>Custom packaging, sizing, and labeling options</li>
          <li>Complete trade documentation: phytosanitary, COA, certificates of origin</li>
          <li>Long-term partnership approach with dedicated account managers</li>
        </ul>
      </div>
    </section>
  );
}