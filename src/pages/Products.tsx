import React from 'react';

const productCards = [
  {
    title: 'Ginger',
    description:
      'Premium fresh and dry ginger sourced from trusted farms, processed for export-grade consistency and aroma.',
    features: ['Fresh & Dry Varieties', 'Export Grade Quality'],
    icon: '🌿',
  },
  {
    title: 'Coffee',
    description:
      'High-grade Arabica and Robusta coffee beans carefully roasted and packed to preserve freshness and flavor.',
    features: ['Single Origin Blends', 'Custom Roasting'],
    icon: '☕',
  },
  {
    title: 'Black Pepper',
    description:
      'Premium black pepper with high piperine content, dried and graded for consistent global market standards.',
    features: ['High Piperine Content', 'Selective Sourcing'],
    icon: '🧂',
  },
];

export default function Products() {
  return (
    <section className="products-section">
      <div className="section-intro">
        <span className="section-pill">Our Products</span>
        <h2>
          Premium Agricultural <span>Exports</span>
        </h2>
        <p>
          LIAM6 Exports & Agro offers a range of premium agricultural products sourced from trusted farms
          and processed to international standards.
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
        <p>Need custom specifications or bulk quantities?</p>
        <a href="#contact" className="button button-primary">
          Contact Us for Quotation
        </a>
      </div>
    </section>
  );
}
