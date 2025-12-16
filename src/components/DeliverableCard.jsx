import { motion } from 'framer-motion'

export default function DeliverableCard({ title, Icon }) {
  return (
    <motion.div
      className="card p-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3">
        {Icon && <Icon className="h-6 w-6 text-primary" aria-hidden="true" />}
        <h3 className="font-semibold text-primary text-sm">{title}</h3>
      </div>
    </motion.div>
  )
}