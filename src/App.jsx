import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import Testimonials from './components/Testimonials'
import ServiceArea from './components/ServiceArea'
import ContactInfo from './components/ContactInfo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-red-600 selection:text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <WhyChooseUs />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <ServiceArea />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  )
}

export default App
