import { useState, useEffect } from 'react';

const AnnouncementBanner = ({ show }) => {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (show) {
      // Small delay so the entrance animation plays smoothly after preloader
      const timer = setTimeout(() => setVisible(true), 400);
      return () => clearTimeout(timer);
    }
  }, [show]);

  const handleClose = () => {
    setClosing(true);
    // Wait for exit animation to finish before unmounting
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div className={`announcement-overlay ${closing ? 'closing' : ''}`} onClick={handleClose}>
      <div className={`announcement-modal ${closing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="announcement-close" onClick={handleClose} aria-label="Close announcement">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="announcement-image-wrapper">
          <img src="/banner1.webp" alt="InsectaTech Exports — Indian Mango Exports 2026" />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
