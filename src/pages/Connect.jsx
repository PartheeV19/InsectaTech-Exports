import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP_URL = 'https://wa.me/917396600115?text=Hello%20InsectaTech%20Exports%2C%20I%20scanned%20your%20product%20QR%20code.';

const Connect = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Connect | InsectaTech Exports';

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <section className="connect-landing">
      <div className="connect-glow connect-glow-left" aria-hidden="true"></div>
      <div className="connect-glow connect-glow-right" aria-hidden="true"></div>

      <div className="container">
        <div className="connect-shell">
          <div className="connect-copy">
            <Link to="/" className="connect-brand" aria-label="Visit InsectaTech Exports website">
              <div className="nav-logo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2L2 19h20L12 2z" />
                  <circle cx="12" cy="16" r="2" fill="#B8860B" />
                </svg>
              </div>
              <span>InsectaTech Exports</span>
            </Link>

            <div className="section-label connect-label">Quick Connect</div>

            <h1 className="connect-title">
              Choose how you want to <span className="text-accent"><em>connect</em></span>
            </h1>

            <p className="connect-description">
              Start a WhatsApp chat with our team or continue to the full
              InsectaTech Exports website.
            </p>

            <div className="connect-actions">
              <a
                className="connect-action connect-action-primary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with InsectaTech Exports on WhatsApp"
              >
                <span className="connect-action-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.35-1.66a11.78 11.78 0 0 0 5.71 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.18-3.45-8.42ZM12.07 21.8h-.01a9.78 9.78 0 0 1-4.98-1.36l-.36-.21-3.77.99 1.01-3.67-.24-.38a9.76 9.76 0 0 1-1.5-5.26c0-5.42 4.42-9.84 9.86-9.84 2.63 0 5.1 1.02 6.96 2.89a9.8 9.8 0 0 1 2.88 6.96c0 5.44-4.42 9.87-9.85 9.87Zm5.4-7.37c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5a8.94 8.94 0 0 1-1.67-2.07c-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.69-1.67-.95-2.29-.25-.59-.5-.51-.69-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.52 0 1.48 1.08 2.92 1.23 3.12.15.2 2.11 3.22 5.1 4.52.71.31 1.27.5 1.71.64.72.23 1.38.2 1.9.12.58-.09 1.79-.73 2.04-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
                  </svg>
                </span>
                <span className="connect-action-copy">
                  <span className="connect-action-title">Chat With Us</span>
                  <span className="connect-action-text">Start a conversation on WhatsApp</span>
                </span>
                <span className="connect-action-arrow" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>

              <Link
                className="connect-action connect-action-secondary"
                to="/"
                aria-label="Visit the InsectaTech Exports website"
              >
                <span className="connect-action-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </span>
                <span className="connect-action-copy">
                  <span className="connect-action-title">Visit Our Website</span>
                  <span className="connect-action-text">Continue to insectatechexports.com</span>
                </span>
                <span className="connect-action-arrow" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </div>

            <p className="connect-footnote">
              Export partnerships | Product support
              <br></br>
              Hyderabad, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
