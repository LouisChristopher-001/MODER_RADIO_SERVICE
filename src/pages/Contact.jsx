import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <section className="container-padded py-32" id="contact">
      <h1 className="section-title">Contact Us</h1>
      <p className="section-subtitle">
        Get in touch with us for product enquiries, pricing details, service
        support, or general assistance.
      </p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <ContactForm />

        <div className="card p-6">
          <h3 className="font-semibold text-primary">Showroom</h3>
          <p className="text-sm text-warmGray mt-2">
            Modern Radio Service
          </p>
          <p className="text-sm text-warmGray">
            Kumbakonam, Tamil Nadu
          </p>
          <p className="text-sm text-warmGray">
            Phone: +91 95855 14802
          </p>
          <p className="text-sm text-warmGray">
            Email: mrskmu@gmail.com
          </p>

          <div className="mt-4">
            <iframe
              title="Showroom Location"
              className="w-full h-64 rounded-md"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Modern+Radio+Service+Kumbakonam&output=embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
