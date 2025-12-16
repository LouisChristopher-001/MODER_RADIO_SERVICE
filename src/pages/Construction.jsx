import React from "react";
// import ProjectGallery from "../components/ProjectGallery.jsx";
import ConstructionTabs from "../components/ConstructionTabs.jsx";
import RestaurantCafeSection from "../components/RestaurantsCafeSection.jsx";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  UserCheck,
  FileText,
  CheckCircle,
  Hammer,
  Home,
  Utensils,
  X,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    name: "Home Appliances Sales",
    detail:
      "We offer a wide range of branded home appliances including mixers, grinders, gas stoves, fans, water heaters, and kitchen essentials.",
  },
  {
    name: "Electronics & Electrical Products",
    detail:
      "From everyday electrical needs to durable electronics, we supply trusted products designed for long-term use.",
  },
  {
    name: "Finance & EMI Assistance",
    detail:
      "We assist customers with easy finance and EMI options through partnered finance providers, subject to eligibility.",
  },
  {
    name: "After-Sales Guidance & Support",
    detail:
      "Our team provides clear warranty guidance and coordinates with authorised service centres for hassle-free support.",
  },
];

const journeySteps = [
  {
    step: 1,
    title: "Customer Visit",
    description:
      "Customer visits our showroom to explore products and discuss requirements",
    timeEstimate: "Same day",
    icon: Users,
    color: "bg-blue-100 text-blue-800",
    tooltip: "Friendly in-store assistance and product overview",
  },
  {
    step: 2,
    title: "Product Consultation",
    description:
      "Our team explains product features, brand options, and pricing",
    timeEstimate: "15–30 mins",
    icon: UserCheck,
    color: "bg-green-100 text-green-800",
    tooltip: "Personalised guidance based on customer needs",
  },
  {
    step: 3,
    title: "Billing & Documentation",
    description: "Invoice generation, warranty explanation, and documentation",
    timeEstimate: "10–15 mins",
    icon: FileText,
    color: "bg-yellow-100 text-yellow-800",
    tooltip: "Transparent billing and warranty clarity",
  },
  {
    step: 4,
    title: "Payment & Finance",
    description: "Payment via cash, card, UPI, or finance approval if required",
    timeEstimate: "Varies",
    icon: CheckCircle,
    color: "bg-purple-100 text-purple-800",
    tooltip: "Flexible payment and EMI options",
  },
  {
    step: 5,
    title: "Delivery / Pickup",
    description:
      "Product delivery arranged or customer pickup completed",
    timeEstimate: "Same / next day",
    icon: Hammer,
    color: "bg-orange-100 text-orange-800",
    tooltip: "Careful handling and timely delivery",
  },
  {
    step: 6,
    title: "After-Sales Support",
    description:
      "Ongoing support for installation guidance and service coordination",
    timeEstimate: "As needed",
    icon: Home,
    color: "bg-emerald-100 text-emerald-800",
    tooltip: "Long-term customer relationship and trust",
  },
];

export default function Construction() {
  const [showRestaurantPopup, setShowRestaurantPopup] = useState(false);

  return (
    <>
      <section className="container-padded pt-36">
        <div>
          <h1 className="section-title inline-block">
            Our Products & Services
          </h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-accent rounded mt-2"
          />
        </div>

        <p className="section-subtitle max-w-2xl">
          Modern Radio Service delivers reliable electronics and home appliance
          solutions backed by decades of customer trust, transparent pricing,
          and dependable service support.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div key={i} className="card p-6">
              <h3 className="font-semibold text-primary">{s.name}</h3>
              <p className="text-sm text-warmGray mt-2">{s.detail}</p>
            </div>
          ))}
        </div>

        <div className="my-24">
          <ConstructionTabs />
        </div>

        {/* Customer Journey Section */}
        <div className="mt-24 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-4">
              Your Journey with Modern Radio Service
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 220 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-accent rounded mx-auto"
            />
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

              {journeySteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start mb-12 last:mb-0"
                  >
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-primary rounded-full shadow-lg">
                      <span className="text-xl font-bold text-primary">
                        {step.step}
                      </span>
                    </div>

                    <div className="ml-8 flex-1">
                      <motion.div
                        className="card p-6 hover:shadow-lg transition-all duration-300 group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <IconComponent className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-primary">
                                {step.title}
                              </h3>
                              <div
                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${step.color}`}
                              >
                                {step.timeEstimate}
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-warmGray leading-relaxed mb-4">
                          {step.description}
                        </p>

                        <div className="text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          💡 {step.tooltip}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

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
                Looking for the right appliance?
              </h3>
              <p className="text-warmGray mb-6 max-w-2xl mx-auto">
                Visit Modern Radio Service for genuine brands, honest advice,
                and long-term support you can trust.
              </p>
              <motion.a
                href="/contact"
                className="btn-accent inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Visit Our Showroom</span>
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
        </div>
      </section>
    </>
  );
}
