import HeroSection from "../components/HeroSection.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import ProjectGallery from "../components/ProjectGallery.jsx";
import constructionImg from "../assets/construction.jpg";
import realEstateImg from "../assets/realstate.jpg";
import { Link } from "react-router-dom";
import BrandMarquee from "../components/BrandMarquee";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const clientFAQs = [
  {
    id: 1,
    question: "Where is Modern Radio Service located?",
    answer:
      "Our showroom is located in Kumbakonam, Tamil Nadu. You can find our full address, contact numbers, and directions on the Contact Us page.",
  },
  {
    id: 2,
    question: "How long has Modern Radio Service been serving customers?",
    answer:
      "Modern Radio Service has been serving households for decades, earning trust through quality products, fair pricing, and reliable service.",
  },
  {
    id: 3,
    question: "What products are available at your showroom?",
    answer:
      "We offer a wide range of electronics and home appliances including mixers, grinders, gas stoves, induction cooktops, water heaters, fans, kitchen appliances, and electrical essentials.",
  },
  {
    id: 4,
    question: "Do you sell only branded products?",
    answer:
      "Yes, we primarily deal with reputed and trusted brands to ensure durability, performance, and proper warranty support.",
  },
  {
    id: 5,
    question: "Do products come with a warranty?",
    answer:
      "All branded products are sold with manufacturer warranty as per brand terms. Warranty details are explained clearly at the time of purchase.",
  },
  {
    id: 6,
    question: "Do you provide installation or service support?",
    answer:
      "We assist customers with installation guidance and coordinate with authorised service centres wherever applicable.",
  },
  {
    id: 7,
    question: "Is exchange or replacement available?",
    answer:
      "Exchange or replacement is subject to manufacturer policy and product condition. Please contact us immediately if you face any issue.",
  },
  {
    id: 8,
    question: "What payment options are available?",
    answer:
      "We accept cash, UPI, debit cards, credit cards, and approved finance options depending on current offers.",
  },
  {
    id: 9,
    question: "Do you offer finance or EMI facilities?",
    answer:
      "Yes, finance and EMI options are available through partnered finance providers, subject to eligibility and documentation.",
  },
  {
    id: 10,
    question: "Do you provide home delivery?",
    answer:
      "Local delivery is available for selected products. Delivery timelines and charges depend on product size and location.",
  },
  {
    id: 11,
    question: "How can I know about offers and discounts?",
    answer:
      "Seasonal offers and discounts are shared in-store and through our website and social media channels.",
  },
  {
    id: 12,
    question: "How can I contact Modern Radio Service?",
    answer:
      "You can contact us via phone, email, WhatsApp, or by visiting our showroom directly. All contact details are available on the Contact Us page.",
  },
];

export default function Home() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
    
        <BrandMarquee />
     
      <HeroSection />

      {/* Services Overview */}
      <section className="container-padded py-16">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Trusted electronics and Home\Kitchen appliance solutions for everyday living.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <ServiceCard
            title="Electronics & Home \ Kitchen Appliances"
            description="Sales of quality home appliances, kitchen essentials, fans, water heaters, and electrical products."
            image={constructionImg}
            href="/construction"
          />
          <ServiceCard
            title="Sales & Support"
            description="Customer-focused sales assistance, warranty guidance, and after-sales support you can rely on."
            image={realEstateImg}
            href="/contact"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white">
        <div className="container-padded py-16">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Trusted Local Dealer", icon: "🏪" },
              { title: "Genuine Branded Products", icon: "✅" },
              { title: "Years of Customer Trust", icon: "🤝" },
              { title: "Reliable After-Sales Support", icon: "🛠️" },
            ].map((f, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-3 font-semibold text-primary">{f.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="card p-6">
              <div className="text-sm text-warmGray">Years of Service</div>
              <div className="text-2xl font-bold text-primary">
                <AnimatedCounter to={80} suffix="+" />
              </div>
            </div>
            <div className="card p-6">
              <div className="text-sm text-warmGray">Happy Customers</div>
              <div className="text-2xl font-bold text-primary">
                <AnimatedCounter to={20} suffix="K+" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary">
        <div className="container-padded py-12 text-center">
          <h3 className="text-white text-2xl font-bold">
            Looking for the right appliance?
          </h3>
          <p className="text-white/80 mt-2">
            Visit Modern Radio Service for trusted brands and honest guidance.
          </p>
          <div className="mt-6">
  <Link to="/contact" className="btn-accent">
    Contact Us Today
  </Link>
</div>

        </div>
      </section>

      {/* FAQs */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primaryBlue text-center section-title">
          Customer FAQs
        </h2>
        <p className="text-md text-textGray text-center mb-8">
          Quick answers to common questions about our products and services.
        </p>

        <div className="mt-6 mb-6 space-y-4">
          {clientFAQs.map((faq) => (
            <div
              key={faq.id}
              className="border border-lightSlate/50 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:border-accentCopper/50"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <p className="text-md font-semibold text-primaryBlue">
                  {faq.question}
                </p>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openId === faq.id
                      ? "rotate-180 text-accentCopper"
                      : "text-textGray"
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openId === faq.id
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-textGray p-5 pt-4 border-t border-lightSlate/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
