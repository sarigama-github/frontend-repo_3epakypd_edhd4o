import { Facebook, Instagram, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-lg font-bold">Redline Mobile Detailing</p>
            <p className="text-sm text-white/60">Premium on-site detailing</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:555-123-4567" className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(220,38,38,0.8)] transition hover:bg-red-500">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href="mailto:info@mobiledetailing.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
        <div className="mt-4 text-center text-xs text-white/60">© {new Date().getFullYear()} Redline Mobile Detailing. All rights reserved.</div>
      </div>
    </footer>
  )
}
