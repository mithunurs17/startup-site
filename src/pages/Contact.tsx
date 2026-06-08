import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', product: '', message: '' });
  const [status, setStatus] = useState('');

  const updateForm = (field: string, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    setStatus('');
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus('Sending enquiry...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('Enquiry sent successfully to mithunursmithun@gmail.com.');
        setForm({ name: '', company: '', email: '', product: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => null);
        console.error('Contact API error', errorData);
        setStatus(errorData?.error || 'Unable to send enquiry. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Unable to send enquiry. Please check your connection and try again.');
    }
  };

  return (
    <section className="contact-section">
      <div className="section-intro centered">
        <span className="section-pill">Get in Touch</span>
        <h2>
          Let's discuss your<br />
          <span>ginger requirements</span>
        </h2>
        <p>
          Share your product requirements and our team will respond with quality specifications,
          pricing, and shipment details within one business day.
        </p>
      </div>

      <form className="contact-form" onSubmit={submitForm}>
        <label>
          Your Name
          <input name="name" value={form.name} onChange={(e) => updateForm('name', e.target.value)} placeholder="Jane Smith" required />
        </label>
        <label>
          Company / Organization
          <input name="company" value={form.company} onChange={(e) => updateForm('company', e.target.value)} placeholder="Spice Traders Ltd." />
        </label>
        <label>
          Business Email
          <input name="email" type="email" value={form.email} onChange={(e) => updateForm('email', e.target.value)} placeholder="jane@company.com" required />
        </label>
        <label>
          Product of Interest
          <input name="product" value={form.product} onChange={(e) => updateForm('product', e.target.value)} placeholder="e.g. Dry Ginger, Fresh Ginger, Black Pepper..." />
        </label>
        <label>
          Your Requirements
          <textarea name="message" value={form.message} onChange={(e) => updateForm('message', e.target.value)} placeholder="Tell us about quantity, grade, packaging, destination port, and timeline..." rows={5} required />
        </label>
        <button type="submit" className="btn btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1rem', borderRadius: '0.75rem' }}>
          Send Enquiry
        </button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
}