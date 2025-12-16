import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const locations = [
  {

    id: 0,
    name: "Kumbakonam – Main Showroom",
    address: "No.11,TSR Big street, Kumbakonam",
    phone: "+91 95855 14802",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15667.982005140013!2d79.36907209641629!3d10.96371160428992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baacd4dd6612a37%3A0x91d9c905b8039ca9!2sModern%20Radio%20Service%20(%20MRS%20)!5e0!3m2!1sen!2sin!4v1765870603228!5m2!1sen!2sin",
  },
  {
    id: 1,
    name: "Branch-1",
    address: "No.2,TSR Big street, Kumbakonam",
    phone: "+91 95855 14802",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15667.982005140013!2d79.36907209641629!3d10.96371160428992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baacd4dd6612a37%3A0x91d9c905b8039ca9!2sModern%20Radio%20Service%20(%20MRS%20)!5e0!3m2!1sen!2sin!4v1765870603228!5m2!1sen!2sin",
  },
  {
    id: 2,
    name: "Branch-2",
    address: "25,Kumbeswarar, South street, Thanjavur Main Rd, Kumbakonam, Tamil Nadu 612001",
    phone: "+91 95855 14802",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.2661325751969!2d79.37219136037908!3d10.958498195020566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baacd2798184c93%3A0x34aa6ab7b0580c5!2sMRS%20Kumbakonam%20kumbeswarar%20south%20street!5e0!3m2!1sen!2sin!4v1765871434440!5m2!1sen!2sin",
  },
  {
    id: 3,
    name: "Thiruvarur - Exclusive For LG",
    address: "64, North St, opp.to CANARA bank, Madappuram, Thiruvarur, Tamil Nadu 610001",
    phone: "+91 7603977557",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1385.731179969394!2d79.6341493388625!3d10.777599698601815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5547345a0345cd%3A0x60ddada8c0d9cdf!2sLG%20Best%20Shop-MODERN%20RADIO%20SERVICE!5e0!3m2!1sen!2sin!4v1765871587239!5m2!1sen!2sin",
  },
  
];


export default function ContactMapLayout() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto space-y-5">

      {/* Address pill */}
      <div className="bg-white shadow-sm rounded-full px-6 py-3 text-center">
        <h4 className="text-sm font-semibold text-primary">
          {locations[active].name}
        </h4>
      </div>

      {/* Top buttons */}
      <div className="flex justify-between px-6">
        <LocationButton
          label="KMU – Main Showroom"
          active={active === 0}
          onClick={() => setActive(0)}
        />
        <LocationButton
          label="Branch - 1"
          active={active === 1}
          onClick={() => setActive(1)}
        />
      </div>

      {/* Square + circular map */}
      <motion.div
  animate={{ rotate: active * 90 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  className="relative w-full aspect-square max-w-[300px] mx-auto bg-primary rounded-xl flex items-center justify-center"
>
  <motion.div
    animate={{ rotate: -(active * 90) }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    className="w-full h-full rounded-full overflow-hidden bg-white shadow-md"
  >
    <AnimatePresence mode="wait">
      <motion.iframe
        key={locations[active].id}
        src={locations[active].mapSrc}
        className="w-full h-full border-0 pointer-events-none"
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </AnimatePresence>
  </motion.div>
</motion.div>


      {/* Bottom buttons */}
      <div className="flex justify-between px-6">
        <LocationButton
          label="Branch - 2"
          active={active === 2}
          onClick={() => setActive(2)}
        />
        <LocationButton
          label="Thiruvarur"
          active={active === 3}
          onClick={() => setActive(3)}
        />
      </div>

      {/* Address & contact block */}
      <div className="bg-white rounded-xl shadow-sm p-4 text-center space-y-1">
        <p className="text-sm text-gray-700">
          {locations[active].address}
        </p>
        <p className="text-sm font-medium text-primary">
          {locations[active].phone}
        </p>
      </div>
    </div>
  );
}

/* 🔹 Reusable button */
function LocationButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-200
        ${
          active
            ? "bg-primary text-white shadow"
            : "bg-white text-gray-700 shadow-sm hover:bg-primary/10"
        }
      `}
    >
      {label}
    </button>
  );
}
