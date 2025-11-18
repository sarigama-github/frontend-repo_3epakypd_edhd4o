import { motion } from 'framer-motion'

const packages = [
  { name: 'Exterior Detail', items: ['Foam wash', 'Clay bar', 'Wax/sealant', 'Wheel & tire care'] },
  { name: 'Interior Detail', items: ['Deep vacuum', 'Steam clean', 'Leather treatment', 'Odor neutralize'] },
  { name: 'Full Detail', items: ['Exterior + Interior', 'Engine bay wipe-down', 'Glass polish'] },
  { name: 'Ceramic Coating', items: ['2–5 year protection', 'Hydrophobic finish', 'High gloss'] },
  { name: 'Headlight Restoration', items: ['Oxidation removal', 'UV sealant', 'Night visibility boost'] }
]

export default function Services() {
  return (
    <section id="services" className="bg-neutral-950 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Services</h2>
            <div className="mt-2 h-1 w-24 bg-gradient-to-r from-red-600 to-red-400" />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent" />
              <div className="relative">
                <h3 className="mb-3 text-xl font-bold text-white">{pkg.name}</h3>
                <ul className="mb-6 list-disc space-y-1 pl-5 text-sm text-white/80">
                  {pkg.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <a
                  href="tel:555-123-4567"
                  className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(220,38,38,0.8)] transition hover:bg-red-500"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
