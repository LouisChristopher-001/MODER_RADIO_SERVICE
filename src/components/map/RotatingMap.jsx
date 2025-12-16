import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* 1️⃣ DATA MODEL (LOCAL & SAFE) */
const locations = [
  {

    id: 0,
    name: "Kumbakonam – Main Showroom",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15667.982005140013!2d79.36907209641629!3d10.96371160428992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baacd4dd6612a37%3A0x91d9c905b8039ca9!2sModern%20Radio%20Service%20(%20MRS%20)!5e0!3m2!1sen!2sin!4v1765870603228!5m2!1sen!2sin",
  },
  {
    id: 1,
    name: "Branch-2",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.2661325751969!2d79.37219136037908!3d10.958498195020566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baacd2798184c93%3A0x34aa6ab7b0580c5!2sMRS%20Kumbakonam%20kumbeswarar%20south%20street!5e0!3m2!1sen!2sin!4v1765871434440!5m2!1sen!2sin",
  },
  {
    id: 2,
    name: "Thiruvarur",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1385.731179969394!2d79.6341493388625!3d10.777599698601815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5547345a0345cd%3A0x60ddada8c0d9cdf!2sLG%20Best%20Shop-MODERN%20RADIO%20SERVICE!5e0!3m2!1sen!2sin!4v1765871587239!5m2!1sen!2sin",
  },
  {
    id: 3,
    name: "Branch-1",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15667.982005140013!2d79.36907209641629!3d10.96371160428992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baacd4dd6612a37%3A0x91d9c905b8039ca9!2sModern%20Radio%20Service%20(%20MRS%20)!5e0!3m2!1sen!2sin!4v1765870603228!5m2!1sen!2sin",
  },
];

/* 2️⃣ POSITION HELPER */
function cornerPosition(index) {
  const positions = [
    { top: "-14px", left: "50%", transform: "translateX(-50%)" },
    { right: "-14px", top: "50%", transform: "translateY(-50%)" },
    { bottom: "-14px", left: "50%", transform: "translateX(-50%)" },
    { left: "-14px", top: "50%", transform: "translateY(-50%)" },
  ];
  return positions[index];
}

/* 3️⃣ COMPONENT */
export default function RotatingMap() {
  const [active, setActive] = useState(0);

  /* 🛡 SAFETY GUARD */
  if (!locations || locations.length === 0) {
    return null;
  }

  return (
    <div className="relative w-[420px] h-[420px] mx-auto">

      {/* Rotating diamond */}
      <motion.div
        animate={{ rotate: active * 90 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 bg-primary/5 rotate-45 rounded-2xl"
      />

      {/* Centre map */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-60 h-60 rounded-full overflow-hidden bg-white shadow-xl">

          <AnimatePresence mode="wait">
            <motion.iframe
              key={locations[active].id}
              src={locations[active].mapSrc}
              className="w-full h-full border-0 pointer-events-none"
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>

        </div>
      </div>

      {/* Corner buttons */}
      {locations.map((loc, i) => (
        <button
          key={loc.id}
          onClick={() => setActive(i)}
          style={cornerPosition(i)}
          className={`
            absolute px-3 py-2 text-xs rounded-lg bg-white shadow
            transition
            ${active === i ? "text-primary font-semibold" : "text-gray-600"}
          `}
        >
          {loc.name}
        </button>
      ))}
    </div>
  );
}
