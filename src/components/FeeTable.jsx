import { motion } from 'framer-motion'

const stages = [
  { stage: 'Contract Signing', description: 'Advance', percent: 30 },
  { stage: 'Finalization of Plan', description: 'Design Confirmation', percent: 35 },
  { stage: 'Finalization of Elevation', description: 'Elevation Approval', percent: 20 },
  { stage: "3D Deliverance", description: 'Final Visuals', percent: 15 },
]

export default function FeeTable() {
  const total = stages.reduce((sum, s) => sum + s.percent, 0)
  return (
    <section className="mt-12">
      <h2 className="section-title">Fee & Payments</h2>
      <div className="mt-6 card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-primary">Stage</th>
                <th className="text-left py-3 px-4 font-semibold text-primary">Description</th>
                <th className="text-left py-3 px-4 font-semibold text-primary">Payment %</th>
              </tr>
            </thead>
            <tbody>
              {stages.map((s, i) => (
                <tr key={i} className="border-t">
                  <td className="py-3 px-4">{s.stage}</td>
                  <td className="py-3 px-4 text-warmGray">{s.description}</td>
                  <td className="py-3 px-4">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.percent}%` }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="h-2 bg-accent rounded" />
                    <div className="text-xs text-warmGray mt-1">{s.percent}%</div>
                  </td>
                </tr>
              ))}
              {/* <tr className="border-t">
                <td className="py-3 px-4 font-semibold text-primary">Total</td>
                <td className="py-3 px-4"></td>
                <td className="py-3 px-4 font-semibold">{total}%</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}