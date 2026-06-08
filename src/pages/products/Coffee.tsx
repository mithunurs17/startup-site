import React from 'react';
import { Link } from 'react-router-dom';

export default function Coffee() {
  return (
    <section className="products-section">
      <div className="section-intro">
        <span className="section-pill">Specialty Coffee</span>
        <h2>
          Specialty Coffee<br />
          <span>Carefully sourced beans</span>
        </h2>
        <p>
          High-grade Arabica and Robusta beans sourced from select estates, carefully processed and graded to international cupping standards.
        </p>
      </div>

      <div className="product-card" style={{display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap'}}>
        <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=60" alt="Coffee" style={{width: '320px', borderRadius: 12, objectFit: 'cover'}} />
        <div style={{flex: 1}}>
          <h3>Overview</h3>
          <p style={{color: 'hsl(var(--muted-foreground))'}}>
            We supply specialty grade coffee, available as green beans or roasted lots. Options for single-origin and traceable lots are available for buyers seeking premium profiles.
          </p>

          <h3 style={{marginTop: '1rem'}}>Specifications</h3>
          <ul>
            <li>Origin: single-origin lots available</li>
            <li>Grades: specialty, commercial</li>
            <li>Packing: jute, grainpro, or custom</li>
          </ul>

          <div style={{marginTop: '1.25rem'}}>
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
