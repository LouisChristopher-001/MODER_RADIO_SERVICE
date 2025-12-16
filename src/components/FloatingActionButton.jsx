import React from "react";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+919585514801";
  const location = useLocation();

  const getPageMessage = () => {
    switch (location.pathname) {
      case "/":
        return "Hi! I’m looking for electronics or home appliances. Can you help me?";
      case "/about":
        return "Hello! I was reading about Modern Radio Service. I’d like to know more about your shop and products.";
      case "/construction":
        return "Hi! I’m interested in your home appliances and electronics. Please share details.";
      case "/contact":
        return "Hi! I’d like to contact Modern Radio Service regarding products or service support.";
      default:
        return "Hello! I’m interested in your electronics and home appliances.";
    }
  };

  const message = getPageMessage();

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
