import React from 'react';
import { Link } from 'react-router-dom';

export default function Ginger() {
  return (
    <section className="products-section">
      <div className="section-intro">
        <span className="section-pill">Fresh Ginger</span>
        <h2>
          Fresh Ginger<br />
          <span>Premium agricultural export</span>
        </h2>
        <p>
          Vibrant, aromatic fresh ginger hand-selected from farms in prime growing regions. Available in multiple size grades with full phytosanitary certification.
        </p>
      </div>

      <div className="product-card" style={{display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap'}}>
        <img src="https://images.unsplash.com/photo-1506807803488-8eafc153e6c4?auto=format&fit=crop&w=1200&q=60" alt="Fresh Ginger" style={{width: '320px', borderRadius: 12, objectFit: 'cover'}} />
        <div style={{flex: 1}}>
          <h3>Overview</h3>
          <p style={{color: 'hsl(var(--muted-foreground))'}}>
            Our fresh ginger is harvested at peak maturity, cleaned, graded and packed to retain maximum flavor and shelf life. We offer customised sizing and packaging to meet buyer specifications.
          </p>

          <h3 style={{marginTop: '1rem'}}>Specifications</h3>
          <ul>
            <li>Moisture: tailored per request</li>
            <li>Packaging: 25kg / 50kg bags, bulk</li>
            <li>Certifications: Phytosanitary, COA on request</li>
          </ul>

          <div style={{marginTop: '1.25rem'}}>
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
