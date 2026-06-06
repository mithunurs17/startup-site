import React from 'react';

export default function About() {
  return (
    <>
      <section className="about-section">
        <div className="section-intro">
          <span className="section-pill">About Us</span>
          <h2>
            Leading the way in premium <span>ginger & dry ginger exports</span>
          </h2>
          <p>
            LIAM6 Exports & Agro has grown from a small trading company into a trusted exporter of premium
            ginger and dry ginger, supplying spice buyers and food brands across the globe.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="icon-glow">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To deliver consistently high-quality ginger and dry ginger to global buyers through ethical
              sourcing and strict quality control.
            </p>
          </article>
          <article className="feature-card">
            <div className="icon-glow">💡</div>
            <h3>Our Vision</h3>
            <p>
              To be a globally recognized name in the spice trade, known for reliability, transparency,
              and premium ginger products.
            </p>
          </article>
          <article className="feature-card">
            <div className="icon-glow">🤝</div>
            <h3>Our Values</h3>
            <p>
              Integrity, long-term relationships, and farmer partnerships are at the heart of LIAM6.
              We grow together with our partners.
            </p>
          </article>
        </div>

        <section className="trust-section">
          <div className="trust-panel">
            <div className="trust-logo">LIAM6</div>
            <div>
              <h3>Why Choose LIAM6 for Ginger?</h3>
              <p>
                From careful selection at the farm level to cleaning, drying, grading, and export logistics,
                we manage every step to ensure top-grade ginger and dry ginger reach you on time and in the quality you expect.
              </p>
            </div>
          </div>
          <ul className="trust-list">
            <li>Strict quality checks at every stage</li>
            <li>Reliable, on-time shipments</li>
            <li>Custom packaging and sizing options</li>
            <li>Long-term partnership approach</li>
          </ul>
        </section>
      </section>
    </>
  );
}
