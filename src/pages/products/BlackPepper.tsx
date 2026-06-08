import React from 'react';
import { Link } from 'react-router-dom';

export default function BlackPepper() {
  return (
    <section className="products-section">
      <div className="section-intro">
        <span className="section-pill">Black Pepper</span>
        <h2>
          Black Pepper<br />
          <span>Premium Malabar pepper</span>
        </h2>
        <p>
          Premium Malabar black pepper with exceptional piperine levels, machine-cleaned and sortex-graded for consistent quality and visual appeal.
        </p>
      </div>

      <div className="product-card" style={{display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap'}}>
        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60" alt="Black Pepper" style={{width: '320px', borderRadius: 12, objectFit: 'cover'}} />
        <div style={{flex: 1}}>
          <h3>Overview</h3>
          <p style={{color: 'hsl(var(--muted-foreground))'}}>
            Our black pepper is cleaned, graded and sorted to meet export standards. Suitable for spice processors, food manufacturers, and bulk traders.
          </p>

          <h3 style={{marginTop: '1rem'}}>Specifications</h3>
          <ul>
            <li>Grades: Malabar whole pepper</li>
            <li>Packing: fiber drums, valve bags</li>
            <li>Certifications: export documentation available</li>
          </ul>

          <div style={{marginTop: '1.25rem'}}>
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
