import { MapPin } from 'lucide-react'

const areas = ['Downtown', 'Uptown', 'Westside', 'Eastside', 'North Hills', 'South Park']

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-white py-16 text-black sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="text-red-600">Service Area</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <ul className="grid grid-cols-2 gap-3">
              {areas.map((a) => (
                <li key={a} className="flex items-center gap-2 rounded-lg border border-black/10 bg-white p-3">
                  <MapPin className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium">{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-black/10 p-2">
            <img
              src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1400&auto=format&fit=crop"
              alt="Service area map"
              className="h-72 w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
