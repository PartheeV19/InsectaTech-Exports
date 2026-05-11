import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useScrollReveal from '../hooks/useScrollReveal';
import GlobeComponent from '../components/GlobeComponent';

const Home = ({ isPreloading }) => {
  useScrollReveal();
  const heroRef = useRef(null);

  useEffect(() => {
    if (isPreloading) return;

    // Trigger hero animations after preloading is done
    const heroLabel = document.querySelector('.hero-label');
    const heroWords = document.querySelectorAll('.hero-heading .word-inner');
    const heroDesc = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroImage = document.querySelector('.hero-image-wrapper');
    const heroBadge = document.querySelector('.hero-floating-badge');

    if (heroLabel) {
      heroLabel.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      heroLabel.style.opacity = '1';
    }
    if (heroWords.length) {
      heroWords.forEach((word, i) => {
        setTimeout(() => {
          word.style.transform = 'translateY(0)';
        }, 200 + i * 80);
      });
    }
    if (heroDesc) {
      setTimeout(() => {
        heroDesc.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        heroDesc.style.opacity = '1';
        heroDesc.style.transform = 'translateY(0)';
      }, 800);
    }
    if (heroButtons) {
      setTimeout(() => {
        heroButtons.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        heroButtons.style.opacity = '1';
        heroButtons.style.transform = 'translateY(0)';
      }, 1000);
    }
    if (heroImage) {
      setTimeout(() => {
        heroImage.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'scale(1) translateY(0)';
      }, 400);
    }
    if (heroBadge) {
      setTimeout(() => {
        heroBadge.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        heroBadge.style.opacity = '1';
        heroBadge.style.transform = 'translateY(0)';
      }, 1400);
    }
  }, [isPreloading]);

  useEffect(() => {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'));
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 2000;
          const start = performance.now();

          function updateCounter(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 5);
            const current = Math.floor(eased * target);
            el.textContent = current + suffix;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          }

          requestAnimationFrame(updateCounter);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(el => statsObserver.observe(el));

    return () => {
      statNumbers.forEach(el => statsObserver.unobserve(el));
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>InsectaTech Exports | India's Multi-Sector Export Company</title>
        <meta name="description" content="Premium Indian exporter of agri commodities, animal feed ingredients, bio-energy, textiles, healthcare & industrial goods. APEDA, FSSAI & IEC certified. Global delivery from Hyderabad." />
        <link rel="canonical" href="https://insectatechexports.com/" />
        <link rel="preload" as="image" href="/main.jpg" fetchpriority="high" />
        <meta property="og:url" content="https://insectatechexports.com/" />
        <meta property="og:title" content="InsectaTech Exports | India's Multi-Sector Export Company" />
        <meta property="og:description" content="Premium Indian exporter of agri commodities, animal feed, textiles, healthcare & bio-energy. APEDA, FSSAI & IEC certified." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "InsectaTech Exports",
          "url": "https://insectatechexports.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://insectatechexports.com/products?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}</script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="hero section" id="hero" ref={heroRef}>
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-label">Global Export Excellence</div>
              <h1 className="hero-heading">
                <span className="word"><span className="word-inner">Connecting</span></span>
                <span className="word"><span className="word-inner italic">India's</span></span>
                <span className="word"><span className="word-inner italic">Finest</span></span>
                <span className="word"><span className="word-inner">to</span></span>
                <span className="word"><span className="word-inner">Global</span></span>
                <span className="word"><span className="word-inner">Markets</span></span>
              </h1>
              <p className="hero-description">
                A multi-sector export house delivering premium agricultural products, sustainable bio-energy solutions, quality textiles, and innovative healthcare products from the heart of India to partners worldwide.
              </p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary">
                  Explore Products
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <Link to="/contact" className="btn btn-outline">Contact Us</Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <img src="/main.jpg" alt="InsectaTech Exports — Premium Indian Export Company connecting India's finest to global markets" fetchPriority="high" loading="eager" width="800" height="600" />
              </div>
              <div className="hero-floating-badge">
                <div className="badge-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="badge-text">
                  <div className="badge-number">10+</div>
                  <div className="badge-label">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-track">
          <div className="marquee-item">
            <span className="marquee-text">Agriculture</span><span className="marquee-dot"></span>
            <span className="marquee-text">Animal Feed</span><span className="marquee-dot"></span>
            <span className="marquee-text">Bio-Energy</span><span className="marquee-dot"></span>
            <span className="marquee-text">Industrial Goods</span><span className="marquee-dot"></span>
            <span className="marquee-text">Textiles</span><span className="marquee-dot"></span>
            <span className="marquee-text">Healthcare</span><span className="marquee-dot"></span>
            <span className="marquee-text">Sustainability</span><span className="marquee-dot"></span>
            <span className="marquee-text">Global Trade</span><span className="marquee-dot"></span>
          </div>
          <div className="marquee-item" aria-hidden="true">
            <span className="marquee-text">Agriculture</span><span className="marquee-dot"></span>
            <span className="marquee-text">Animal Feed</span><span className="marquee-dot"></span>
            <span className="marquee-text">Bio-Energy</span><span className="marquee-dot"></span>
            <span className="marquee-text">Industrial Goods</span><span className="marquee-dot"></span>
            <span className="marquee-text">Textiles</span><span className="marquee-dot"></span>
            <span className="marquee-text">Healthcare</span><span className="marquee-dot"></span>
            <span className="marquee-text">Sustainability</span><span className="marquee-dot"></span>
            <span className="marquee-text">Global Trade</span><span className="marquee-dot"></span>
          </div>
        </div>
      </div>

      {/* ABOUT PREVIEW */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper reveal-left">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=1000&fit=crop&q=80" alt="Modern export warehouse" width="800" height="1000" loading="lazy" />
            </div>
            <div className="about-text">
              <div className="section-label reveal">01 — About Us</div>
              <h2 className="section-heading reveal">Built on Trust,<br />Driven by <span className="text-accent">Excellence</span></h2>
              <p className="reveal stagger-1">
                <span className="highlight">InsectaTech Exports</span> is a Hyderabad-based multi-sector export house committed to bridging the gap between India's rich natural resources and the global marketplace.
              </p>
              <p className="reveal stagger-2">
                From premium agri commodities and innovative animal feed ingredients to sustainable bio-energy solutions and quality textiles — we deliver across diverse sectors with an unwavering focus on quality, compliance, and customer satisfaction.
              </p>
              <p className="reveal stagger-3">
                Registered with <span className="highlight">IEC, FSSAI, and APEDA</span>, we ensure every shipment meets the highest international standards.
              </p>
              <div className="reveal stagger-4" style={{ marginTop: '32px' }}>
                <Link to="/about" className="btn-link">
                  Discover Our Story
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="section stats-section" id="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item reveal stagger-1">
              <div className="stat-number" data-target="50" data-suffix="+">0</div>
              <div className="stat-label">Products Exported</div>
            </div>
            <div className="stat-item reveal stagger-2">
              <div className="stat-number" data-target="10" data-suffix="+">0</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-item reveal stagger-3">
              <div className="stat-number" data-target="6">0</div>
              <div className="stat-label">Industry Sectors</div>
            </div>
            <div className="stat-item reveal stagger-4">
              <div className="stat-number" data-target="100" data-suffix="%">0</div>
              <div className="stat-label">Quality Commitment</div>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBE COMPONENT */}
      <GlobeComponent />

      {/* PRODUCTS SHOWCASE */}
      <section className="section" id="products">
        <div className="container">
          <div className="products-header">
            <div>
              <div className="section-label reveal">02 — What We Export</div>
              <h2 className="section-heading reveal">Our Product <span className="text-accent">Portfolio</span></h2>
            </div>
            <p className="section-description reveal">
              Six diverse sectors, one unwavering standard — delivering India's finest to the world.
            </p>
          </div>

          <div className="products-grid">
            {[
              { id: 'agri', num: '01', title: 'Agri Commodities & Food', excerpt: "Premium rice varieties, aromatic spices, pulses, grains, and sugar — sourced directly from India's finest agricultural regions.", img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d' },
              { id: 'feed', num: '02', title: 'Animal Feed Ingredients', excerpt: 'Rice DDGS, Maize DDGS, and Black Soldier Fly (BSF) products — sustainable, protein-rich feed solutions.', img: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30' },
              { id: 'bioenergy', num: '03', title: 'Bio-Energy & Fertilizers', excerpt: 'Organic frass fertilizer, biomass pellets, and biodiesel — powering a sustainable future.', img: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1' },
              { id: 'engineering', num: '04', title: 'Engineering & Industrial', excerpt: 'Traditional lac bangles, industrial components, and machinery parts — blending heritage with industry.', img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261' },
              { id: 'textiles', num: '05', title: 'Textiles & Apparel', excerpt: "Fine cotton, handcrafted garments, and home textiles — India's legendary textile heritage, exported worldwide.", img: 'https://images.unsplash.com/photo-1558171813-4c088753af8f' },
              { id: 'healthcare', num: '06', title: 'Healthcare & Wellness', excerpt: 'Herbal medicines, dietary supplements, and ayurvedic products — ancient wisdom for modern wellbeing.', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' }
            ].map((prod, i) => (
              <Link to={`/products#${prod.id}`} key={prod.id} className={`product-card reveal stagger-${i + 1}`}>
                <div className="card-image">
                  <img src={`${prod.img}?w=600&h=750&fit=crop&q=80`} alt={prod.title} width="600" height="750" loading="lazy" />
                </div>
                <div className="card-overlay"></div>
                <div className="card-content">
                  <div className="card-number">{prod.num}</div>
                  <h3 className="card-title">{prod.title}</h3>
                  <p className="card-excerpt">{prod.excerpt}</p>
                  <div className="card-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why-section" id="why">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'clamp(40px, 5vw, 72px)' }}>
            <div className="section-label reveal" style={{ justifyContent: 'center' }}>03 — Why Choose Us</div>
            <h2 className="section-heading reveal">The InsectaTech <span className="text-accent">Advantage</span></h2>
            <p className="section-description reveal mx-auto" style={{ textAlign: 'center' }}>What sets us apart in the competitive world of international trade.</p>
          </div>

          <div className="why-grid">
            <div className="why-item reveal stagger-1">
              <div className="why-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h4 className="why-title">Multi-Sector Expertise</h4>
              <p className="why-text">Spanning six diverse industries from agriculture to healthcare, we bring cross-sector knowledge that enables unique solutions for global partners.</p>
            </div>
            <div className="why-item reveal stagger-2">
              <div className="why-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4 className="why-title">Quality Assured</h4>
              <p className="why-text">Every product undergoes rigorous quality checks. We are FSSAI certified, IEC registered, and APEDA compliant — no compromises.</p>
            </div>
            <div className="why-item reveal stagger-3">
              <div className="why-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h4 className="why-title">Direct from Source</h4>
              <p className="why-text">We work directly with farmers, manufacturers, and producers across India — eliminating middlemen and ensuring competitive pricing.</p>
            </div>
            <div className="why-item reveal stagger-4">
              <div className="why-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="1" y="3" width="22" height="18" rx="2" ry="2"/><line x1="1" y1="9" x2="23" y2="9"/></svg>
              </div>
              <h4 className="why-title">Custom Packaging</h4>
              <p className="why-text">Flexible packaging solutions tailored to your market — private labeling, custom branding, and bulk or retail-ready packaging.</p>
            </div>
            <div className="why-item reveal stagger-5">
              <div className="why-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3v18M5.5 8.5l13 7M18.5 8.5l-13 7"/><circle cx="12" cy="12" r="10" strokeDasharray="4 2"/></svg>
              </div>
              <h4 className="why-title">Sustainability First</h4>
              <p className="why-text">From BSF insect protein to organic fertilizers, sustainability isn't just a promise — it's embedded in our core product offerings.</p>
            </div>
            <div className="why-item reveal stagger-6">
              <div className="why-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h4 className="why-title">Regulatory Compliant</h4>
              <p className="why-text">Full compliance with international trade regulations, customs documentation, and phytosanitary standards for seamless global shipments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section cta-section" id="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-heading reveal">Ready to Partner<br />with <em>India's Best?</em></h2>
            <p className="cta-text reveal stagger-1">Whether you're looking for premium agri commodities, sustainable feed solutions, or quality textiles — let's start a conversation that grows into lasting global partnership.</p>
            <div className="reveal stagger-2" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-white">
                Get in Touch
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link to="/products" className="btn btn-white-outline">Explore Products</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
