import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeliverableCard from "./DeliverableCard.jsx";
import { CheckCircle, ChevronDown } from "lucide-react";

export default function ConstructionTabs() {
  const [activeTab, setActiveTab] = useState("Deliverables");
  const [openCategory, setOpenCategory] = useState(null);

  const tabs = ["Deliverables", "Product Categories"];

  const deliverables = [
    "Branded Electronics",
    "Home Appliances",
    "Kitchen Essentials",
    "Electrical Products",
    "Warranty Guidance",
    "After-Sales Assistance",
    "Finance Support",
  ];

  const categories = [
    {
      name: "LED TVs",
      sub: ["Smart LED TVs", "Android TVs", "4K Ultra HD TVs"],
    },
    {
      name: "Mobile Phones",
      sub: ["Smartphones", "Feature Phones", "Accessories"],
    },
    {
      name: "Water Heaters",
      sub: ["Storage Water Heaters", "Instant Water Heaters"],
    },
    {
      name: "OTG & Ovens",
      sub: ["OTG Ovens", "Microwave Ovens", "Built-in Ovens"],
    },
    {
      name: "Mixers & Grinders",
      sub: ["Mixer Grinders", "Wet Grinders", "Juicer Mixers"],
    },
    {
      name: "Gas Stoves & Cooktops",
      sub: ["Gas Stoves", "Glass Cooktops", "Built-in Hobs"],
    },
    {
      name: "Fans & Lighting",
      sub: ["Ceiling Fans", "Table Fans", "LED Lighting"],
    },
    {
      name: "Small Electricals",
      sub: ["Irons", "Kettles", "Rice Cookers"],
    },
  ];

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => {
              setActiveTab(t);
              setOpenCategory(null);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-semibold border transition ${
              activeTab === t
                ? "bg-primary text-white border-primary"
                : "bg-white text-primary border-primary/20"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          {/* Deliverables */}
          {activeTab === "Deliverables" && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {deliverables.map((d, i) => (
                <DeliverableCard
                  key={i}
                  title={d}
                  Icon={CheckCircle}
                />
              ))}
            </div>
          )}

          {/* Product Categories with Subcategories */}
          {activeTab === "Product Categories" && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat, i) => {
                const isOpen = openCategory === cat.name;

                return (
                  <div
                    key={i}
                    className="card p-5 cursor-pointer"
                    onClick={() =>
                      setOpenCategory(isOpen ? null : cat.name)
                    }
                  >
                    {/* Category header */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-primary">
                        {cat.name}
                      </h3>
                      <ChevronDown
                        className={`w-4 h-4 text-primary transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Subcategories */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="mt-3 space-y-2 text-sm text-warmGray overflow-hidden"
                        >
                          {cat.sub.map((s, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="w-4 h-4 text-accent" />
                              {s}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
