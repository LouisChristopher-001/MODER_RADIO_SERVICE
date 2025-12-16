import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeliverableCard from "./DeliverableCard.jsx";
import TimelineSection from "./TimelineSection.jsx";
import SupervisionStepper from "./SupervisionStepper.jsx";
import FeeTable from "./FeeTable.jsx";
import { CheckCircle } from "lucide-react";

export default function ConstructionTabs() {
  const [active, setActive] = useState("Deliverables");

  const tabs = [
    "Deliverables",
    "Product Categories",
    "Purchase Stages",
    "Service Support",
    // "Fee & Payments",
  ];

  const deliverables = [
    { title: "Branded Electronics" },
    { title: "Home Appliances" },
    { title: "Kitchen Essentials" },
    { title: "Electrical Products" },
    { title: "Warranty Guidance" },
    { title: "After-Sales Support" },
    { title: "Finance Assistance" },
    { title: "Local Delivery" },
  ];

  const interior = [
    "Mixers & Grinders",
    "Gas Stoves & Cooktops",
    "Induction Stoves",
    "Water Heaters",
    "Fans & Lighting",
    "Kitchen Appliances",
    "Small Electricals",
  ];

  const constructionStages = [
    "Customer Requirement Understanding",
    "Product Comparison & Selection",
    "Billing & Warranty Explanation",
    "Delivery / Pickup Confirmation",
  ];

  const supervisionSteps = [
    "Product Installation Guidance",
    "Warranty Registration Support",
    "Service Centre Coordination",
    "Spare Parts Assistance",
    "Post-Purchase Support",
  ];

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold border ${
              active === t
                ? "bg-primary text-white border-primary"
                : "bg-white text-primary border-primary/20"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {active === "Deliverables" && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-center">
                {deliverables.map((d, i) => (
                  <DeliverableCard
                    key={i}
                    title={d.title}
                    Icon={CheckCircle}
                  />
                ))}
              </div>
            )}

            {active === "Product Categories" && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {interior.map((d, i) => (
                  <DeliverableCard
                    key={i}
                    title={d}
                    Icon={CheckCircle}
                  />
                ))}
              </div>
            )}

            {active === "Purchase Stages" && (
              <TimelineSection
                title="Purchase Stages"
                steps={constructionStages}
              />
            )}

            {active === "Service Support" && (
              <SupervisionStepper
                title="Service & Support"
                steps={supervisionSteps}
              />
            )}

            {/* {active === "Fee & Payments" && <FeeTable />} */}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
