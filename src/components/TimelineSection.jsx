import { motion } from 'framer-motion'

export default function TimelineSection({ title, steps = [] }) {
  return (
    <section className="mt-12">
      <h2 className="section-title">{title}</h2>
      <div className="mt-6 relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300" />
        <ul className="space-y-6">
          {steps.map((step, idx) => (
            <motion.li
              key={idx}
              className="relative pl-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <div className="absolute left-3 top-5 h-3 w-3 rounded-full bg-primary" />
              <div className="card p-4">
                <div className="text-sm font-semibold text-primary">{step}</div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}