import React from 'react';

const stats = [
  { label: 'MT Ginger Exported', value: '5,000+' },
  { label: 'Native Buyers', value: '200+' },
  { label: 'Years in Spice Trade', value: '25+' },
];

export default function Home() {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-copy">
          <span className="hero-tag">Introducing LIAM6 Exports & Agro</span>
          <h1>
            Premium <span>ginger</span> and <span>dry ginger</span> for the world
          </h1>
          <p>
            LIAM6 Exports & Agro specializes in sourcing, processing, and exporting high-quality ginger
            and dry ginger. From farms to global markets, we ensure consistent quality, timely shipments,
            and trusted partnerships.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button button-primary">
              Get Started
            </a>
            <a href="/products" className="button button-outline">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-stats-card">
          {stats.map((item) => (
            <div key={item.label} className="stat-item">
              <span className="stat-value">{item.value}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

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
      </section>
    </>
  );
}
