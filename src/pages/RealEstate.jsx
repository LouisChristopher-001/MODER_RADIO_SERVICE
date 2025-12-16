import { motion } from "framer-motion";
import MapContainer from "../components/map/MapContainer";
import { openWhatsApp } from "../utils/openWhatsApp";

export default function RealEstate() {
  const services = [
    {
      title: "Home Appliances Sales",
      description:
        "Wide range of reliable and branded home appliances including mixers, grinders, gas stoves, water heaters, fans, and kitchen essentials.",
      image: "../assets/realstate.jpg",
    },
    {
      title: "Kitchen & Cooking Solutions",
      description:
        "Complete kitchen solutions with quality cooking appliances designed for durability, safety, and everyday convenience.",
      image: "/assets/realestate/furnished.jpg",
    },
    {
      title: "Electrical & Electronic Products",
      description:
        "Essential electrical products and electronics from trusted brands, suitable for homes and small commercial needs.",
      image: "/assets/realestate/apartments.jpg",
    },
    {
      title: "Service, Support & Accessories",
      description:
        "After-sales guidance, warranty support, spare parts assistance, and reliable customer service for peace of mind.",
      image: "/assets/realestate/plots.jpg",
    },
  ];

  return (
    <section className="container-padded pt-36">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h1 className="section-title">Our Products & Services</h1>
        <p className="section-subtitle max-w-2xl">
          Discover a wide range of electronics, home appliances, kitchen
          essentials, and dependable after-sales support — all under one roof.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative h-80 perspective-1000"
          >
            <motion.div
              className="relative w-full h-full cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ rotateX: 180 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary to-primary/80 rounded-xl shadow-card border border-primary/20 flex items-center justify-center backface-hidden">
                <div className="text-center px-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Back Side */}
              <div
                className="absolute inset-0 w-full h-full rounded-xl shadow-card backface-hidden"
                style={{
                  transform: "rotateX(180deg)",
                  backgroundImage: `linear-gradient(rgba(14, 42, 79, 0.8), rgba(14, 42, 79, 0.7)), url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <motion.button
                    className="btn-accent"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openWhatsApp("know-more", "electronics")}
                  >
                    Know More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 text-center"
      >
        <div className="bg-white rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto border border-gray-200">
          <div className="w-full flex justify-center">
            <h2 className="max-w-xl text-2xl sm:text-3xl font-bold text-primary mb-4 border-b-4 border-accent">
              Why Choose Modern Radio Service?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                ✔
              </div>
              <h3 className="font-semibold text-primary mb-2">
                Trusted Brands
              </h3>
              <p className="text-sm text-warmGray">
                We deal only with reputed brands known for quality and warranty
                assurance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                📍
              </div>
              <h3 className="font-semibold text-primary mb-2">
                Local Presence
              </h3>
              <p className="text-sm text-warmGray">
                Conveniently located in Kumbakonam with personalised in-store
                support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                ⚡
              </div>
              <h3 className="font-semibold text-primary mb-2">
                Reliable Support
              </h3>
              <p className="text-sm text-warmGray">
                From purchase to after-sales service, we stand by our customers.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20"
      >
        <MapContainer />
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Looking for the Right Appliance?
          </h3>
          <p className="text-warmGray mb-6 max-w-2xl mx-auto">
            Visit Modern Radio Service for genuine products, honest advice, and
            dependable support — trusted by families for generations.
          </p>
          <motion.a
            href="/contact"
            className="btn-accent inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact Us Today</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
