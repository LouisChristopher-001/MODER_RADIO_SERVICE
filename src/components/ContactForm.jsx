import { motion } from 'framer-motion'

export default function ContactForm() {
  return (
    <form action="https://formspree.io/f/your-form-id" method="POST" className="grid gap-4 card p-6">
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        type="text"
        name="name"
        placeholder="Name"
        className="border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        type="email"
        name="email"
        placeholder="Email"
        className="border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        type="tel"
        name="phone"
        placeholder="Phone"
        className="border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <motion.textarea
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        name="message"
        placeholder="Message"
        rows={5}
        className="border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button type="submit" className="btn-accent">Send Message</button>
    </form>
  )
}