import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  useScrollReveal();
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb reveal">
            <Link to="/">Home</Link><span className="sep">/</span><span className="current">Contact</span>
          </div>
          <h1 className="reveal">Let's Start a <span className="text-accent"><em>Conversation</em></span></h1>
          <p className="section-description reveal stagger-1" style={{ marginTop: '20px' }}>
            Whether you have a specific inquiry or want to explore partnership opportunities — we're here to help.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 'clamp(40px, 5vw, 60px)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
            <div className="contact-info-card reveal stagger-1">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <h4>Email Us</h4>
                <p><a href="mailto:info@insectatechexports.com">info@insectatechexports.com</a></p>
              </div>
            </div>
            <div className="contact-info-card reveal stagger-2">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h4>Call Us</h4>
                <p><a href="tel:+917396600115">+91 73966 00115</a></p>
              </div>
            </div>
            <div className="contact-info-card reveal stagger-3">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4>Visit Us</h4>
                <p>Cherlapally Industrial Area,<br />Hyderabad, Telangana 500051, India</p>
              </div>
            </div>
            <div className="contact-info-card reveal stagger-4">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <h4>Business Hours</h4>
                <p>Mon — Sat: 9:00 AM — 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="section-label reveal">Send a Message</div>
              <h2 className="section-heading reveal" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>Get in <span className="text-accent">Touch</span></h2>
              <p className="reveal stagger-1" style={{ marginBottom: '32px', color: 'var(--color-text-secondary)' }}>Fill out the form below and our export team will respond within 24 business hours.</p>

              <form id="contact-form" onSubmit={handleSubmit} className="reveal stagger-2">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Your first name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Your last name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" placeholder="your@email.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="+1 234 567 8900" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" name="company" placeholder="Your company name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="product">Product Interest</label>
                    <select id="product" name="product">
                      <option value="">Select a category</option>
                      <option value="agri">Agri Commodities & Food</option>
                      <option value="feed">Animal Feed Ingredients</option>
                      <option value="bioenergy">Bio-Energy & Fertilizers</option>
                      <option value="engineering">Engineering & Industrial</option>
                      <option value="textiles">Textiles & Apparel</option>
                      <option value="healthcare">Healthcare & Wellness</option>
                      <option value="multiple">Multiple Categories</option>
                    </select>
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="message">Your Message *</label>
                    <textarea id="message" name="message" placeholder="Tell us about your requirements, desired quantities, and any specific product interests..." required></textarea>
                  </div>
                  <div className="form-group full-width">
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: formStatus === 'success' ? '#2D6A4F' : '' }} disabled={formStatus === 'submitting' || formStatus === 'success'}>
                      {formStatus === 'success' ? (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Message Sent!
                        </>
                      ) : formStatus === 'submitting' ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div>
              <div className="section-label reveal">Our Location</div>
              <h2 className="section-heading reveal" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>Find <span className="text-accent">Us</span></h2>
              <p className="reveal stagger-1" style={{ marginBottom: '24px', color: 'var(--color-text-secondary)' }}>Visit our office in Hyderabad's Cherlapally Industrial Area — one of Telangana's key industrial corridors.</p>

              <div className="map-wrapper reveal stagger-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.5!3d17.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzAwLjAiTiA3OMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="InsectaTech Exports office location on Google Maps">
                </iframe>
              </div>

              <div className="reveal stagger-3" style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[{ label: 'Response Time', val: 'Within 24 hrs' }, { label: 'Languages', val: 'English, Hindi, Telugu' }, { label: 'Min Order', val: 'Varies by product' }, { label: 'Trade Terms', val: 'FOB, CIF, Ex-Works' }].map(fact => (
                  <div key={fact.label} style={{ padding: '20px', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '6px' }}>{fact.label}</div>
                    <div style={{ fontWeight: 600, color: 'var(--color-text)' }}>{fact.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-heading reveal">Prefer a <em>Direct Call?</em></h2>
            <p className="cta-text reveal stagger-1">Our export specialists are available Monday through Saturday, 9 AM to 6 PM IST. Reach out and let's discuss how we can serve your business.</p>
            <div className="reveal stagger-2">
              <a href="tel:+919876543210" className="btn btn-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
