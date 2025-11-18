import { ShieldCheck, DollarSign, Users, Zap } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Professional Detailers', desc: 'Certified experts using premium products and proven techniques.' },
  { icon: Zap, title: 'Fast & Reliable', desc: 'Prompt arrivals, efficient service, and flawless finishes.' },
  { icon: DollarSign, title: 'Affordable Packages', desc: 'Transparent pricing with excellent value for every vehicle.' },
  { icon: Users, title: 'Fully Mobile', desc: 'We come to you—home, office, or anywhere convenient.' }
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Why Choose Us</h2>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-red-600 to-red-400" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl bg-white p-6 shadow-lg">
              <div className="absolute inset-x-6 top-0 h-1 bg-red-600" />
              <div className="mb-4 inline-flex rounded-lg bg-red-600/10 p-3 text-red-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-1 text-lg font-bold text-black">{title}</h3>
              <p className="text-sm text-black/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
