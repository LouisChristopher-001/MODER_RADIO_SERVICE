import { motion } from "framer-motion";

export default function SupervisionStepper({ title, steps = [] }) {
  return (
    <section className="mt-12">
      <h2 className="section-title">{title}</h2>
      <div className="mt-6 overflow-x-auto">
        <div className="p-4 bg-white rounded-2xl flex flex-col flex-wrap gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="card p-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center gap-2">
                <div className="h-6 w-6 rounded-full bg-primary text-white grid place-items-center text-xs">
                  {idx + 1}
                </div>
                <div className="text-sm font-semibold text-primary">{step}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}