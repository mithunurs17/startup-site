import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const updateForm = (field: string, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    setStatus('');
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Message sent — our global trade team will respond within 24 hours.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="section-intro centered">
        <span className="section-pill">Contact</span>
        <h2>Let's <span>discuss ginger</span></h2>
        <p>
          Share your ginger and dry ginger requirements and our team will get back with details on quality, pricing, and shipment options.
        </p>
      </div>

      <form className="contact-form" onSubmit={submitForm}>
        <label>
          Name
          <input value={form.name} onChange={(e) => updateForm('name', e.target.value)} placeholder="Your name" required />
        </label>
        <label>
          Email
          <input type="email" value={form.email} onChange={(e) => updateForm('email', e.target.value)} placeholder="your@email.com" required />
        </label>
        <label>
          Message
          <textarea value={form.message} onChange={(e) => updateForm('message', e.target.value)} placeholder="Tell us about your ginger and dry ginger requirements..." rows={5} required />
        </label>
        <button type="submit" className="button button-primary button-lg">Send Message</button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
}
