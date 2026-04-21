import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import useScrollReveal from '../hooks/useScrollReveal';

const GlobeComponent = () => {
  useScrollReveal();
  const globeEl = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Approximate coordinates for India (Hyderabad) vs other countries
  const arcsData = [
    { startLat: 17.385, startLng: 78.4867, endLat: 25.2048, endLng: 55.2708, name: 'UAE', color: '#B8860B' }, // Dubai
    { startLat: 17.385, startLng: 78.4867, endLat: 40.7128, endLng: -74.0060, name: 'USA', color: '#1B4332' }, // New York
    { startLat: 17.385, startLng: 78.4867, endLat: 51.5074, endLng: -0.1278, name: 'UK', color: '#2D6A4F' }, // London
    { startLat: 17.385, startLng: 78.4867, endLat: -33.918861, endLng: 18.423300, name: 'South Africa', color: '#D4A84B' }, // Cape Town
    { startLat: 17.385, startLng: 78.4867, endLat: 1.3521, endLng: 103.8198, name: 'Singapore', color: '#B8860B' }, // Singapore
    { startLat: 17.385, startLng: 78.4867, endLat: -33.8688, endLng: 151.2093, name: 'Australia', color: '#1B4332' }, // Sydney
  ];

  // Map markers for key locations
  const labelsData = [
    { lat: 17.385, lng: 78.4867, name: 'Hyderabad, IN' },
    ...arcsData.map(d => ({ lat: d.endLat, lng: d.endLng, name: d.name }))
  ];

  const handleGlobeReady = () => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.8; 
      globeEl.current.controls().enableZoom = false; // Prevent zoom to not mess up scrolling
      
      // Center beautifully on India
      globeEl.current.pointOfView({ lat: 22, lng: 82, altitude: 2 }, 1000);
    }
  };

  useEffect(() => {
    // Handle responsive resize
    const handleResize = () => {
      const container = document.getElementById('globe-container');
      if (container) {
        // Adjust for responsive sizing. Mobile: stack, Desktop: side-by-side
        const width = container.clientWidth;
        const height = window.innerWidth < 900 ? 400 : 500;
        setDimensions({ width, height });
      }
    };

    handleResize(); // Initial measurement
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }} className="globe-grid">
          
          <div className="globe-text-content">
            <div className="section-label reveal">Global Footprint</div>
            <h2 className="section-heading reveal">Connecting India to <span className="text-accent">The World</span></h2>
            <p className="reveal stagger-1" style={{ marginBottom: '20px' }}>
              From our headquarters in Hyderabad, we manage a complex logistics network servicing clients across more than 10 countries spanning 5 continents.
            </p>
            <p className="reveal stagger-2" style={{ marginBottom: '32px' }}>
              Whether it is maritime freight to the Middle East, or rapid air logistics to Europe, our supply chain ensures your products arrive on time and in perfect condition.
            </p>
            <div className="reveal stagger-3" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--color-accent)' }}>10+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Countries</div>
              </div>
              <div style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--color-gold)' }}>5</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Continents</div>
              </div>
            </div>
          </div>

          <div id="globe-container" className="reveal-right" style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative', minHeight: '400px' }}>
            {dimensions.width > 0 && (
              <Globe
                ref={globeEl}
                onGlobeReady={handleGlobeReady}
                width={dimensions.width}
                height={dimensions.height}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-water.png"
                backgroundColor="rgba(0,0,0,0)"
                arcsData={arcsData}
                arcStartLat={d => d.startLat}
                arcStartLng={d => d.startLng}
                arcEndLat={d => d.endLat}
                arcEndLng={d => d.endLng}
                arcColor={d => d.color}
                arcDashLength={0.4}
                arcDashGap={0.2}
                arcDashAnimateTime={2000}
                arcStroke={0.8}
                labelsData={labelsData}
                labelLat={d => d.lat}
                labelLng={d => d.lng}
                labelText={d => d.name}
                labelSize={1.5}
                labelDotRadius={0.5}
                labelColor={() => '#1A1A1A'}
                labelResolution={2}
              />
            )}
          </div>
          
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .globe-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default GlobeComponent;
