import { motion } from "framer-motion";
import { openWhatsApp } from "../utils/openWhatsApp";
import heroBG from "../assets/hero-4.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex items-end overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Bottom-aligned content */}
      <div className="relative container-padded pb-20 md:pb-28 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-stone-100 text-3xl md:text-5xl font-semibold max-w-3xl mx-auto leading-tight"
        >
          Serving Homes with Trust for Generations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-stone-100 mt-3 max-w-2xl mx-auto font-semibold"
        >
          Electronics & Home Appliances - Kumbakonam & Thiruvarur
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 flex justify-center"
        >
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
