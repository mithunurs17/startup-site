import React from 'react';
import { Link } from 'react-router-dom';

const productCards = [
  {
    title: 'Fresh Ginger',
    description: 'Vibrant, aromatic fresh ginger hand-selected from farms in prime growing regions. Available in multiple size grades with full phytosanitary certification.',
    features: ['Grade A & AA Varieties', 'Phytosanitary Certified', 'Custom Sizing Available'],
    icon: '🌿',
  },
  {
    title: 'Dry Ginger',
    description: 'Sun-dried and mechanically dried ginger with low moisture content, high volatile oil, and rich pungency — ideal for spice processors and food manufacturers.',
    features: ['Low Moisture (<10%)', 'High Volatile Oil', 'Whole, Split & Powder'],
    icon: '🫛',
  },
  {
    title: 'Specialty Coffee',
    description: 'High-grade Arabica and Robusta beans sourced from select estates, carefully processed and graded to international cupping standards.',
    features: ['Single Origin Lots', 'Green & Roasted Options', 'Q-Grader Assessed'],
    icon: '☕',
  },
  {
    title: 'Black Pepper',
    description: 'Premium Malabar black pepper with exceptional piperine levels, machine-cleaned and sortex-graded for consistent quality and visual appeal.',
    features: ['High Piperine Content', 'Sortex Cleaned', 'FSSAI & ASTA Graded'],
    icon: '🌑',
  },
];

export default function Products() {
  return (
    <section className="products-section">
      <div className="section-intro">
        <span className="section-pill">Our Products</span>
        <h2>
          Premium agricultural<br/>
          <span>exports, worldwide</span>
        </h2>
        <p>
          Each product we offer meets international trade standards with full traceability,
          documentation, and quality certification for seamless import clearance.
        </p>
      </div>

      <div className="product-grid">
        {productCards.map((product) => (
          <article key={product.title} className="product-card">
            <div className="product-icon">{product.icon}</div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <ul>
              {product.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="cta-banner">
        <p>Need custom specifications, bulk quantities, or private label options?</p>
        <Link to="/contact" className="button button-primary">Contact Us for a Quotation</Link>
      </div>
    </section>
  );
}