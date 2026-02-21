import Navbar from './components/layout/Navbar'
import HeroSection from './components/home/HeroSection'
import BrandsSection from './components/home/BrandsSection'
import WeBuySitesSection from './components/home/WeBuySitesSection'
import ContactSection from './components/home/ContactSection'
import Footer from './components/home/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <WeBuySitesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
