import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  useScrollReveal();

  return (
    <>
      <Helmet>
        <title>About Us | InsectaTech Exports — Hyderabad's Trusted Export House</title>
        <meta name="description" content="Learn about InsectaTech Exports — a Hyderabad-based multi-sector export company with FSSAI, IEC & APEDA certifications. Exporting agri commodities, animal feed, textiles & more to 10+ countries." />
        <link rel="canonical" href="https://insectatechexports.com/about" />
        <meta property="og:url" content="https://insectatechexports.com/about" />
        <meta property="og:title" content="About InsectaTech Exports | Certified Indian Export Company" />
        <meta property="og:description" content="Hyderabad-based multi-sector export house with FSSAI, IEC & APEDA certifications. Serving 10+ countries across agriculture, textiles, bio-energy & more." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://insectatechexports.com/" },
            { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://insectatechexports.com/about" }
          ]
        })}</script>
      </Helmet>

      <section className="page-header">
        <div className="container">
          <div className="breadcrumb reveal">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">About Us</span>
          </div>
          <h1 className="reveal" style={{ maxWidth: '700px' }}>The Story Behind <span className="text-accent"><em>InsectaTech</em></span></h1>
          <p className="section-description reveal stagger-1" style={{ marginTop: '20px' }}>
            Rooted in India's agricultural heartland, built for the global stage — we're redefining multi-sector exports.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper reveal-left">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1000&fit=crop&q=80" alt="Professional team at InsectaTech Exports" width="800" height="1000" loading="lazy" />
            </div>
            <div className="about-text">
              <div className="section-label reveal">Our Story</div>
              <h2 className="section-heading reveal">From a <span className="text-accent">Vision</span> to a Global Presence</h2>
              <p className="reveal stagger-1">
                <span className="highlight">InsectaTech Exports</span> was founded with a simple yet powerful mission — to connect India's vast natural resources and manufacturing excellence with global markets hungry for quality and sustainability.
              </p>
              <p className="reveal stagger-2">
                Headquartered in Hyderabad's Cherlapally Industrial Area, we began as a focused agri-commodity exporter. Recognizing the interconnected potential of India's diverse sectors, we expanded into animal feed, bio-energy, textiles, healthcare, and industrial goods.
              </p>
              <p className="reveal stagger-3">
                Today, we operate across <span className="highlight">six distinct industry verticals</span>, serving clients in over 10 countries. Our growth is driven by an uncompromising commitment to quality standards, sustainable sourcing, and building genuine partnerships that transcend borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}>
            <div className="section-label reveal" style={{ justifyContent: 'center' }}>Our Purpose</div>
            <h2 className="section-heading reveal">Mission & <span className="text-accent">Vision</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '32px' }}>
            <div className="reveal stagger-1" style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: 'clamp(32px, 4vw, 56px)', border: '1px solid var(--color-border-light)' }}>
              <div className="why-icon" style={{ marginBottom: '24px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '16px' }}>Our Mission</h3>
              <p style={{ lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
                To be India's most trusted multi-sector export house by delivering world-class quality, fostering sustainable practices, and building transparent, long-lasting partnerships with global businesses across agriculture, energy, textiles, healthcare, and industry.
              </p>
            </div>
            <div className="reveal stagger-2" style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-lg)', padding: 'clamp(32px, 4vw, 56px)', border: '1px solid var(--color-border-light)' }}>
              <div className="why-icon" style={{ marginBottom: '24px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '16px' }}>Our Vision</h3>
              <p style={{ lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
                To become a global benchmark for ethical, sustainable, and innovative export solutions — empowering Indian producers to reach international markets while contributing to a more sustainable and interconnected global economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'clamp(40px, 6vw, 100px)', alignItems: 'start' }}>
            <div>
              <div className="section-label reveal">Our Journey</div>
              <h2 className="section-heading reveal">Key <span className="text-accent">Milestones</span></h2>
              <p className="reveal stagger-1" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
                Every milestone represents our growth in capability, reach, and commitment to excellence.
              </p>
            </div>
            <div className="timeline reveal">
              <div className="timeline-item">
                <div className="timeline-year">Foundation</div>
                <h4 className="timeline-title">Company Established</h4>
                <p className="timeline-text">InsectaTech Exports was incorporated in Hyderabad with a focus on agri-commodity exports and insect-technology based products.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">Expansion</div>
                <h4 className="timeline-title">Multi-Sector Diversification</h4>
                <p className="timeline-text">Expanded operations into animal feed ingredients, bio-energy, and textiles. Gained FSSAI certification and IEC registration.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">Growth</div>
                <h4 className="timeline-title">International Market Penetration</h4>
                <p className="timeline-text">Established trade relationships across Southeast Asia, Middle East, and Africa. Added healthcare and industrial goods to our portfolio.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">Present</div>
                <h4 className="timeline-title">Scaling Global Partnerships</h4>
                <p className="timeline-text">Operating across 6 industry verticals, serving 10+ countries, and continuously expanding our product range and market reach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}>
            <div className="section-label reveal" style={{ justifyContent: 'center' }}>Trust & Compliance</div>
            <h2 className="section-heading reveal">Certifications & <span className="text-accent">Registrations</span></h2>
            <p className="section-description reveal mx-auto" style={{ textAlign: 'center' }}>
              We maintain the highest standards of regulatory compliance so our partners can trade with complete confidence.
            </p>
          </div>
          <div className="cert-grid">
            <div className="cert-item reveal stagger-1">
              <div className="cert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div className="cert-name">FSSAI Certified</div>
              <div className="cert-desc">Food Safety & Standards Authority of India</div>
            </div>
            <div className="cert-item reveal stagger-2">
              <div className="cert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <div className="cert-name">IEC Registered</div>
              <div className="cert-desc">Import Export Code — DGFT</div>
            </div>
            <div className="cert-item reveal stagger-3">
              <div className="cert-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div className="cert-name">APEDA Compliant</div>
              <div className="cert-desc">Agricultural & Processed Food Products</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-heading reveal">Let's Build Something<br /><em>Extraordinary</em> Together</h2>
            <p className="cta-text reveal stagger-1">Join the growing network of global businesses that trust InsectaTech Exports for quality, reliability, and sustainable trade solutions.</p>
            <div className="reveal stagger-2" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-white">
                Start a Conversation
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link to="/products" className="btn btn-white-outline">View Products</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
