import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  // Replace with your WhatsApp phone number (include country code, e.g., 91 for India)
  const phoneNumber = "917396600115"; // Change this to your business WhatsApp number
  const message = "Hello InsectaTech!";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}&lang=en`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      className="whatsapp-button"
      onClick={handleWhatsAppClick}
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </button>
  );
};

export default WhatsAppButton;
