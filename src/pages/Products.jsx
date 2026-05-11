import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useScrollReveal from '../hooks/useScrollReveal';

const Products = () => {
  useScrollReveal();
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [hash]);

  const scrollToSection = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  const handleRequestQuote = () => {
    navigate('/contact');
    setTimeout(() => {
      const form = document.getElementById('contact-form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <>
      <Helmet>
        <title>Export Products | Agri, Animal Feed, Bio-Energy, Textiles & More — InsectaTech Exports</title>
        <meta name="description" content="Explore InsectaTech Exports' product portfolio: Rice DDGS, Maize DDGS, biochar, BSFL protein, cotton textiles, Ayurvedic healthcare products & industrial goods. APEDA & FSSAI certified. Request a quote." />
        <link rel="canonical" href="https://insectatechexports.com/products" />
        <meta property="og:url" content="https://insectatechexports.com/products" />
        <meta property="og:title" content="Export Products | InsectaTech Exports — 6 Sector Portfolio" />
        <meta property="og:description" content="Rice DDGS, biochar, BSFL protein, textiles & more — 6 export categories from India. APEDA & FSSAI certified. B2B bulk orders welcome." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://insectatechexports.com/" },
            { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://insectatechexports.com/products" }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "InsectaTech Exports — Product Categories",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Agri Commodities & Food", "url": "https://insectatechexports.com/products#agri", "description": "Basmati rice, spices, pulses, sugar — APEDA certified export from India" },
            { "@type": "ListItem", "position": 2, "name": "Animal Feed Ingredients", "url": "https://insectatechexports.com/products#feed", "description": "Rice DDGS, Maize DDGS, BSF Larvae, BSF Meal — protein-rich feed solutions" },
            { "@type": "ListItem", "position": 3, "name": "Bio-Energy & Organic Fertilizers", "url": "https://insectatechexports.com/products#bioenergy", "description": "Biochar, biomass pellets, biodiesel, frass fertilizer from India" },
            { "@type": "ListItem", "position": 4, "name": "Engineering & Industrial Goods", "url": "https://insectatechexports.com/products#engineering", "description": "Lac bangles, industrial components, metal castings — Indian manufacturing" },
            { "@type": "ListItem", "position": 5, "name": "Textiles & Apparel", "url": "https://insectatechexports.com/products#textiles", "description": "Cotton, yarn, woven fabrics, garments — India textile export B2B" },
            { "@type": "ListItem", "position": 6, "name": "Healthcare & Wellness", "url": "https://insectatechexports.com/products#healthcare", "description": "Ayurvedic products, herbal medicines, dietary supplements, essential oils" }
          ]
        })}</script>
      </Helmet>

      <style>{`
        .product-nav {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: clamp(40px, 5vw, 64px);
          padding-bottom: 24px;
          border-bottom: 1px solid var(--color-border-light);
        }
        .product-nav button {
          font-family: var(--font-accent);
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 10px 20px;
          border-radius: var(--radius-full);
          border: 1.5px solid var(--color-border);
          color: var(--color-text-secondary);
          transition: all 0.3s ease;
          background: transparent;
        }
        .product-nav button:hover {
          background: var(--color-accent);
          color: var(--color-white);
          border-color: var(--color-accent);
        }
      `}</style>

      <section className="page-header">
        <div className="container">
          <div className="breadcrumb reveal">
            <Link to="/">Home</Link><span className="sep">/</span><span className="current">Products</span>
          </div>
          <h1 className="reveal">Our Product <span className="text-accent"><em>Portfolio</em></span></h1>
          <p className="section-description reveal stagger-1" style={{ marginTop: '20px' }}>
            Six diverse sectors, one unwavering standard of quality. Discover what India has to offer the world.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="product-nav reveal">
            <button onClick={() => scrollToSection('agri')}>Agri & Food</button>
            <button onClick={() => scrollToSection('feed')}>Animal Feed</button>
            <button onClick={() => scrollToSection('bioenergy')}>Bio-Energy</button>
            <button onClick={() => scrollToSection('engineering')}>Industrial</button>
            <button onClick={() => scrollToSection('textiles')}>Textiles</button>
            <button onClick={() => scrollToSection('healthcare')}>Healthcare</button>
          </div>

          <div className="product-detail-section" id="agri">
            <div className="product-detail-grid">
              <div className="product-detail-image reveal-left">
                <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=600&fit=crop&q=80" alt="Premium Indian rice and spices" width="800" height="600" loading="lazy" />
              </div>
              <div>
                <div className="section-label reveal">01</div>
                <h2 className="section-heading reveal">Agri Commodities <span className="text-accent">& Food</span></h2>
                <p className="reveal stagger-1" style={{ marginBottom: '16px' }}>India's agricultural bounty is legendary — and we bring the finest of it to international markets. From aromatic Basmati rice to premium spices that have defined global cuisines for millennia, our agri commodities are sourced directly from certified farms across India.</p>
                <div className="product-list reveal stagger-3">
                  {['Basmati Rice', 'Non-Basmati Rice', 'Turmeric', 'Red Chili', 'Cumin Seeds', 'Cardamom', 'Pulses & Lentils', 'Sugar'].map(tag => (
                    <span className="product-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="product-detail-section" id="feed">
            <div className="product-detail-grid reverse">
              <div className="product-detail-image reveal-right">
                <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=600&fit=crop&q=80" alt="Animal feed ingredients" width="800" height="600" loading="lazy" />
              </div>
              <div>
                <div className="section-label reveal">02</div>
                <h2 className="section-heading reveal">Animal Feed <span className="text-accent">Ingredients</span></h2>
                <p className="reveal stagger-1" style={{ marginBottom: '16px' }}>Our animal feed portfolio represents the intersection of nutrition science and sustainable sourcing. We specialize in protein-rich, cost-effective feed ingredients that are transforming the global aquaculture and livestock industries.</p>
                <div className="product-list reveal stagger-3">
                  {['Rice DDGS', 'Maize DDGS', 'BSF Larvae (Dried)', 'BSF Meal', 'BSF Oil', 'Soybean Meal', 'Fish Meal'].map(tag => (
                    <span className="product-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="product-detail-section" id="bioenergy">
            <div className="product-detail-grid">
              <div className="product-detail-image reveal-left">
                <img src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&h=600&fit=crop&q=80" alt="Sustainable bio-energy" width="800" height="600" loading="lazy" />
              </div>
              <div>
                <div className="section-label reveal">03</div>
                <h2 className="section-heading reveal">Bio-Energy & <span className="text-accent">Organic Fertilizers</span></h2>
                <p className="reveal stagger-1" style={{ marginBottom: '16px' }}>We convert agricultural waste and byproducts into high-value energy sources and nutrient-rich organic fertilizers, contributing to a circular economy.</p>
                <div className="product-list reveal stagger-3">
                  {['Frass Fertilizer', 'Biomass Pellets', 'Biomass Briquettes', 'Biodiesel', 'Vermicompost'].map(tag => (
                    <span className="product-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="product-detail-section" id="engineering">
            <div className="product-detail-grid reverse">
              <div className="product-detail-image reveal-right">
                <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=600&fit=crop&q=80" alt="Industrial goods" width="800" height="600" loading="lazy" />
              </div>
              <div>
                <div className="section-label reveal">04</div>
                <h2 className="section-heading reveal">Engineering & <span className="text-accent">Industrial Goods</span></h2>
                <p className="reveal stagger-1" style={{ marginBottom: '16px' }}>From India's rich tradition of handcrafted goods to modern industrial components, this sector represents the breadth of Indian manufacturing capability.</p>
                <div className="product-list reveal stagger-3">
                  {['Lac Bangles', 'Industrial Components', 'Machinery Parts', 'Handicraft Items', 'Metal Castings'].map(tag => (
                    <span className="product-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="product-detail-section" id="textiles">
            <div className="product-detail-grid">
              <div className="product-detail-image reveal-left">
                <img src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop&q=80" alt="Textiles" width="800" height="600" loading="lazy" />
              </div>
              <div>
                <div className="section-label reveal">05</div>
                <h2 className="section-heading reveal">Textiles & <span className="text-accent">Apparel</span></h2>
                <p className="reveal stagger-1" style={{ marginBottom: '16px' }}>From raw cotton to finished garments, our textile offerings cover the full spectrum of India's textile excellence, meeting international quality and compliance standards.</p>
                <div className="product-list reveal stagger-3">
                  {['Raw Cotton', 'Cotton Yarn', 'Woven Fabrics', 'Knitted Fabrics', 'Ready-made Garments', 'Home Textiles'].map(tag => (
                    <span className="product-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="product-detail-section" id="healthcare">
            <div className="product-detail-grid reverse">
              <div className="product-detail-image reveal-right">
                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=80" alt="Healthcare products" width="800" height="600" loading="lazy" />
              </div>
              <div>
                <div className="section-label reveal">06</div>
                <h2 className="section-heading reveal">Healthcare & <span className="text-accent">Wellness</span></h2>
                <p className="reveal stagger-1" style={{ marginBottom: '16px' }}>Drawing from India's ancient Ayurvedic tradition and modern pharmaceutical capabilities, our healthcare products offer natural solutions for global consumers.</p>
                <div className="product-list reveal stagger-3">
                  {['Herbal Medicines', 'Dietary Supplements', 'Ayurvedic Products', 'Essential Oils', 'Natural Extracts', 'Organic Honey'].map(tag => (
                    <span className="product-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-heading reveal">Interested in <br /><em>Our Products?</em></h2>
            <p className="cta-text reveal stagger-1">Get detailed product specifications, pricing, and minimum order quantities. Our export team is ready to assist you.</p>
            <div className="reveal stagger-2" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={handleRequestQuote} className="btn btn-white" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>Request a Quote <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
              <a href="mailto:info@insectatechexports.com" className="btn btn-white-outline">Email Us Directly</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
