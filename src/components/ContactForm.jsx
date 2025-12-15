import { motion } from "framer-motion";

export default function ContactForm() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value || "Not provided",
      phone: form.phone.value,
      message: form.message.value,
    };

    /* 1️⃣ Send to Formspree (Email) */
    try {
      await fetch("https://formspree.io/f/mldqkdzz", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Formspree error:", error);
    }

    /* 2️⃣ Open WhatsApp with same message */
    const whatsappMessage = `
New Enquiry from Website

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Requirement:
${data.message}
    `;

    window.open(
      `https://wa.me/919585514802?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 card p-6">

      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        type="text"
        name="name"
        placeholder="Name"
        required
        className="border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      {/* Email is now optional */}
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        type="email"
        name="email"
        placeholder="Email (optional)"
        className="border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        type="tel"
        name="phone"
        placeholder="Phone"
        required
        className="border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      {/* Requirement */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Your Requirement
        </label>

        <h5 className="text-warmGray">
          You may include product, brand, budget, and location details.
        </h5>

        <motion.textarea
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          name="message"
          rows={6}
          placeholder="Tell us what you’re looking for…"
          className="w-full border border-gray-200 rounded-md px-4 py-3 
                     focus:outline-none focus:ring-2 focus:ring-primary 
                     resize-none leading-relaxed"
        />
      </div>

      <button type="submit" className="btn-accent">
        Send Message
      </button>
    </form>
  );
}
