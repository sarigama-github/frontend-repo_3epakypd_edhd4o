import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1536305030431-83c1f1f79cbe?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469285994282-454ceb49e63c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1600&auto=format&fit=crop'
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Before & After</h2>
          <div className="mt-2 h-1 w-36 bg-gradient-to-r from-red-600 to-red-400" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-white/10"
            >
              <img src={src} alt="Detailing work" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-red-600/0 opacity-0 transition duration-300 group-hover:bg-red-600/20 group-hover:opacity-100">
                <div className="h-10 w-10 rounded-full border-2 border-white/70 shadow-[0_0_30px_rgba(220,38,38,0.7)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
