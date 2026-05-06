import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Preloader from './components/Preloader';
import AnnouncementBanner from './components/AnnouncementBanner';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Connect from './pages/Connect';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout({ loading }) {
  const { pathname } = useLocation();
  const isConnectPage = pathname === '/connect';

  return (
    <>
      <ScrollToTop />
      {!isConnectPage && loading && <Preloader />}
      {!isConnectPage && <Navbar />}
      {/* Announcement banner — shows on home page after preloader */}
      {pathname === '/' && <AnnouncementBanner show={!loading} />}
      <main className={isConnectPage ? 'app-main-connect' : ''}>
        <Routes>
          <Route path="/" element={<Home isPreloading={loading} />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>
      {!isConnectPage && <Footer />}
      {!isConnectPage && <WhatsAppButton />}
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(() => window.location.pathname !== '/connect');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    let timer;
    if (window.location.pathname !== '/connect') {
      timer = setTimeout(() => {
        setLoading(false);
      }, 2500);
    }

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      <AppLayout loading={loading} />
    </Router>
  );
}

export default App;
