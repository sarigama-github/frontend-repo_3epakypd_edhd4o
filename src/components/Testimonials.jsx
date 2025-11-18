const testimonials = [
  { name: 'Marcus R.', quote: 'They made my car look brand new again. Incredible attention to detail and very professional.' },
  { name: 'Danielle P.', quote: 'Booked on my lunch break and they arrived on time. Fast, friendly, and the results were amazing.' },
  { name: 'Ethan K.', quote: 'The ceramic coating is unreal—water just flies off. Worth every penny.' }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-neutral-950 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Testimonials</h2>
          <div className="mt-2 h-1 w-36 bg-gradient-to-r from-red-600 to-red-400" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-black p-6 text-white shadow-xl">
              <p className="mb-4 text-white/80">“{t.quote}”</p>
              <div className="h-[1px] w-16 bg-gradient-to-r from-red-600 to-red-400" />
              <p className="mt-3 font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
