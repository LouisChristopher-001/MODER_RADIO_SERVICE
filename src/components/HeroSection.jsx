import { motion } from "framer-motion";
import { openWhatsApp } from "../utils/openWhatsApp";
import heroBG from "../assets/hero-4.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen grid place-items-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative container-padded py-24 md:py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-black text-4xl md:text-5xl font-bold"
        >
          Modern Radio Service – Electronics & Home Appliances
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-black/90 mt-4 max-w-2xl mx-auto"
        >
          Powering homes with trust, innovation, and quality.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => openWhatsApp("quote", "")}
            className="btn-accent"
          >
            Get a Quote
          </button>
          <button
            onClick={() => openWhatsApp("contact", "")}
            className="btn-primary"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
