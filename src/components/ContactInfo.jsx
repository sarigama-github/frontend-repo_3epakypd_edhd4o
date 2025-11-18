import { PhoneCall, Mail, Clock, MapPin } from 'lucide-react'

export default function ContactInfo() {
  return (
    <section id="contact" className="bg-black py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Contact & Business Info</h2>
          <div className="mt-2 h-1 w-48 bg-gradient-to-r from-red-600 to-red-400" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <PhoneCall className="h-5 w-5 text-red-500" />
              <a href="tel:555-123-4567" className="text-lg font-semibold">(555) 123-4567</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-red-500" />
              <a href="mailto:info@mobiledetailing.com" className="text-white/90">info@mobiledetailing.com</a>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-red-500" />
              <p className="text-white/90">Mon–Sat: 8am – 6pm</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-red-500" />
              <p className="text-white/90">Your City, Your State</p>
            </div>
            <a
              href="tel:555-123-4567"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-[0_10px_30px_-10px_rgba(220,38,38,0.8)] transition hover:bg-red-500"
            >
              Call Now
            </a>
          </div>

          <div className="rounded-xl border border-white/10 p-2">
            <img
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1400&auto=format&fit=crop"
              alt="Glossy car detail"
              className="h-72 w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
