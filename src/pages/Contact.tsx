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

      <section style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0 2rem', marginBottom: '2.5rem' }}>
        <div style={{ width: '100%', maxWidth: '980px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '1.5rem', padding: '2rem', backdropFilter: 'blur(20px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <span className="section-pill">Company Profile</span>
              <h2 style={{ marginTop: '0.75rem' }}>
                Get to know LIAM6
              </h2>
              <p style={{ color: 'hsl(var(--muted-foreground))', marginTop: '1rem', lineHeight: 1.8 }}>
                A trusted partner in the global spice trade since 2010, exporting high-quality ginger and dry ginger to buyers around the world.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div style={{ padding: '1.25rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.04)' }}>
                <h3 style={{ marginBottom: '0.75rem', color: 'hsl(var(--foreground))' }}>Company Name</h3>
                <p>LIAM6 Exports & Agro</p>
              </div>
              <div style={{ padding: '1.25rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.04)' }}>
                <h3 style={{ marginBottom: '0.75rem', color: 'hsl(var(--foreground))' }}>Head Office</h3>
                <p>Chikmagalur, Karnataka, India</p>
              </div>
              <div style={{ padding: '1.25rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.04)' }}>
                <h3 style={{ marginBottom: '0.75rem', color: 'hsl(var(--foreground))' }}>Website</h3>
                <p>www.liam6.com</p>
              </div>
              <div style={{ padding: '1.25rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.04)' }}>
                <h3 style={{ marginBottom: '0.75rem', color: 'hsl(var(--foreground))' }}>Email</h3>
                <p>hello@liam6.com</p>
              </div>
              <div style={{ padding: '1.25rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.04)' }}>
                <h3 style={{ marginBottom: '0.75rem', color: 'hsl(var(--foreground))' }}>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div style={{ padding: '1.25rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.04)' }}>
                <h3 style={{ marginBottom: '0.75rem', color: 'hsl(var(--foreground))' }}>Business Hours</h3>
                <p>Mon–Sat, 9AM–7PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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