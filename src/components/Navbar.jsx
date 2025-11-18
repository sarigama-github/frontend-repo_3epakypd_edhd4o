import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-extrabold tracking-wide text-white">Redline<span className="text-red-600">Detailing</span></a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#why" className="hover:text-white">Why Us</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#testimonials" className="hover:text-white">Reviews</a>
          <a href="#service-area" className="hover:text-white">Service Area</a>
          <a href="#contact" className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(220,38,38,0.8)] hover:bg-red-500">Call Now</a>
        </nav>
        <button className="sm:hidden text-white" aria-label="Menu"><Menu className="h-6 w-6" /></button>
      </div>
    </header>
  )
}
