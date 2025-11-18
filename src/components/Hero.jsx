import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D Car */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark gradient to boost contrast over 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-24 sm:px-8">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-600/50 bg-red-600/10 px-4 py-1 text-sm text-red-400"
          >
            Premium • Mobile • On‑Site
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="block">Premium Mobile</span>
            <span className="block text-red-500">Car Detailing.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 max-w-xl text-lg text-white/80"
          >
            We come to you and make your car look brand new.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="tel:555-123-4567"
              className="group inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-[0_10px_30px_-10px_rgba(220,38,38,0.8)] transition hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              Call Now
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white text-black px-6 py-3 text-base font-semibold shadow-sm transition hover:bg-white/90"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* subtle glossy accent */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-red-600/10 to-transparent" />
    </section>
  )
}
