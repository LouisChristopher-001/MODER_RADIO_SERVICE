export const openWhatsApp = (type, pageName) => {
  const phoneNumber = "919585514802"; // Modern Radio Service
  let message = "";

  switch (type) {
    case "quote":
      message = "Hi! I’d like to get the best price for an electronics or home appliance.";
      break;

    case "contact":
      message = "Hello! I want to contact Modern Radio Service for product or service enquiries.";
      break;

    case "consultation":
      message = `Hi! I’d like guidance on choosing the right ${pageName} appliance for my home.`;
      break;

    case "know-more":
      message = `Hello! I’d like to know more about your ${pageName} products and offers.`;
      break;

    default:
      message = `Hello! I’m interested in your electronics and home appliance products.`;
  }

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
};
