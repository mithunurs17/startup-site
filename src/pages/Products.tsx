import React from 'react';
import { Link } from 'react-router-dom';

const productCards = [
  {
    title: 'Fresh Ginger',
    description: 'Vibrant, aromatic fresh ginger hand-selected from farms in prime growing regions. Available in multiple size grades with full phytosanitary certification.',
    features: ['Grade A & AA Varieties', 'Phytosanitary Certified', 'Custom Sizing Available'],
    icon: '🌿',
    slug: 'ginger',
  },
  {
    title: 'Specialty Coffee',
    description: 'High-grade Arabica and Robusta beans sourced from select estates, carefully processed and graded to international cupping standards.',
    features: ['Single Origin Lots', 'Green & Roasted Options', 'Q-Grader Assessed'],
    icon: '☕',
    slug: 'coffee',
  },
  {
    title: 'Black Pepper',
    description: 'Premium Malabar black pepper with exceptional piperine levels, machine-cleaned and sortex-graded for consistent quality and visual appeal.',
    features: ['High Piperine Content', 'Sortex Cleaned', 'FSSAI & ASTA Graded'],
    icon: '🌑',
    slug: 'black-pepper',
  },
];

export default function Products() {
  return (
    <section className="products-section">
      <div className="section-intro">
        <span className="section-pill">Our Products</span>
        <h2>
          Premium agricultural<br />
          <span>exports, worldwide</span>
        </h2>
        <p>
          Each product we offer meets international trade standards with full traceability,
          documentation, and quality certification for seamless import clearance.
        </p>
      </div>

      <div className="product-grid">
        {productCards.map((product) => (
          <article key={product.title} className="product-card" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
              <div style={{width: 160, height: 160, borderRadius: 12, background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem'}}>{product.icon}</div>
            </div>
            <div style={{width: '100%', marginTop: '1rem'}}>
              <h3>{product.title}</h3>
              <p style={{color: 'hsl(var(--muted-foreground))', marginTop: '0.5rem'}}>{product.description}</p>
              <ul style={{listStyle: 'none', padding: 0, marginTop: '0.75rem'}}>
                {product.features.map((f) => (
                  <li key={f} style={{marginTop: '0.5rem'}}>{f}</li>
                ))}
              </ul>
              <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'center'}}>
                <Link to={`/products/${product.slug}`} className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="cta-banner">
        <p>Need custom specifications, bulk quantities, or private label options?</p>
        <Link to="/contact" className="btn btn-primary">
          Contact Us for a Quotation
        </Link>
      </div>
    </section>
  );
}